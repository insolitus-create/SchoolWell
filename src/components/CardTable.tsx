import { useEffect, useRef, useState } from 'react';
import type { Locale } from '../i18n/utils';
import { ui } from '../i18n/ui';
import { questions } from '../data/questions';
import { pictureCards, cardBacks } from '../data/cards';

const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
const asset = (path: string) => `${base}/${path}`;

function shuffle(ids: number[]): number[] {
  const arr = [...ids];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

interface DeckState {
  order: number[];
  pos: number;
  current: number | null;
  /** Bumped on every draw so the flip animation retriggers. */
  drawKey: number;
}

const emptyDeck: DeckState = { order: [], pos: 0, current: null, drawKey: 0 };

function draw(state: DeckState, ids: number[]): DeckState {
  let { order, pos } = state;
  if (order.length === 0 || pos >= order.length) {
    order = shuffle(ids);
    pos = 0;
    // Avoid showing the same card twice in a row across a reshuffle.
    if (order.length > 1 && order[0] === state.current) {
      [order[0], order[1]] = [order[1]!, order[0]!];
    }
  }
  return { order, pos: pos + 1, current: order[pos]!, drawKey: state.drawKey + 1 };
}

export default function CardTable({ lang }: { lang: Locale }) {
  const t = ui[lang].table;
  const blueIds = pictureCards.map((c) => c.id);
  const greenIds = questions.map((q) => q.id);

  const [blue, setBlue] = useState<DeckState>(emptyDeck);
  const [green, setGreen] = useState<DeckState>(emptyDeck);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const drawBlue = () => setBlue((s) => draw(s, blueIds));
  const drawGreen = () => setGreen((s) => draw(s, greenIds));
  const shuffleAll = () => {
    setBlue(emptyDeck);
    setGreen(emptyDeck);
  };
  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void rootRef.current?.requestFullscreen();
  };

  const blueRemaining = blue.order.length === 0 ? blueIds.length : blue.order.length - blue.pos;
  const greenRemaining = green.order.length === 0 ? greenIds.length : green.order.length - green.pos;
  const question = questions.find((q) => q.id === green.current);

  return (
    <div
      ref={rootRef}
      className={`flex flex-col gap-4 rounded-2xl bg-navy-800 p-4 sm:p-6 ${
        isFullscreen ? 'h-dvh justify-center overflow-auto rounded-none' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-navy-100 sm:text-base">{t.hint}</p>
        <div className="ms-auto flex gap-2">
          <button
            type="button"
            onClick={shuffleAll}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {t.shuffle}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-full bg-leaf-500 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-leaf-400"
          >
            {isFullscreen ? t.exitFullscreen : t.fullscreen}
          </button>
        </div>
      </div>

      <div className="grid flex-1 gap-6 md:grid-cols-2">
        {/* Blue deck: picture cards */}
        <section className="flex flex-col items-center gap-4">
          <div className="card-perspective flex w-full flex-1 items-center justify-center">
            {blue.current === null ? (
              <Placeholder label={t.drawPicture} onClick={drawBlue} />
            ) : (
              <figure key={blue.drawKey} className="card-flip-in relative">
                <img
                  src={asset(`cards/blue/${blue.current}.png`)}
                  alt={`${t.cardNo} ${blue.current}`}
                  className="max-h-[56vh] rounded-xl shadow-2xl md:max-h-[62vh]"
                />
                <figcaption className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-900 px-3 py-0.5 text-xs font-bold text-white shadow">
                  {t.cardNo} {blue.current}
                </figcaption>
              </figure>
            )}
          </div>
          <Deck
            back={asset(cardBacks.blue)}
            label={blue.current === null ? t.drawPicture : t.newPicture}
            deckName={t.pictureDeck}
            remaining={blueRemaining}
            remainingLabel={t.remaining}
            onClick={drawBlue}
          />
        </section>

        {/* Green deck: question cards */}
        <section className="flex flex-col items-center gap-4">
          <div className="card-perspective flex w-full flex-1 items-center justify-center">
            {question === undefined ? (
              <Placeholder label={t.drawQuestion} onClick={drawGreen} />
            ) : (
              <figure
                key={green.drawKey}
                className="card-flip-in relative flex aspect-2/3 max-h-[56vh] w-full max-w-[38vh] items-center justify-center rounded-xl bg-gradient-to-b from-leaf-400 to-leaf-600 p-4 shadow-2xl md:max-h-[62vh] md:max-w-[42vh]"
              >
                <div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-white/60 bg-cream px-4 py-6 text-center">
                  <p className="text-[clamp(1rem,2.6vh,1.6rem)]/snug font-bold text-navy-900">
                    {question.text[lang]}
                  </p>
                </div>
                <figcaption className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-leaf-700 px-3 py-0.5 text-xs font-bold text-white shadow">
                  {t.cardNo} {question.id}
                </figcaption>
              </figure>
            )}
          </div>
          <Deck
            back={asset(cardBacks.green)}
            label={question === undefined ? t.drawQuestion : t.newQuestion}
            deckName={t.questionDeck}
            remaining={greenRemaining}
            remainingLabel={t.remaining}
            onClick={drawGreen}
          />
        </section>
      </div>
    </div>
  );
}

function Placeholder({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex aspect-2/3 max-h-[48vh] w-full max-w-[32vh] items-center justify-center rounded-xl border-2 border-dashed border-white/30 px-6 text-center text-lg font-semibold text-white/60 transition hover:border-white/60 hover:text-white"
    >
      {label}
    </button>
  );
}

function Deck({
  back,
  label,
  deckName,
  remaining,
  remainingLabel,
  onClick,
}: {
  back: string;
  label: string;
  deckName: string;
  remaining: number;
  remainingLabel: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-4 rounded-xl bg-white/5 px-5 py-3 transition hover:bg-white/10"
    >
      <span className="relative block">
        <img
          src={back}
          alt=""
          className="absolute left-1 top-1 h-20 rounded-md opacity-60 shadow"
          aria-hidden="true"
        />
        <img
          src={back}
          alt=""
          className="relative h-20 rounded-md shadow-lg transition group-hover:-translate-y-1"
        />
      </span>
      <span className="text-left">
        <span className="block text-xs font-semibold uppercase tracking-wide text-navy-200">
          {deckName} · {remaining} {remainingLabel}
        </span>
        <span className="block text-base font-bold text-white">{label}</span>
      </span>
    </button>
  );
}
