// Общий движок для мини-тестов: логика вопросов/очков/результата одна на все квизы.
function initQuizApp(config) {
  const { items, questions, avatarSvg, title, subtitle, footerNote } = config;

  const state = {
    step: -1, // -1 = стартовый экран
    scores: {}
  };

  function resetScores() {
    state.scores = {};
    Object.keys(items).forEach((key) => (state.scores[key] = 0));
  }

  function render() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    if (state.step === -1) {
      app.appendChild(renderStart());
    } else if (state.step < questions.length) {
      app.appendChild(renderQuestion(state.step));
    } else {
      app.appendChild(renderResult());
    }
  }

  function renderStart() {
    const card = document.createElement("div");
    card.className = "card";
    const avatarsRow = Object.keys(items)
      .map(
        (key) => `
        <div class="mini-avatar">
          ${avatarSvg(key, 72)}
          <span class="mini-avatar-name">${items[key].name}</span>
        </div>`
      )
      .join("");
    card.innerHTML = `
      <a class="back-link" href="index.html">&larr; Все тесты</a>
      <h1>${title}</h1>
      <div class="avatars-row">${avatarsRow}</div>
      <p>${subtitle || ""} Пройди тест из ${questions.length} вопросов и узнай результат!</p>
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
    const question = questions[index];
    const card = document.createElement("div");
    card.className = "card";

    const dots = document.createElement("div");
    dots.className = "step-dots";
    questions.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "step-dot" + (i === index ? " active" : i < index ? " done" : "");
      dots.appendChild(dot);
    });
    card.appendChild(dots);

    const progressWrap = document.createElement("div");
    progressWrap.className = "progress-wrap";
    progressWrap.innerHTML = `<div class="progress-bar" style="width:${Math.round((index / questions.length) * 100)}%"></div>`;
    card.appendChild(progressWrap);

    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.textContent = `Вопрос ${index + 1} из ${questions.length}. ${question.text}`;
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
    const winner = items[winnerKey];

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="result-avatar">${avatarSvg(winnerKey, 180)}</div>
      <div class="result-name">Ты — ${winner.name}!</div>
      <div class="result-tagline">${winner.tagline}</div>
      <p>${winner.desc}</p>
      <div class="actions">
        <button class="btn" id="restart-btn">Пройти ещё раз</button>
        <button class="btn btn-secondary" id="copy-btn">Скопировать ссылку на тест</button>
        <a class="btn btn-secondary" href="index.html">Другие тесты</a>
      </div>
      <div class="footer-note">${footerNote || ""}</div>
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

    launchConfetti();

    return card;
  }

  function launchConfetti() {
    const colors = ["#ff9a8b", "#ff6a88", "#a8e6cf", "#ffd3b6", "#ffaaa5", "#a9c4d8"];
    const container = document.createElement("div");
    container.className = "confetti-container";
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";
      piece.style.animationDelay = Math.random() * 0.6 + "s";
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(piece);
    }
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 5000);
  }

  render();
}
