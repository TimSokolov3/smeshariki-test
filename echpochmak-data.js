const ITEMS = {
  govyadina: {
    name: "Эчпочмак с говядиной",
    color: "#c98a4a",
    darkColor: "#7a4420",
    tagline: "Классика, которая никогда не подводит.",
    desc: "Ты надёжный, простой и понятный человек. Не гонишься за понтами — и именно поэтому с тобой всегда спокойно и хорошо."
  },
  baranina: {
    name: "Эчпочмак с бараниной",
    color: "#a8632f",
    darkColor: "#5c3115",
    tagline: "С характером и лёгкой остротой.",
    desc: "Ты яркий и с изюминкой, не боишься выделяться. У тебя есть особый вкус к жизни — не всем он понятен, но те, кто понял, влюблены навсегда."
  },
  gus: {
    name: "Эчпочмак с гусём",
    color: "#d9a441",
    darkColor: "#8a5c1c",
    tagline: "Праздничный деликатес для особых случаев.",
    desc: "Ты про качество, а не количество. Умеешь создавать атмосферу праздника из ничего и знаешь толк в хороших моментах жизни."
  },
  kartofel: {
    name: "Постный картофельный эчпочмак",
    color: "#e0b96a",
    darkColor: "#9c7534",
    tagline: "Скромный, доступный и практичный.",
    desc: "Ты цените простоту и умеешь довольствоваться малым. Практичность и здравый смысл — твои главные суперсилы."
  }
};

// Оригинальный нарисованный кавайный маскот-эчпочмак (собственный дизайн, вдохновлён формой блюда)
function avatarSvg(key, size) {
  const c = ITEMS[key].color;
  const dark = ITEMS[key].darkColor || "#7a3d1a";
  const gid = `ep-g-${key}`;

  // Треугольник со скруглёнными углами, посчитанный геометрически (не рисован "от руки")
  const trianglePath = "M55.07,28.62 L80.87,72.48 Q90,88 72,88 L28,88 Q10,88 19.13,72.48 L44.93,28.62 Q50,20 55.07,28.62 Z";

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg" class="avatar-svg">
    <defs>
      <radialGradient id="${gid}" cx="35%" cy="20%" r="90%">
        <stop offset="0%" stop-color="#fff3da" stop-opacity="0.85"/>
        <stop offset="45%" stop-color="${c}"/>
        <stop offset="100%" stop-color="${c}"/>
      </radialGradient>
    </defs>

    <path d="M50 18 Q56 8 51 2 Q60 6 62 15 Q54 12 53 18" fill="none" stroke="#cfc6b8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>

    <path d="${trianglePath}" fill="url(#${gid})" stroke="rgba(0,0,0,0.22)" stroke-width="2" stroke-linejoin="round"/>

    <path d="M50 30 L50 52" stroke="${dark}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 52 L30 86" stroke="${dark}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M50 52 L70 86" stroke="${dark}" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>

    <circle cx="38" cy="62" r="7.5" fill="#2b2b2b"/>
    <circle cx="62" cy="62" r="7.5" fill="#2b2b2b"/>
    <circle cx="35.8" cy="59.3" r="2.5" fill="#fff"/>
    <circle cx="59.8" cy="59.3" r="2.5" fill="#fff"/>
    <ellipse cx="26" cy="70" rx="6" ry="4" fill="#e8748a" opacity="0.55"/>
    <ellipse cx="74" cy="70" rx="6" ry="4" fill="#e8748a" opacity="0.55"/>
    <path d="M43 75 Q50 80 57 75" stroke="#2b2b2b" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`;
}

const QUESTIONS = [
  {
    text: "Как ты выбираешь, куда пойти в выходной?",
    options: [
      { label: "Иду в проверенное любимое место", points: { govyadina: 3 } },
      { label: "Ищу что-то яркое и необычное", points: { baranina: 3 } },
      { label: "Выбираю самое статусное и красивое", points: { gus: 3 } },
      { label: "Останусь дома, зачем тратить лишнее", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Как тебя описали бы друзья?",
    options: [
      { label: "Надёжный и предсказуемый в лучшем смысле", points: { govyadina: 3 } },
      { label: "Дерзкий, с характером", points: { baranina: 3 } },
      { label: "Утончённый ценитель хорошего", points: { gus: 3 } },
      { label: "Простой и практичный", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Что для тебя праздник?",
    options: [
      { label: "Привычные традиции и любимые блюда", points: { govyadina: 3 } },
      { label: "Что-то яркое, чтобы запомнилось", points: { baranina: 3 } },
      { label: "Роскошный стол и особая атмосфера", points: { gus: 3 } },
      { label: "Тихий вечер без лишней суеты", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Как ты относишься к деньгам?",
    options: [
      { label: "Трачу разумно, но не экономлю на важном", points: { govyadina: 3 } },
      { label: "Могу потратиться на то, что зажигает", points: { baranina: 3 } },
      { label: "Готов заплатить за качество и статус", points: { gus: 3 } },
      { label: "Считаю каждую копейку и это нормально", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Твой стиль в общении",
    options: [
      { label: "Простой и понятный, без масок", points: { govyadina: 3 } },
      { label: "Острый на язык, с перчинкой", points: { baranina: 3 } },
      { label: "Изысканный и с достоинством", points: { gus: 3 } },
      { label: "Скромный, не люблю выпячиваться", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Что бесит тебя больше всего?",
    options: [
      { label: "Когда всё усложняют на пустом месте", points: { govyadina: 3 } },
      { label: "Пресность и отсутствие огонька", points: { baranina: 3 } },
      { label: "Дешёвое и небрежное отношение к делу", points: { gus: 3 } },
      { label: "Показное и неоправданное расточительство", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Как ты справляешься с трудностями?",
    options: [
      { label: "Спокойно и по проверенной схеме", points: { govyadina: 3 } },
      { label: "С огнём и решительностью", points: { baranina: 3 } },
      { label: "С достоинством, не теряя лица", points: { gus: 3 } },
      { label: "Просто и без драмы, шаг за шагом", points: { kartofel: 3 } }
    ]
  },
  {
    text: "Что для тебя важнее всего в жизни?",
    options: [
      { label: "Стабильность и надёжные люди рядом", points: { govyadina: 3 } },
      { label: "Яркие эмоции и не скучать", points: { baranina: 3 } },
      { label: "Качество жизни и хороший вкус", points: { gus: 3 } },
      { label: "Простые радости без лишних сложностей", points: { kartofel: 3 } }
    ]
  }
];

initQuizApp({
  items: ITEMS,
  questions: QUESTIONS,
  avatarSvg,
  title: "Какой ты эчпочмак?",
  subtitle: "",
  footerNote: "Тест сделан ради шутки и с любовью к татарской кухне 🥟"
});
