const ITEMS = {
  lager: {
    name: "Лагер",
    color: "#f0c04a",
    tagline: "Классика, которая нравится всем.",
    desc: "Ты простой, надёжный и не любишь усложнять. С тобой легко и комфортно в любой компании."
  },
  ipa: {
    name: "IPA",
    color: "#e08a2e",
    tagline: "Яркий, хмельной и с характером.",
    desc: "Ты любишь всё насыщенное и необычное. Тебе скучно с пресными людьми и пресными вкусами."
  },
  stout: {
    name: "Стаут",
    color: "#2b1b12",
    tagline: "Тёмная лошадка с глубоким характером.",
    desc: "Ты загадочный и глубокий, не раскрываешься сразу. Зато с теми, кому доверяешь — весь нараспашку."
  },
  wheat: {
    name: "Пшеничное",
    color: "#f4d98a",
    tagline: "Лёгкое, летнее, для хорошего настроения.",
    desc: "Ты за лёгкость в общении, солнце и хорошую компанию. Драмы не твоя стихия."
  },
  porter: {
    name: "Портер",
    color: "#4a2f1c",
    tagline: "Уютный интеллектуал с богатой историей.",
    desc: "Ты ценишь долгие разговоры, книги и уют. С тобой интересно поговорить обо всём на свете."
  },
  nonalco: {
    name: "Безалкогольное",
    color: "#bfe0c8",
    tagline: "Кайфует от жизни без лишнего градуса.",
    desc: "Тебе не нужен повод, чтобы быть в отличном настроении. Ты за яркий вечер и ясную голову с утра."
  }
};

// Оригинальные нарисованные SVG-кружки/бокалы (собственный дизайн)
function avatarSvg(key, size) {
  const item = ITEMS[key];
  const c = item.color;
  const gid = `beer-g-${key}`;
  const isDark = key === "stout" || key === "porter";
  const isWheat = key === "wheat";
  const isNon = key === "nonalco";

  const glassShape = key === "ipa" || key === "nonalco"
    ? `<path d="M30 30 L34 88 Q50 94 66 88 L70 30 Z" fill="url(#${gid})" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>`
    : `<path d="M28 28 Q50 22 72 28 L68 90 Q50 96 32 90 Z" fill="url(#${gid})" stroke="rgba(0,0,0,0.15)" stroke-width="1.5"/>`;

  const handle = key === "lager" || key === "porter"
    ? `<path d="M70 42 Q92 44 90 62 Q88 78 68 76" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`
    : "";

  const foam = isNon
    ? `<ellipse cx="50" cy="27" rx="21" ry="7" fill="#fff" opacity="0.9"/>`
    : `<path d="M30 28 Q35 14 44 20 Q48 8 56 18 Q64 10 68 22 Q74 20 70 30 Z" fill="#fff8e8" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>`;

  const bubbles = !isDark
    ? `<circle cx="42" cy="60" r="2" fill="#fff" opacity="0.5"/><circle cx="55" cy="72" r="1.6" fill="#fff" opacity="0.4"/><circle cx="48" cy="45" r="1.6" fill="#fff" opacity="0.5"/>`
    : "";

  const wheatCloud = isWheat
    ? `<ellipse cx="50" cy="58" rx="18" ry="26" fill="#fff" opacity="0.12"/>`
    : "";

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
        <stop offset="25%" stop-color="${c}"/>
        <stop offset="100%" stop-color="${c}"/>
      </linearGradient>
    </defs>
    ${handle}
    ${glassShape}
    ${wheatCloud}
    ${bubbles}
    ${foam}
  </svg>`;
}

const QUESTIONS = [
  {
    text: "Как ты обычно проводишь вечер пятницы?",
    options: [
      { label: "Собираю большую компанию друзей", points: { lager: 3, wheat: 1 } },
      { label: "Ищу что-то новое и необычное", points: { ipa: 3, porter: 1 } },
      { label: "Тихо и глубоко размышляю в одиночестве", points: { stout: 3, porter: 1 } },
      { label: "Активничаю без всякого повода на градус", points: { nonalco: 3, wheat: 1 } }
    ]
  },
  {
    text: "Как тебя описали бы друзья?",
    options: [
      { label: "Простой и надёжный, с тобой легко", points: { lager: 3 } },
      { label: "Яркий и с характером, не пресный", points: { ipa: 3 } },
      { label: "Загадочный, раскрываешься не сразу", points: { stout: 3 } },
      { label: "Лёгкий на подъём, солнечный человек", points: { wheat: 3 } }
    ]
  },
  {
    text: "Какая атмосфера тебе ближе?",
    options: [
      { label: "Шумная компания, музыка, смех", points: { lager: 3, wheat: 1 } },
      { label: "Крафтовый бар с необычным меню", points: { ipa: 3 } },
      { label: "Уютное кресло, книга, приглушённый свет", points: { porter: 3, stout: 1 } },
      { label: "Утренняя пробежка и ясная голова", points: { nonalco: 3 } }
    ]
  },
  {
    text: "Что для тебя главное во вкусе жизни?",
    options: [
      { label: "Классика, которая никогда не подводит", points: { lager: 3 } },
      { label: "Насыщенность и яркие эмоции", points: { ipa: 3 } },
      { label: "Глубина и послевкусие, о котором думаешь потом", points: { stout: 3, porter: 1 } },
      { label: "Лёгкость без всякой тяжести", points: { wheat: 3, nonalco: 1 } }
    ]
  },
  {
    text: "Твой любимый формат разговора",
    options: [
      { label: "Простой треп обо всём и ни о чём", points: { lager: 3, wheat: 1 } },
      { label: "Спор с огоньком, где рождается истина", points: { ipa: 3 } },
      { label: "Долгий разговор по душам за полночь", points: { porter: 3, stout: 1 } },
      { label: "Заряжающий разговор о планах и целях", points: { nonalco: 3 } }
    ]
  },
  {
    text: "Что бесит тебя больше всего?",
    options: [
      { label: "Излишняя сложность на пустом месте", points: { lager: 3 } },
      { label: "Скучные и пресные люди", points: { ipa: 3 } },
      { label: "Поверхностность и нежелание понять глубже", points: { stout: 3, porter: 1 } },
      { label: "Тяжёлое похмельное утро", points: { nonalco: 3 } }
    ]
  },
  {
    text: "Идеальное место отдыха",
    options: [
      { label: "Пивной сад с друзьями летом", points: { lager: 3, wheat: 1 } },
      { label: "Крафтовая пивоварня с дегустацией", points: { ipa: 3 } },
      { label: "Камин, плед и тишина", points: { porter: 3, stout: 1 } },
      { label: "Активный отдых на природе", points: { nonalco: 3 } }
    ]
  },
  {
    text: "Как ты принимаешь решения?",
    options: [
      { label: "Проверенным, классическим способом", points: { lager: 3 } },
      { label: "Смело пробую нестандартный вариант", points: { ipa: 3 } },
      { label: "Долго обдумываю все детали", points: { stout: 3, porter: 1 } },
      { label: "Полагаюсь на ясную голову и интуицию", points: { nonalco: 3, wheat: 1 } }
    ]
  }
];

initQuizApp({
  items: ITEMS,
  questions: QUESTIONS,
  avatarSvg,
  title: "Какое ты пиво?",
  subtitle: "",
  footerNote: "Тест сделан ради шутки. 18+. Если пьёте — пейте ответственно и не садитесь за руль 🍻"
});
