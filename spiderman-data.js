const ITEMS = {
  tobey: {
    name: "Тоби Магуайр",
    color: "#c62828",
    tagline: "Классический, ранимый и настоящий герой по духу.",
    desc: "Ты цените искренность и внутреннюю борьбу больше эффектных фраз. Для тебя супергеройство — это прежде всего ответственность и жертва ради других, а не шоу."
  },
  garfield: {
    name: "Эндрю Гарфилд",
    color: "#7b1fa2",
    tagline: "Бунтарь с острым языком и большим сердцем.",
    desc: "Ты дерзкий, ироничный, идёшь против правил, когда чувствуешь, что так правильно. При этом глубоко переживаешь за близких, просто не показываешь это на публику."
  },
  holland: {
    name: "Том Холланд",
    color: "#1565c0",
    tagline: "Обаятельный технарь нового поколения.",
    desc: "Ты энергичный, немного неуклюжий, но невероятно находчивый. Любишь технологии, шутки и не боишься признавать, что ещё учишься быть лучшей версией себя."
  }
};

// Оригинальные стилизованные маски (собственный дизайн, не портреты актёров и не копия костюмов)
function avatarSvg(key, size) {
  const c = ITEMS[key].color;
  const gid = `sm-g-${key}`;

  const eyeShapes = {
    tobey: `<path d="M28 46 Q40 34 52 46 Q40 54 28 46 Z" fill="#fff"/><path d="M50 46 Q62 34 74 46 Q62 54 50 46 Z" fill="#fff"/>`,
    garfield: `<path d="M24 48 L42 34 L52 46 L38 58 Z" fill="#fff"/><path d="M48 46 L58 34 L76 48 L62 58 Z" fill="#fff"/>`,
    holland: `<path d="M26 44 Q42 30 54 44 Q46 52 34 52 Q26 50 26 44 Z" fill="#fff"/><path d="M46 44 Q58 30 74 44 Q74 50 66 52 Q54 52 46 44 Z" fill="#fff"/>`
  };

  const webLines = `
    <path d="M50 20 L50 90" stroke="#111" stroke-width="1.5" opacity="0.55"/>
    <path d="M18 40 L82 40" stroke="#111" stroke-width="1.5" opacity="0.4"/>
    <path d="M18 70 L82 70" stroke="#111" stroke-width="1.5" opacity="0.4"/>
    <path d="M22 22 L78 88" stroke="#111" stroke-width="1.2" opacity="0.3"/>
    <path d="M78 22 L22 88" stroke="#111" stroke-width="1.2" opacity="0.3"/>
  `;

  const accent = {
    tobey: `<circle cx="50" cy="58" r="38" fill="none" stroke="#1a2f6b" stroke-width="6"/>`,
    garfield: `<path d="M14 58 Q50 40 86 58" fill="none" stroke="#1a1a1a" stroke-width="4" opacity="0.5"/>`,
    holland: `<circle cx="50" cy="58" r="10" fill="#e2b13c" opacity="0.9"/><path d="M50 50 v-8 M50 66 v8 M42 58 h-8 M58 58 h8" stroke="#1a1a1a" stroke-width="2"/>`
  };

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
    <defs>
      <radialGradient id="${gid}" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
        <stop offset="35%" stop-color="${c}"/>
        <stop offset="100%" stop-color="${c}"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="58" r="38" fill="url(#${gid})" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>
    <clipPath id="clip-${gid}"><circle cx="50" cy="58" r="38"/></clipPath>
    <g clip-path="url(#clip-${gid})">${webLines}</g>
    ${eyeShapes[key]}
    ${accent[key]}
  </svg>`;
}

const QUESTIONS = [
  {
    text: "Что для тебя главное в супергеройстве?",
    options: [
      { label: "Ответственность и жертва ради других", points: { tobey: 3 } },
      { label: "Бороться с несправедливостью, даже нарушая правила", points: { garfield: 3 } },
      { label: "Учиться, расти и становиться лучше день за днём", points: { holland: 3 } }
    ]
  },
  {
    text: "Как ты справляешься с трудностями?",
    options: [
      { label: "Молча переживаю всё внутри", points: { tobey: 3 } },
      { label: "Выпускаю пар через сарказм и дерзость", points: { garfield: 3 } },
      { label: "Ищу технологичное решение и не сдаюсь", points: { holland: 3 } }
    ]
  },
  {
    text: "Твой стиль общения с друзьями",
    options: [
      { label: "Искренний, но сдержанный", points: { tobey: 3 } },
      { label: "Острый на язык, с подколами", points: { garfield: 3 } },
      { label: "Болтливый, дружелюбный, немного наивный", points: { holland: 3 } }
    ]
  },
  {
    text: "Что тебя действительно расстраивает?",
    options: [
      { label: "Когда подводишь близких людей", points: { tobey: 3 } },
      { label: "Несправедливость и предательство", points: { garfield: 3 } },
      { label: "Когда не справляюсь и хочется быть лучше", points: { holland: 3 } }
    ]
  },
  {
    text: "Твоё отношение к правилам",
    options: [
      { label: "Стараюсь следовать им, даже когда тяжело", points: { tobey: 3 } },
      { label: "Готов их нарушить ради правды", points: { garfield: 3 } },
      { label: "Уважаю, но иногда обхожу с помощью смекалки", points: { holland: 3 } }
    ]
  },
  {
    text: "Какая у тебя суперсила была бы, будь выбор?",
    options: [
      { label: "Сила духа и выносливость", points: { tobey: 3 } },
      { label: "Скорость реакции и ловкость", points: { garfield: 3 } },
      { label: "Гениальный ум и крутые гаджеты", points: { holland: 3 } }
    ]
  },
  {
    text: "Как ты ведёшь себя на публике?",
    options: [
      { label: "Скромно, не люблю быть в центре внимания", points: { tobey: 3 } },
      { label: "Уверенно, с иронией на грани дерзости", points: { garfield: 3 } },
      { label: "Немного волнуюсь, но стараюсь шутить", points: { holland: 3 } }
    ]
  },
  {
    text: "Что ты ценишь в отношениях больше всего?",
    options: [
      { label: "Преданность и готовность на жертвы", points: { tobey: 3 } },
      { label: "Честность, даже если она неудобная", points: { garfield: 3 } },
      { label: "Поддержку и совместный рост", points: { holland: 3 } }
    ]
  }
];

initQuizApp({
  items: ITEMS,
  questions: QUESTIONS,
  avatarSvg,
  title: "Какой ты Человек-паук?",
  subtitle: "",
  footerNote: "Тест сделан фанатами ради развлечения и не связан с Marvel, Sony или правообладателями."
});
