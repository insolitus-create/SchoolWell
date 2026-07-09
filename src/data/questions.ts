import type { Locale } from '../i18n/utils';

export interface QuestionCard {
  /** Number printed on the physical card (25–42). */
  id: number;
  text: Record<Locale, string>;
}

// Transcribed verbatim from the physical green cards (assets/green/25–42.png).
export const questions: QuestionCard[] = [
  {
    id: 25,
    text: {
      pl: 'Znajdź na obrazku jeden szczegół (np. kreskę, cień, element tła), który najbardziej pasuje do tej emocji.',
      ro: 'Găsește în imagine un detaliu (de ex. o linie, o umbră, un element din fundal) care se potrivește cel mai bine cu această emoție.',
      en: 'Find one detail in the picture (e.g. a line, a shadow, a background element) that best matches this emotion.',
    },
  },
  {
    id: 26,
    text: {
      pl: 'Jakie emocje widzisz na tej karcie? Czy to jedna emocja czy więcej?',
      ro: 'Ce emoții vezi în această imagine? Este o singură emoție sau mai multe?',
      en: 'What emotions do you see on this card? Is it one emotion or more?',
    },
  },
  {
    id: 27,
    text: {
      pl: 'Co mogło się wydarzyć, że postać z karty tak się czuje?',
      ro: 'Ce s-ar fi putut întâmpla ca personajul să se simtă așa?',
      en: 'What might have happened that makes the character feel this way?',
    },
  },
  {
    id: 28,
    text: {
      pl: 'W jakiej sytuacji pojawia się taka emocja? Czy to emocja przyjemna czy trudna?',
      ro: 'În ce situație apare această emoție? Este o emoție plăcută sau dificilă?',
      en: 'In what situation does this emotion appear? Is it a pleasant or a difficult emotion?',
    },
  },
  {
    id: 29,
    text: {
      pl: 'Co ta postać mogłaby powiedzieć? Jaki miałaby głos (cichy, głośny, szybki)?',
      ro: 'Ce ar putea spune acest personaj? Cum ar suna vocea lui/ei (încet, tare, rapid)?',
      en: 'What could this character say? What would their voice sound like (quiet, loud, fast)?',
    },
  },
  {
    id: 30,
    text: {
      pl: 'Jaki tytuł mogłaby mieć ta karta? Dlaczego taki?',
      ro: 'Ce titlu ar putea avea această imagine? De ce?',
      en: 'What title could this card have? Why?',
    },
  },
  {
    id: 31,
    text: {
      pl: 'Jak myślisz, co czuje ta postać? Gdzie w ciele można czuć tę emocję?',
      ro: 'Ce crezi că simte acest personaj? Unde în corp se poate simți această emoție?',
      en: 'What do you think this character is feeling? Where in the body can this emotion be felt?',
    },
  },
  {
    id: 32,
    text: {
      pl: 'Co mogło się wydarzyć chwilę wcześniej?',
      ro: 'Ce s-ar fi putut întâmpla cu puțin timp înainte?',
      en: 'What might have happened just before?',
    },
  },
  {
    id: 33,
    text: {
      pl: 'Co może wydarzyć się za chwilę?',
      ro: 'Ce s-ar putea întâmpla în continuare?',
      en: 'What might happen next?',
    },
  },
  {
    id: 34,
    text: {
      pl: 'Czy postać z karty czegoś teraz potrzebuje?',
      ro: 'Are personajul nevoie de ceva acum?',
      en: 'Does the character need something right now?',
    },
  },
  {
    id: 35,
    text: {
      pl: 'Co ta postać chciałaby usłyszeć?',
      ro: 'Ce ar dori acest personaj să audă?',
      en: 'What would this character like to hear?',
    },
  },
  {
    id: 36,
    text: {
      pl: 'Gdyby ta emocja była kolorem – jaki by to był kolor?',
      ro: 'Dacă această emoție ar fi o culoare – ce culoare ar fi?',
      en: 'If this emotion were a color – what color would it be?',
    },
  },
  {
    id: 37,
    text: {
      pl: 'Gdyby ta emocja była zwierzęciem – jakie by to było zwierzę?',
      ro: 'Dacă această emoție ar fi un animal – ce animal ar fi?',
      en: 'If this emotion were an animal – what animal would it be?',
    },
  },
  {
    id: 38,
    text: {
      pl: 'Gdyby ta emocja była pogodą – co by to było?',
      ro: 'Dacă această emoție ar fi o vreme – cum ar fi?',
      en: 'If this emotion were weather – what would it be?',
    },
  },
  {
    id: 39,
    text: {
      pl: 'Czy ta emocja jest silna czy słaba? Czy trwa krótko czy długo?',
      ro: 'Este această emoție puternică sau slabă? Durează puțin sau mult?',
      en: 'Is this emotion strong or weak? Does it last a short time or a long time?',
    },
  },
  {
    id: 40,
    text: {
      pl: 'Czy ta emocja może się zmienić?',
      ro: 'Se poate schimba această emoție?',
      en: 'Can this emotion change?',
    },
  },
  {
    id: 41,
    text: {
      pl: 'Wymyśl historię do tej karty. Nadaj tej historii tytuł. Czy ktoś jeszcze mógłby się tu pojawić?',
      ro: 'Inventează o poveste pentru această imagine. Dă un titlu acestei povești. Ar mai putea apărea cineva aici?',
      en: 'Create a story for this card. Give this story a title. Could someone else appear here?',
    },
  },
  {
    id: 42,
    text: {
      pl: 'Co powiedziałbyś / powiedziałabyś postaci z obrazka?',
      ro: 'Ce i-ai spune personajului din imagine?',
      en: 'What would you say to the character in the picture?',
    },
  },
];
