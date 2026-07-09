import { locales } from './utils';

/**
 * Build-time locale parity check: every content slug must exist in every locale.
 * Entry ids look like "en/discover-emotions". Throws (failing the build) on gaps.
 */
export function checkParity(entryIds: string[], collection: string): void {
  const bySlug = new Map<string, Set<string>>();
  for (const id of entryIds) {
    const [locale, ...rest] = id.split('/');
    const slug = rest.join('/');
    if (!bySlug.has(slug)) bySlug.set(slug, new Set());
    bySlug.get(slug)!.add(locale!);
  }
  const problems: string[] = [];
  for (const [slug, present] of bySlug) {
    const missing = locales.filter((l) => !present.has(l));
    if (missing.length > 0) {
      problems.push(`"${slug}" is missing locales: ${missing.join(', ')}`);
    }
  }
  if (problems.length > 0) {
    throw new Error(`Locale parity check failed for collection "${collection}":\n${problems.join('\n')}`);
  }
}
