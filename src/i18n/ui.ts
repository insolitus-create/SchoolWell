import type { Locale } from './utils';

export interface UIStrings {
  siteName: string;
  tagline: string;
  nav: {
    home: string;
    cards: string;
    gallery: string;
    activities: string;
    about: string;
    downloads: string;
  };
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
    goal: string;
    app: string;
    back: string;
  };
  footer: {
    /** "SchoolWell – Promoting well-being at school" */
    strapline: string;
    /** Erasmus+ action, kept in the official English wording. */
    programme: string;
    projectNoLabel: string;
    coordinator: string;
    /** Alt text for the official EU emblem. */
    euAlt: string;
    /** Short funding statement shown next to the emblem. */
    funding: string;
    fundingTitle: string;
    /** Official disclaimer — must be reproduced verbatim. */
    disclaimer: string;
    licenceTitle: string;
    /** Official licence statement — must be reproduced verbatim. */
    licenceText: string;
    licenceName: string;
    /** Third-party materials (EU emblem etc.) are not covered by CC BY. */
    licenceExclusion: string;
  };
  about: {
    title: string;
    /** Page meta description. */
    lead: string;
    introTitle: string;
    intro: string[];
    aimsTitle: string;
    aimsLead: string;
    /** Six aims, rendered as small blocks in this order. */
    aims: string[];
    resourcesTitle: string;
    resourcesLead: string;
    resourcesIncludes: string;
    /** Picture cards, question cards, activities, digital tool. */
    resources: { value?: string; label: string }[];
    usageTitle: string;
    usageLead: string;
    /** Whole class, small groups, pairs, individually. */
    usage: string[];
    usageNote: string;
    audienceTitle: string;
    audienceLead: string;
    /** Teachers, class teachers, counsellors, psychologists, pedagogues, other professionals. */
    audience: string[];
    partnersTitle: string;
    coordinatorRole: string;
    partnerRole: string;
    website: string;
    infoTitle: string;
    programmeLabel: string;
    actionLabel: string;
    projectWebsiteLabel: string;
  };
  downloads: {
    title: string;
    lead: string;
    guidesTitle: string;
    guide: string;
    cardsTitle: string;
    pictureFronts: string;
    pictureBacks: string;
    questionFronts: string;
    questionBacks: string;
    printReady: string;
    download: string;
  };
}

/** Erasmus+ identifiers stay untranslated across every locale. */
export const projectNumber = '2025-1-PL01-KA210-SCH-000356998';
export const licenceUrl = 'https://creativecommons.org/licenses/by/4.0/';

export const ui: Record<Locale, UIStrings> = {
  en: {
    siteName: 'SchoolWell Cards',
    tagline: 'Emotion cards for conversations in the classroom',
    nav: {
      home: 'Home',
      cards: 'Card table',
      gallery: 'Gallery',
      activities: 'Activities',
      about: 'About the project',
      downloads: 'Downloads',
    },
    home: {
      lead: 'A digital version of the SchoolWell emotion cards — 22 picture cards and 18 question cards that help students talk about emotions, needs, and relationships.',
      cardsTitle: 'Card table',
      cardsDesc: 'Shuffle and draw picture and question cards, just like with the physical deck. Made for projecting in class.',
      galleryTitle: 'Gallery',
      galleryDesc: 'Browse all 22 picture cards and 18 questions at your own pace.',
      activitiesTitle: 'Activities',
      activitiesDesc: '23 ready-to-use activities for lessons, group and individual sessions.',
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
      goal: 'Goal',
      app: 'Using the app',
      back: 'All activities',
    },
    footer: {
      strapline: 'SchoolWell – Promoting well-being at school',
      programme: 'Erasmus+ KA210-SCH – Small-scale partnerships in school education',
      projectNoLabel: 'Project No.',
      coordinator: 'Insolitus – Europejska Fundacja Wspierania Edukacji',
      euAlt: 'Co-funded by the European Union',
      funding: 'Co-Funded by the European Union.',
      fundingTitle: 'EU funding',
      disclaimer:
        'Co-Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Foundation for the Development of the Education System (FRSE). Neither the European Union nor FRSE can be held responsible for them.',
      licenceTitle: 'Licence',
      licenceText:
        'The SchoolWell materials are licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).',
      licenceName: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
      licenceExclusion:
        'This licence does not cover third-party materials, including the European Union emblem, which remain subject to their own terms of use.',
    },
    about: {
      title: 'About the project',
      lead: 'SchoolWell is an Erasmus+ project focused on promoting emotional well-being in schools and supporting teachers in creating a safe and supportive learning environment.',
      introTitle: 'Introduction',
      intro: [
        'SchoolWell is an Erasmus+ project focused on promoting emotional well-being in schools and supporting teachers in creating a safe and supportive learning environment.',
        'The project recognises that school is not only a place for learning, but also a place where students experience emotions, build relationships, face challenges and develop social and emotional skills.',
      ],
      aimsTitle: 'Project aims',
      aimsLead: 'The project aims to support students in:',
      aims: [
        'recognising and naming emotions',
        'expressing emotions and needs',
        'developing self-awareness and reflection',
        'building empathy and positive relationships',
        'improving communication and cooperation',
        'developing healthy ways of coping with stress',
      ],
      resourcesTitle: 'SchoolWell resources',
      resourcesLead:
        'The main project result is a practical set of resources for teachers and other professionals working with children and young people.',
      resourcesIncludes: 'It includes:',
      resources: [
        { value: '22', label: 'Picture Cards' },
        { value: '18', label: 'Question Cards' },
        { value: '23', label: 'practical activities in the Teacher’s Guide' },
        { label: 'SchoolWell digital tool' },
      ],
      usageTitle: 'How the resources can be used',
      usageLead: 'The resources can be used:',
      usage: ['with the whole class', 'in small groups', 'in pairs', 'individually'],
      usageNote: 'They can be adapted to different ages, group sizes and educational contexts.',
      audienceTitle: 'Who is SchoolWell for?',
      audienceLead: 'SchoolWell is designed for:',
      audience: [
        'teachers',
        'class teachers',
        'school counsellors',
        'psychologists',
        'pedagogues',
        'other professionals working with children and young people',
      ],
      partnersTitle: 'Project partners',
      coordinatorRole: 'Coordinator – Poland',
      partnerRole: 'Project partner – Romania',
      website: 'Official website',
      infoTitle: 'Project information',
      programmeLabel: 'Programme',
      actionLabel: 'Action',
      projectWebsiteLabel: 'Project website',
    },
    downloads: {
      title: 'Downloads',
      lead: 'Printable versions of the SchoolWell cards and the Teacher’s Guide.',
      guidesTitle: 'Teacher’s Guide',
      guide: 'Teacher’s Guide – emotion cards with exercises',
      cardsTitle: 'Cards – print-ready PDF',
      pictureFronts: 'Picture Cards – fronts',
      pictureBacks: 'Picture Cards – backs',
      questionFronts: 'Question Cards – fronts',
      questionBacks: 'Question Cards – backs',
      printReady: 'print-ready',
      download: 'Download',
    },
  },
  pl: {
    siteName: 'SchoolWell Cards',
    tagline: 'Karty emocji do rozmów w klasie',
    nav: {
      home: 'Start',
      cards: 'Stół z kartami',
      gallery: 'Galeria',
      activities: 'Ćwiczenia',
      about: 'O projekcie',
      downloads: 'Do pobrania',
    },
    home: {
      lead: 'Cyfrowa wersja kart emocji SchoolWell — 22 karty z ilustracjami i 18 kart z pytaniami, które pomagają uczniom rozmawiać o emocjach, potrzebach i relacjach.',
      cardsTitle: 'Stół z kartami',
      cardsDesc: 'Tasuj i losuj karty z obrazkami i pytaniami — tak jak z fizyczną talią. Stworzony z myślą o wyświetlaniu na projektorze.',
      galleryTitle: 'Galeria',
      galleryDesc: 'Przeglądaj wszystkie 22 karty z ilustracjami i 18 pytań we własnym tempie.',
      activitiesTitle: 'Ćwiczenia',
      activitiesDesc: '23 gotowe ćwiczenia na lekcje oraz spotkania grupowe i indywidualne.',
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
      title: 'Ćwiczenia',
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
      goal: 'Cel',
      app: 'Wykorzystanie aplikacji',
      back: 'Wszystkie ćwiczenia',
    },
    footer: {
      strapline: 'SchoolWell – Promowanie dobrostanu w szkole',
      programme: 'Erasmus+ KA210-SCH – Partnerstwa na małą skalę w edukacji szkolnej',
      projectNoLabel: 'Nr projektu',
      coordinator: 'Insolitus – Europejska Fundacja Wspierania Edukacji',
      euAlt: 'Dofinansowane przez Unię Europejską',
      funding: 'Dofinansowane ze środków UE.',
      fundingTitle: 'Finansowanie UE',
      disclaimer:
        'Dofinansowane ze środków UE. Wyrażone poglądy i opinie są jedynie opiniami autora lub autorów i niekoniecznie odzwierciedlają poglądy i opinie Unii Europejskiej lub Fundacji Rozwoju Systemu Edukacji. Unia Europejska ani Fundacja Rozwoju Systemu Edukacji nie ponoszą za nie odpowiedzialności.',
      licenceTitle: 'Licencja',
      licenceText:
        'Materiały SchoolWell są dostępne na licencji Creative Commons Uznanie autorstwa 4.0 Międzynarodowa (CC BY 4.0).',
      licenceName: 'Creative Commons Uznanie autorstwa 4.0 Międzynarodowa (CC BY 4.0)',
      licenceExclusion:
        'Licencja nie obejmuje materiałów osób trzecich, w tym emblematu Unii Europejskiej, które podlegają własnym warunkom używania.',
    },
    about: {
      title: 'O projekcie',
      lead: 'SchoolWell to projekt Erasmus+ poświęcony wspieraniu dobrostanu emocjonalnego w szkołach oraz pomaganiu nauczycielom w tworzeniu bezpiecznego i wspierającego środowiska nauki.',
      introTitle: 'Wprowadzenie',
      intro: [
        'SchoolWell to projekt Erasmus+ poświęcony wspieraniu dobrostanu emocjonalnego w szkołach oraz pomaganiu nauczycielom w tworzeniu bezpiecznego i wspierającego środowiska nauki.',
        'Projekt wychodzi z założenia, że szkoła to nie tylko miejsce nauki, ale także miejsce, w którym uczniowie przeżywają emocje, budują relacje, mierzą się z wyzwaniami i rozwijają umiejętności społeczne i emocjonalne.',
      ],
      aimsTitle: 'Cele projektu',
      aimsLead: 'Projekt ma wspierać uczniów w:',
      aims: [
        'rozpoznawaniu i nazywaniu emocji',
        'wyrażaniu emocji i potrzeb',
        'rozwijaniu samoświadomości i refleksji',
        'budowaniu empatii i pozytywnych relacji',
        'doskonaleniu komunikacji i współpracy',
        'rozwijaniu zdrowych sposobów radzenia sobie ze stresem',
      ],
      resourcesTitle: 'Materiały SchoolWell',
      resourcesLead:
        'Głównym rezultatem projektu jest praktyczny zestaw materiałów dla nauczycieli i innych specjalistów pracujących z dziećmi i młodzieżą.',
      resourcesIncludes: 'Zestaw obejmuje:',
      resources: [
        { value: '22', label: 'karty z ilustracjami' },
        { value: '18', label: 'kart z pytaniami' },
        { value: '23', label: 'praktyczne ćwiczenia w Przewodniku dla nauczycieli' },
        { label: 'narzędzie cyfrowe SchoolWell' },
      ],
      usageTitle: 'Jak można korzystać z materiałów',
      usageLead: 'Z materiałów można korzystać:',
      usage: ['z całą klasą', 'w małych grupach', 'w parach', 'indywidualnie'],
      usageNote: 'Można je dostosować do wieku uczniów, wielkości grupy i kontekstu edukacyjnego.',
      audienceTitle: 'Dla kogo jest SchoolWell?',
      audienceLead: 'SchoolWell jest przeznaczony dla:',
      audience: [
        'nauczycieli',
        'wychowawców',
        'szkolnych doradców',
        'psychologów',
        'pedagogów',
        'innych specjalistów pracujących z dziećmi i młodzieżą',
      ],
      partnersTitle: 'Partnerzy projektu',
      coordinatorRole: 'Koordynator – Polska',
      partnerRole: 'Partner projektu – Rumunia',
      website: 'Oficjalna strona',
      infoTitle: 'Informacje o projekcie',
      programmeLabel: 'Program',
      actionLabel: 'Akcja',
      projectWebsiteLabel: 'Strona projektu',
    },
    downloads: {
      title: 'Do pobrania',
      lead: 'Wersje kart SchoolWell do wydruku oraz Przewodnik dla nauczycieli.',
      guidesTitle: 'Przewodnik dla nauczycieli',
      guide: 'Przewodnik dla nauczycieli – karty emocji z ćwiczeniami',
      cardsTitle: 'Karty – PDF do druku',
      pictureFronts: 'Karty z ilustracjami – awersy',
      pictureBacks: 'Karty z ilustracjami – rewersy',
      questionFronts: 'Karty z pytaniami – awersy',
      questionBacks: 'Karty z pytaniami – rewersy',
      printReady: 'do druku',
      download: 'Pobierz',
    },
  },
  ro: {
    siteName: 'SchoolWell Cards',
    tagline: 'Carduri cu emoții pentru conversații în clasă',
    nav: {
      home: 'Acasă',
      cards: 'Masa cu carduri',
      gallery: 'Galerie',
      activities: 'Activități',
      about: 'Despre proiect',
      downloads: 'Descărcări',
    },
    home: {
      lead: 'Versiunea digitală a cardurilor cu emoții SchoolWell — 22 de carduri cu ilustrații și 18 carduri cu întrebări care îi ajută pe elevi să vorbească despre emoții, nevoi și relații.',
      cardsTitle: 'Masa cu carduri',
      cardsDesc: 'Amestecă și trage carduri cu imagini și întrebări — la fel ca la pachetul fizic. Gândit pentru a fi proiectat în clasă.',
      galleryTitle: 'Galerie',
      galleryDesc: 'Răsfoiește toate cele 22 de carduri cu ilustrații și cele 18 întrebări în ritmul tău.',
      activitiesTitle: 'Activități',
      activitiesDesc: '23 de activități gata de folosit pentru lecții și întâlniri de grup sau individuale.',
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
      goal: 'Obiectiv',
      app: 'Utilizarea aplicației',
      back: 'Toate activitățile',
    },
    footer: {
      strapline: 'SchoolWell – Promovarea stării de bine la școală',
      programme: 'Erasmus+ KA210-SCH – Parteneriate la scară mică în educația școlară',
      projectNoLabel: 'Nr. proiect',
      coordinator: 'Insolitus – Europejska Fundacja Wspierania Edukacji',
      euAlt: 'Finanțat de Uniunea Europeană',
      funding: 'Finanțat de Uniunea Europeană.',
      fundingTitle: 'Finanțare UE',
      disclaimer:
        'Finanțat de Uniunea Europeană. Punctele de vedere și opiniile exprimate aparțin, însă, exclusiv autorului (autorilor) și nu reflectă neapărat punctele de vedere și opiniile Agenției Executive Europene pentru Educație și Cultură (EACEA). Nici Uniunea Europeană și nici EACEA nu pot fi considerate răspunzătoare pentru acestea.',
      licenceTitle: 'Licență',
      licenceText:
        'Materialele SchoolWell sunt disponibile sub licența Creative Commons Atribuire 4.0 Internațional (CC BY 4.0).',
      licenceName: 'Creative Commons Atribuire 4.0 Internațional (CC BY 4.0)',
      licenceExclusion:
        'Licența nu acoperă materialele terților, inclusiv emblema Uniunii Europene, care rămân supuse propriilor condiții de utilizare.',
    },
    about: {
      title: 'Despre proiect',
      lead: 'SchoolWell este un proiect Erasmus+ axat pe promovarea stării de bine emoționale în școli și pe sprijinirea profesorilor în crearea unui mediu de învățare sigur și încurajator.',
      introTitle: 'Introducere',
      intro: [
        'SchoolWell este un proiect Erasmus+ axat pe promovarea stării de bine emoționale în școli și pe sprijinirea profesorilor în crearea unui mediu de învățare sigur și încurajator.',
        'Proiectul pornește de la ideea că școala nu este doar un loc de învățare, ci și un loc în care elevii trăiesc emoții, construiesc relații, se confruntă cu provocări și își dezvoltă abilitățile sociale și emoționale.',
      ],
      aimsTitle: 'Obiectivele proiectului',
      aimsLead: 'Proiectul își propune să îi sprijine pe elevi în:',
      aims: [
        'recunoașterea și numirea emoțiilor',
        'exprimarea emoțiilor și a nevoilor',
        'dezvoltarea conștientizării de sine și a reflecției',
        'construirea empatiei și a relațiilor pozitive',
        'îmbunătățirea comunicării și a cooperării',
        'dezvoltarea unor modalități sănătoase de gestionare a stresului',
      ],
      resourcesTitle: 'Resursele SchoolWell',
      resourcesLead:
        'Principalul rezultat al proiectului este un set practic de resurse pentru profesori și alți specialiști care lucrează cu copii și tineri.',
      resourcesIncludes: 'Setul include:',
      resources: [
        { value: '22', label: 'de carduri cu imagini' },
        { value: '18', label: 'carduri cu întrebări' },
        { value: '23', label: 'de activități practice în Ghidul profesorului' },
        { label: 'instrumentul digital SchoolWell' },
      ],
      usageTitle: 'Cum pot fi folosite resursele',
      usageLead: 'Resursele pot fi folosite:',
      usage: ['cu întreaga clasă', 'în grupuri mici', 'în perechi', 'individual'],
      usageNote: 'Pot fi adaptate la diferite vârste, mărimi ale grupului și contexte educaționale.',
      audienceTitle: 'Pentru cine este SchoolWell?',
      audienceLead: 'SchoolWell se adresează:',
      audience: [
        'profesorilor',
        'diriginților',
        'consilierilor școlari',
        'psihologilor',
        'pedagogilor',
        'altor specialiști care lucrează cu copii și tineri',
      ],
      partnersTitle: 'Partenerii proiectului',
      coordinatorRole: 'Coordonator – Polonia',
      partnerRole: 'Partener de proiect – România',
      website: 'Site oficial',
      infoTitle: 'Informații despre proiect',
      programmeLabel: 'Program',
      actionLabel: 'Acțiune',
      projectWebsiteLabel: 'Site-ul proiectului',
    },
    downloads: {
      title: 'Descărcări',
      lead: 'Versiuni printabile ale cardurilor SchoolWell și Ghidul profesorului.',
      guidesTitle: 'Ghidul profesorului',
      guide: 'Ghidul profesorului – fișe cu exerciții',
      cardsTitle: 'Carduri – PDF pentru tipar',
      pictureFronts: 'Carduri cu imagini – față',
      pictureBacks: 'Carduri cu imagini – verso',
      questionFronts: 'Carduri cu întrebări – față',
      questionBacks: 'Carduri cu întrebări – verso',
      printReady: 'pentru tipar',
      download: 'Descarcă',
    },
  },
};
