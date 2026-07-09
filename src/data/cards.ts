export interface PictureCard {
  /** Number printed on the physical card (1–22). */
  id: number;
  /** Path under public/, without the base prefix. */
  image: string;
}

export const pictureCards: PictureCard[] = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  image: `cards/blue/${i + 1}.png`,
}));

export const cardBacks = {
  blue: 'cards/back-blue.png',
  green: 'cards/back-green.png',
};
