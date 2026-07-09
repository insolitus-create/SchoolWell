import type { Locale } from './utils';

export interface UIStrings {
  siteName: string;
  tagline: string;
  nav: { home: string; cards: string; gallery: string; activities: string };
  home: {
    lead: string;
    cardsTitle: string;
    cardsDesc: string;
    galleryTitle: string;
    galleryDesc: string;
    activitiesTitle: string;
    activitiesDesc: string;
    open: string;
  };
  table: {
    pictureDeck: string;
    questionDeck: string;
    drawPicture: string;
    drawQuestion: string;
    newPicture: string;
    newQuestion: string;
    shuffle: string;
    fullscreen: string;
    exitFullscreen: string;
    remaining: string;
    cardNo: string;
    hint: string;
  };
  gallery: {
    title: string;
    pictures: string;
    questions: string;
    close: string;
  };
  activities: {
    title: string;
    lead: string;
    guidelinesTitle: string;
    sayTitle: string;
    sayItems: string[];
    duringTitle: string;
    duringItems: string[];
    avoidTitle: string;
    avoidItems: string[];
    format: string;
    time: string;
    goals: string;
    back: string;
  };
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    siteName: 'SchoolWell Cards',
    tagline: 'Emotion cards for conversations in the classroom',
    nav: { home: 'Home', cards: 'Card table', gallery: 'Gallery', activities: 'Activities' },
    home: {
      lead: 'A digital version of the SchoolWell emotion cards — 22 picture cards and 18 question cards that help students talk about emotions, needs, and relationships.',
      cardsTitle: 'Card table',
      cardsDesc: 'Shuffle and draw picture and question cards, just like with the physical deck. Made for projecting in class.',
      galleryTitle: 'Gallery',
      galleryDesc: 'Browse all 22 picture cards and 18 questions at your own pace.',
      activitiesTitle: 'Activities',
      activitiesDesc: 'Seven ready-to-use activity scenarios for lessons, group and individual sessions.',
      open: 'Open',
    },
    table: {
      pictureDeck: 'Picture cards',
      questionDeck: 'Question cards',
      drawPicture: 'Draw a picture card',
      drawQuestion: 'Draw a question',
      newPicture: 'New picture',
      newQuestion: 'New question',
      shuffle: 'Shuffle decks',
      fullscreen: 'Fullscreen',
      exitFullscreen: 'Exit fullscreen',
      remaining: 'in the deck',
      cardNo: 'Card',
      hint: 'Click a deck to draw a card. There are no right or wrong answers.',
    },
    gallery: {
      title: 'Gallery',
      pictures: 'Picture cards',
      questions: 'Question cards',
      close: 'Close',
    },
    activities: {
      title: 'Activities',
      lead: 'Activity scenarios using the cards — adapt them to your students’ age, group size, and available time.',
      guidelinesTitle: 'Before you begin',
      sayTitle: 'At the beginning, it helps to tell students:',
      sayItems: [
        '“There are no right or wrong answers.”',
        '“Everyone can share as much as they want.”',
        '“You can talk about the picture instead of talking about yourself.”',
      ],
      duringTitle: 'During the activities:',
      duringItems: [
        'start with simple and light questions',
        'thank students for their responses',
        'allow students to interpret the images in their own way',
        'do not force anyone to answer',
        'maintain a calm and supportive atmosphere',
      ],
      avoidTitle: 'What to avoid:',
      avoidItems: [
        'judging responses',
        'interpreting students',
        'asking overly personal questions',
        'putting pressure on students',
        'extending activities for too long',
      ],
      format: 'Format',
      time: 'Time',
      goals: 'Goals',
      back: 'All activities',
    },
  },
  pl: {
    siteName: 'SchoolWell Cards',
    tagline: 'Karty emocji do rozmów w klasie',
    nav: { home: 'Start', cards: 'Stół z kartami', gallery: 'Galeria', activities: 'Aktywności' },
    home: {
      lead: 'Cyfrowa wersja kart emocji SchoolWell — 22 karty z ilustracjami i 18 kart z pytaniami, które pomagają uczniom rozmawiać o emocjach, potrzebach i relacjach.',
      cardsTitle: 'Stół z kartami',
      cardsDesc: 'Tasuj i losuj karty z obrazkami i pytaniami — tak jak z fizyczną talią. Stworzony z myślą o wyświetlaniu na projektorze.',
      galleryTitle: 'Galeria',
      galleryDesc: 'Przeglądaj wszystkie 22 karty z ilustracjami i 18 pytań we własnym tempie.',
      activitiesTitle: 'Aktywności',
      activitiesDesc: 'Siedem gotowych scenariuszy zajęć na lekcje oraz spotkania grupowe i indywidualne.',
      open: 'Otwórz',
    },
    table: {
      pictureDeck: 'Karty z obrazkami',
      questionDeck: 'Karty z pytaniami',
      drawPicture: 'Wylosuj kartę z obrazkiem',
      drawQuestion: 'Wylosuj pytanie',
      newPicture: 'Nowy obrazek',
      newQuestion: 'Nowe pytanie',
      shuffle: 'Przetasuj talie',
      fullscreen: 'Pełny ekran',
      exitFullscreen: 'Zamknij pełny ekran',
      remaining: 'w talii',
      cardNo: 'Karta',
      hint: 'Kliknij talię, aby wylosować kartę. Nie ma tu dobrych ani złych odpowiedzi.',
    },
    gallery: {
      title: 'Galeria',
      pictures: 'Karty z obrazkami',
      questions: 'Karty z pytaniami',
      close: 'Zamknij',
    },
    activities: {
      title: 'Aktywności',
      lead: 'Scenariusze zajęć z wykorzystaniem kart — dostosuj je do wieku uczniów, wielkości grupy i dostępnego czasu.',
      guidelinesTitle: 'Zanim zaczniesz',
      sayTitle: 'Na początku warto powiedzieć uczniom:',
      sayItems: [
        '„Nie ma tu dobrych ani złych odpowiedzi.”',
        '„Każdy może powiedzieć tyle, ile chce.”',
        '„Można mówić o obrazku, zamiast mówić o sobie.”',
      ],
      duringTitle: 'W trakcie zajęć:',
      duringItems: [
        'zaczynaj od prostych i lekkich pytań',
        'dziękuj uczniom za odpowiedzi',
        'pozwól uczniom interpretować obrazki na ich własny sposób',
        'nie zmuszaj nikogo do odpowiedzi',
        'dbaj o spokojną i wspierającą atmosferę',
      ],
      avoidTitle: 'Czego unikać:',
      avoidItems: [
        'oceniania odpowiedzi',
        'interpretowania uczniów',
        'zbyt osobistych pytań',
        'wywierania presji na uczniów',
        'zbyt długiego przeciągania zajęć',
      ],
      format: 'Forma',
      time: 'Czas',
      goals: 'Cele',
      back: 'Wszystkie aktywności',
    },
  },
  ro: {
    siteName: 'SchoolWell Cards',
    tagline: 'Carduri cu emoții pentru conversații în clasă',
    nav: { home: 'Acasă', cards: 'Masa cu carduri', gallery: 'Galerie', activities: 'Activități' },
    home: {
      lead: 'Versiunea digitală a cardurilor cu emoții SchoolWell — 22 de carduri cu ilustrații și 18 carduri cu întrebări care îi ajută pe elevi să vorbească despre emoții, nevoi și relații.',
      cardsTitle: 'Masa cu carduri',
      cardsDesc: 'Amestecă și trage carduri cu imagini și întrebări — la fel ca la pachetul fizic. Gândit pentru a fi proiectat în clasă.',
      galleryTitle: 'Galerie',
      galleryDesc: 'Răsfoiește toate cele 22 de carduri cu ilustrații și cele 18 întrebări în ritmul tău.',
      activitiesTitle: 'Activități',
      activitiesDesc: 'Șapte scenarii de activități gata de folosit pentru lecții și întâlniri de grup sau individuale.',
      open: 'Deschide',
    },
    table: {
      pictureDeck: 'Carduri cu imagini',
      questionDeck: 'Carduri cu întrebări',
      drawPicture: 'Trage un card cu imagine',
      drawQuestion: 'Trage o întrebare',
      newPicture: 'Altă imagine',
      newQuestion: 'Altă întrebare',
      shuffle: 'Amestecă pachetele',
      fullscreen: 'Ecran complet',
      exitFullscreen: 'Ieși din ecran complet',
      remaining: 'în pachet',
      cardNo: 'Cardul',
      hint: 'Apasă pe un pachet pentru a trage un card. Nu există răspunsuri corecte sau greșite.',
    },
    gallery: {
      title: 'Galerie',
      pictures: 'Carduri cu imagini',
      questions: 'Carduri cu întrebări',
      close: 'Închide',
    },
    activities: {
      title: 'Activități',
      lead: 'Scenarii de activități cu cardurile — adaptează-le la vârsta elevilor, mărimea grupului și timpul disponibil.',
      guidelinesTitle: 'Înainte de a începe',
      sayTitle: 'La început, e util să le spui elevilor:',
      sayItems: [
        '„Nu există răspunsuri corecte sau greșite.”',
        '„Fiecare poate împărtăși cât dorește.”',
        '„Poți vorbi despre imagine în loc să vorbești despre tine.”',
      ],
      duringTitle: 'În timpul activităților:',
      duringItems: [
        'începe cu întrebări simple și ușoare',
        'mulțumește elevilor pentru răspunsuri',
        'lasă elevii să interpreteze imaginile în felul lor',
        'nu forța pe nimeni să răspundă',
        'păstrează o atmosferă calmă și încurajatoare',
      ],
      avoidTitle: 'Ce să eviți:',
      avoidItems: [
        'judecarea răspunsurilor',
        'interpretarea elevilor',
        'întrebări prea personale',
        'presiunea asupra elevilor',
        'prelungirea excesivă a activităților',
      ],
      format: 'Format',
      time: 'Timp',
      goals: 'Obiective',
      back: 'Toate activitățile',
    },
  },
};
