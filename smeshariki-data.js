const ITEMS = {
  krosh: {
    name: "Крош",
    color: "#f4a7b9",
    tagline: "Безбашенный заяц, который живёт на скорости!",
    desc: "Ты энергичный и смелый, обожаешь приключения и не боишься рисковать. Скука — твой главный враг."
  },
  ezhik: {
    name: "Ёжик",
    color: "#c98a5c",
    tagline: "Рассудительный друг, на которого можно положиться.",
    desc: "Ты цените порядок, дружбу и природу. Всегда готов помочь и навести гармонию вокруг."
  },
  kopatych: {
    name: "Копатыч",
    color: "#a9734f",
    tagline: "Трудолюбивый садовод с золотыми руками.",
    desc: "Ты спокойный, надёжный и заботливый. Любишь труд, порядок и вкусные домашние заготовки."
  },
  barash: {
    name: "Бараш",
    color: "#efe6d8",
    tagline: "Романтичный поэт и немного меланхолик.",
    desc: "Ты тонко чувствуешь мир, любишь мечтать и сочинять. Иногда грустишь — и это тоже нормально."
  },
  nyusha: {
    name: "Нюша",
    color: "#f6b8c4",
    tagline: "Королева стиля и уверенности в себе.",
    desc: "Ты обожаешь внимание, красоту и яркие эмоции. С тобой никогда не скучно!"
  },
  pin: {
    name: "Пин",
    color: "#3c4a5e",
    tagline: "Гениальный изобретатель-перфекционист.",
    desc: "Ты технарь до мозга костей: любишь точность, эксперименты и новые изобретения."
  },
  karkarych: {
    name: "Кар-Карыч",
    color: "#4a4458",
    tagline: "Обаятельный артист с богатой историей.",
    desc: "Ты харизматичный, любишь сцену и хорошую историю. Дружба и красивый жест — твоя стихия."
  },
  sovunya: {
    name: "Совунья",
    color: "#c99b6a",
    tagline: "Мудрая целительница и заботливая душа.",
    desc: "Ты заботишься обо всех вокруг, ценишь мудрость и всегда готова прийти на помощь."
  },
  losyash: {
    name: "Лосяш",
    color: "#a9c4d8",
    tagline: "Учёный, который знает ответ на любой вопрос.",
    desc: "Ты любишь науку, факты и объяснения. Логика и любопытство — твои лучшие друзья."
  }
};

// Оригинальные нарисованные SVG-аватарки (собственный дизайн, не копирует персонажей мультфильма)
function avatarSvg(key, size) {
  const c = ITEMS[key].color;
  const gid = `g-${key}`;

  const eyes = `
    <circle cx="35" cy="52" r="6.5" fill="#2b2b2b"/>
    <circle cx="65" cy="52" r="6.5" fill="#2b2b2b"/>
    <circle cx="37" cy="49.5" r="2" fill="#fff"/>
    <circle cx="67" cy="49.5" r="2" fill="#fff"/>
    <path d="M40 68 Q50 75 60 68" stroke="#2b2b2b" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="22" cy="62" rx="7" ry="4.5" fill="#000" opacity="0.06"/>
    <ellipse cx="78" cy="62" rx="7" ry="4.5" fill="#000" opacity="0.06"/>
  `;

  const behind = {
    krosh: `<ellipse cx="30" cy="8" rx="9" ry="26" fill="url(#${gid})"/><ellipse cx="70" cy="8" rx="9" ry="26" fill="url(#${gid})"/><ellipse cx="30" cy="10" rx="4.5" ry="18" fill="#ffe3ea"/><ellipse cx="70" cy="10" rx="4.5" ry="18" fill="#ffe3ea"/>`,
    ezhik: `<path d="M14 44 L2 20 L26 30 Z" fill="url(#${gid})"/><path d="M32 26 L24 2 L46 20 Z" fill="url(#${gid})"/><path d="M68 26 L76 2 L54 20 Z" fill="url(#${gid})"/><path d="M86 44 L98 20 L74 30 Z" fill="url(#${gid})"/>`,
    kopatych: `<circle cx="20" cy="20" r="14" fill="url(#${gid})"/><circle cx="80" cy="20" r="14" fill="url(#${gid})"/><circle cx="20" cy="21" r="7" fill="#e8c9a8"/><circle cx="80" cy="21" r="7" fill="#e8c9a8"/>`,
    barash: `<circle cx="16" cy="28" r="12" fill="url(#${gid})"/><circle cx="8" cy="46" r="10" fill="url(#${gid})"/><circle cx="84" cy="28" r="12" fill="url(#${gid})"/><circle cx="92" cy="46" r="10" fill="url(#${gid})"/>`,
    nyusha: `<ellipse cx="18" cy="14" rx="10" ry="14" fill="url(#${gid})"/><ellipse cx="82" cy="14" rx="10" ry="14" fill="url(#${gid})"/><ellipse cx="18" cy="15" rx="5" ry="8" fill="#ffdce4"/><ellipse cx="82" cy="15" rx="5" ry="8" fill="#ffdce4"/>`,
    pin: ``,
    karkarych: `<path d="M4 32 Q24 14 30 46 Q16 46 4 32" fill="url(#${gid})"/><path d="M96 32 Q76 14 70 46 Q84 46 96 32" fill="url(#${gid})"/>`,
    sovunya: `<path d="M16 14 L30 28 L10 30 Z" fill="url(#${gid})"/><path d="M84 14 L70 28 L90 30 Z" fill="url(#${gid})"/>`,
    losyash: `<path d="M32 18 Q6 -2 10 24 Q20 20 28 30" fill="none" stroke="#7d99ad" stroke-width="5" stroke-linecap="round"/><path d="M68 18 Q94 -2 90 24 Q80 20 72 30" fill="none" stroke="#7d99ad" stroke-width="5" stroke-linecap="round"/>`
  };

  const front = {
    krosh: ``,
    ezhik: ``,
    kopatych: ``,
    barash: `<path d="M38 14 q6 -16 14 -2" stroke="#9c8a70" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M62 14 q-6 -16 -14 -2" stroke="#9c8a70" stroke-width="4.5" fill="none" stroke-linecap="round"/>`,
    nyusha: `<ellipse cx="50" cy="63" rx="15" ry="10" fill="#f2c9d3" stroke="#e7a9ba" stroke-width="1.5"/><ellipse cx="44" cy="63" rx="3" ry="4" fill="#d98ea3"/><ellipse cx="56" cy="63" rx="3" ry="4" fill="#d98ea3"/><path d="M20 34 q-10 -4 -8 -14" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M80 34 q10 -4 8 -14" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/>`,
    pin: `<ellipse cx="50" cy="70" rx="26" ry="20" fill="#eef1f4"/><path d="M28 40 Q50 30 72 40 L68 66 Q50 76 32 66 Z" fill="#eef1f4"/><path d="M42 8 h16 v10 h-16 z" fill="#e2b13c"/><rect x="40" y="2" width="20" height="8" rx="3" fill="#f0c34a"/>`,
    karkarych: `<path d="M50 58 L36 74 L50 68 L64 74 Z" fill="#e2b13c"/>`,
    sovunya: `<circle cx="35" cy="52" r="15" fill="#fff" opacity="0.9"/><circle cx="65" cy="52" r="15" fill="#fff" opacity="0.9"/>`,
    losyash: `<rect x="22" y="46" width="18" height="11" rx="5.5" fill="none" stroke="#3c4a5e" stroke-width="3.5"/><rect x="60" y="46" width="18" height="11" rx="5.5" fill="none" stroke="#3c4a5e" stroke-width="3.5"/><line x1="40" y1="51.5" x2="60" y2="51.5" stroke="#3c4a5e" stroke-width="3.5"/>`
  };

  const showFace = key !== "pin";
  const bodyFill = key === "pin" ? "#33404f" : `url(#${gid})`;

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
    <defs>
      <radialGradient id="${gid}" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.55"/>
        <stop offset="35%" stop-color="${c}"/>
        <stop offset="100%" stop-color="${c}"/>
      </radialGradient>
    </defs>
    ${behind[key] || ""}
    <circle cx="50" cy="58" r="36" fill="${bodyFill}" stroke="rgba(0,0,0,0.12)" stroke-width="1.5"/>
    ${front[key] || ""}
    ${showFace ? eyes : `
      <ellipse cx="50" cy="82" rx="30" ry="20" fill="#eef1f4"/>
      <circle cx="38" cy="55" r="6" fill="#fff"/><circle cx="62" cy="55" r="6" fill="#fff"/>
      <circle cx="38" cy="55" r="3" fill="#2b2b2b"/><circle cx="62" cy="55" r="3" fill="#2b2b2b"/>
      <path d="M44 70 Q50 74 56 70" stroke="#2b2b2b" stroke-width="3" fill="none" stroke-linecap="round"/>
    `}
  </svg>`;
}

const QUESTIONS = [
  {
    text: "Как ты обычно проводишь выходные?",
    options: [
      { label: "Гоняю на велосипеде, ищу приключения", points: { krosh: 3, pin: 1 } },
      { label: "Навожу порядок дома и слежу за уютом", points: { ezhik: 3, kopatych: 1 } },
      { label: "Работаю в саду, готовлю запасы", points: { kopatych: 3, sovunya: 1 } },
      { label: "Сочиняю стихи и мечтаю о своём", points: { barash: 3, karkarych: 1 } }
    ]
  },
  {
    text: "Твой друг расстроен. Что ты сделаешь?",
    options: [
      { label: "Развеселю нелепой шуткой или идеей", points: { krosh: 3, karkarych: 1 } },
      { label: "Дам мудрый совет и заварю травяной чай", points: { sovunya: 3, ezhik: 1 } },
      { label: "Помогу по-деловому решить проблему", points: { losyash: 3, pin: 1 } },
      { label: "Спою песню или расскажу красивую историю", points: { karkarych: 3, barash: 1 } }
    ]
  },
  {
    text: "Выбери занятие на вечер",
    options: [
      { label: "Смотреть на звёзды и разгадывать тайны", points: { losyash: 3, pin: 1 } },
      { label: "Наряжаться и любоваться собой в зеркале", points: { nyusha: 3, karkarych: 1 } },
      { label: "Мастерить что-то в мастерской", points: { pin: 3, kopatych: 1 } },
      { label: "Гулять с друзьями и болтать обо всём", points: { krosh: 3, ezhik: 1 } }
    ]
  },
  {
    text: "Какая черта характера тебе ближе?",
    options: [
      { label: "Смелость и готовность рисковать", points: { krosh: 3 } },
      { label: "Аккуратность и забота о порядке", points: { ezhik: 3, sovunya: 1 } },
      { label: "Обаяние и артистичность", points: { karkarych: 3, nyusha: 1 } },
      { label: "Любопытство и тяга к знаниям", points: { losyash: 3, pin: 1 } }
    ]
  },
  {
    text: "Выбери любимую еду",
    options: [
      { label: "Морковка на бегу — некогда сидеть за столом", points: { krosh: 3 } },
      { label: "Домашнее варенье и заготовки", points: { kopatych: 3, sovunya: 1 } },
      { label: "Что-то изысканное и красиво оформленное", points: { nyusha: 3, karkarych: 1 } },
      { label: "Необычный рецепт, придуманный по науке", points: { losyash: 3, pin: 1 } }
    ]
  },
  {
    text: "Что бесит тебя больше всего?",
    options: [
      { label: "Скука и однообразие", points: { krosh: 3, karkarych: 1 } },
      { label: "Беспорядок и грязь", points: { ezhik: 3, nyusha: 1 } },
      { label: "Когда не слушают твои идеи", points: { pin: 3, losyash: 1 } },
      { label: "Когда обижают друзей", points: { sovunya: 3, kopatych: 1 } }
    ]
  },
  {
    text: "О чём ты мечтаешь?",
    options: [
      { label: "Объехать весь мир на всём, что движется", points: { krosh: 3 } },
      { label: "Написать великую поэму", points: { barash: 3 } },
      { label: "Сделать гениальное изобретение", points: { pin: 3, losyash: 1 } },
      { label: "Стать звездой сцены", points: { karkarych: 3, nyusha: 1 } }
    ]
  },
  {
    text: "Как ты решаешь конфликты?",
    options: [
      { label: "Ищу компромисс и мирю всех мудрым словом", points: { sovunya: 3, ezhik: 1 } },
      { label: "Доказываю свою правоту фактами и логикой", points: { losyash: 3, pin: 1 } },
      { label: "Ухожу дуться в свой домик", points: { barash: 3 } },
      { label: "Устраиваю драму, но потом мы обнимаемся", points: { nyusha: 3, karkarych: 1 } }
    ]
  }
];

initQuizApp({
  items: ITEMS,
  questions: QUESTIONS,
  avatarSvg,
  title: "Кто ты из Смешариков?",
  subtitle: "",
  footerNote: "Тест создан фанатами, не связан с официальными правообладателями «Смешариков»."
});
