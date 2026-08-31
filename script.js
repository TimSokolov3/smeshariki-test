const CHARACTERS = {
  krosh: {
    name: "Крош",
    emoji: "🐰",
    tagline: "Безбашенный заяц, который живёт на скорости!",
    desc: "Ты энергичный и смелый, обожаешь приключения и не боишься рисковать. Скука — твой главный враг."
  },
  ezhik: {
    name: "Ёжик",
    emoji: "🦔",
    tagline: "Рассудительный друг, на которого можно положиться.",
    desc: "Ты цените порядок, дружбу и природу. Всегда готов помочь и навести гармонию вокруг."
  },
  kopatych: {
    name: "Копатыч",
    emoji: "🐻",
    tagline: "Трудолюбивый садовод с золотыми руками.",
    desc: "Ты спокойный, надёжный и заботливый. Любишь труд, порядок и вкусные домашние заготовки."
  },
  barash: {
    name: "Бараш",
    emoji: "🐑",
    tagline: "Романтичный поэт и немного меланхолик.",
    desc: "Ты тонко чувствуешь мир, любишь мечтать и сочинять. Иногда грустишь — и это тоже нормально."
  },
  nyusha: {
    name: "Нюша",
    emoji: "🐷",
    tagline: "Королева стиля и уверенности в себе.",
    desc: "Ты обожаешь внимание, красоту и яркие эмоции. С тобой никогда не скучно!"
  },
  pin: {
    name: "Пин",
    emoji: "🐧",
    tagline: "Гениальный изобретатель-перфекционист.",
    desc: "Ты технарь до мозга костей: любишь точность, эксперименты и новые изобретения."
  },
  karkarych: {
    name: "Кар-Карыч",
    emoji: "🐦",
    tagline: "Обаятельный артист с богатой историей.",
    desc: "Ты харизматичный, любишь сцену и хорошую историю. Дружба и красивый жест — твоя стихия."
  },
  sovunya: {
    name: "Совунья",
    emoji: "🦉",
    tagline: "Мудрая целительница и заботливая душа.",
    desc: "Ты заботишься обо всех вокруг, ценишь мудрость и всегда готова прийти на помощь."
  },
  losyash: {
    name: "Лосяш",
    emoji: "🦌",
    tagline: "Учёный, который знает ответ на любой вопрос.",
    desc: "Ты любишь науку, факты и объяснения. Логика и любопытство — твои лучшие друзья."
  }
};

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

const state = {
  step: -1, // -1 = стартовый экран
  scores: {}
};

function resetScores() {
  state.scores = {};
  Object.keys(CHARACTERS).forEach((key) => (state.scores[key] = 0));
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  if (state.step === -1) {
    app.appendChild(renderStart());
  } else if (state.step < QUESTIONS.length) {
    app.appendChild(renderQuestion(state.step));
  } else {
    app.appendChild(renderResult());
  }
}

function renderStart() {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <span class="emoji-big">🌈</span>
    <h1>Кто ты из Смешариков?</h1>
    <p>Пройди тест из ${QUESTIONS.length} вопросов и узнай, какой персонаж отражает твой характер!</p>
    <button class="btn" id="start-btn">Начать тест</button>
  `;
  card.querySelector("#start-btn").addEventListener("click", () => {
    resetScores();
    state.step = 0;
    render();
  });
  return card;
}

function renderQuestion(index) {
  const question = QUESTIONS[index];
  const progress = Math.round((index / QUESTIONS.length) * 100);

  const card = document.createElement("div");
  card.className = "card";

  const progressWrap = document.createElement("div");
  progressWrap.className = "progress-wrap";
  progressWrap.innerHTML = `<div class="progress-bar" style="width:${progress}%"></div>`;
  card.appendChild(progressWrap);

  const questionText = document.createElement("div");
  questionText.className = "question-text";
  questionText.textContent = `Вопрос ${index + 1} из ${QUESTIONS.length}. ${question.text}`;
  card.appendChild(questionText);

  const options = document.createElement("div");
  options.className = "options";

  question.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option.label;
    btn.addEventListener("click", () => {
      Object.entries(option.points).forEach(([key, value]) => {
        state.scores[key] += value;
      });
      state.step += 1;
      render();
    });
    options.appendChild(btn);
  });

  card.appendChild(options);
  return card;
}

function getWinner() {
  let bestKey = null;
  let bestScore = -Infinity;
  Object.entries(state.scores).forEach(([key, score]) => {
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  });
  return bestKey;
}

function renderResult() {
  const winnerKey = getWinner();
  const winner = CHARACTERS[winnerKey];

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <span class="emoji-big">${winner.emoji}</span>
    <div class="result-name">Ты — ${winner.name}!</div>
    <div class="result-tagline">${winner.tagline}</div>
    <p>${winner.desc}</p>
    <div class="actions">
      <button class="btn" id="restart-btn">Пройти ещё раз</button>
      <button class="btn btn-secondary" id="copy-btn">Скопировать ссылку на тест</button>
    </div>
    <div class="footer-note">Тест создан фанатами, не связан с официальными правообладателями «Смешариков».</div>
  `;

  card.querySelector("#restart-btn").addEventListener("click", () => {
    state.step = -1;
    render();
  });

  card.querySelector("#copy-btn").addEventListener("click", async () => {
    const copyBtn = card.querySelector("#copy-btn");
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyBtn.textContent = "Ссылка скопирована!";
    } catch (e) {
      copyBtn.textContent = window.location.href;
    }
    setTimeout(() => {
      copyBtn.textContent = "Скопировать ссылку на тест";
    }, 2000);
  });

  return card;
}

render();
