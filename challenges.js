/**
 * Koinot Bo'ylab Flexbox — Gamified Challenges Engine (Slide 7)
 * Interactive puzzle levels, real-time validation, target docking pads, star scoring & hints.
 */

class ChallengeEngine {
  constructor() {
    this.currentLevel = 0;
    this.levels = [
      {
        id: 1,
        title: "1-Bosqich: Markaziy Qutbga Qo'nish",
        desc: "Astronavtlarni stansiyaning <strong>qoq markaziga</strong> (gorizontal va vertikal) qo'ndiring!",
        itemCount: 3,
        charPrefix: "astro",
        target: {
          "justify-content": "center",
          "align-items": "center"
        },
        initial: {
          "justify-content": "flex-start",
          "align-items": "flex-start",
          "flex-direction": "row"
        },
        controls: [
          {
            prop: "justify-content",
            label: "Gorizontal (justify-content):",
            options: ["flex-start", "center", "flex-end", "space-between"]
          },
          {
            prop: "align-items",
            label: "Vertikal (align-items):",
            options: ["flex-start", "center", "flex-end"]
          }
        ],
        hint: "Gorizontal markazlash uchun <code>justify-content: center;</code>, vertikal markazlash uchun esa <code>align-items: center;</code> xossalarini tanlang!",
        codeGoal: "justify-content: center;\nalign-items: center;"
      },
      {
        id: 2,
        title: "2-Bosqich: Vertikal Raketa Shaxtalari",
        desc: "Qahramonlarni <strong>ustun (column)</strong> ko'rinishida terib, oralarini <strong>teng yoying (space-between)</strong>!",
        itemCount: 3,
        charPrefix: "astro",
        target: {
          "flex-direction": "column",
          "justify-content": "space-between",
          "align-items": "center"
        },
        initial: {
          "flex-direction": "row",
          "justify-content": "flex-start",
          "align-items": "stretch"
        },
        controls: [
          {
            prop: "flex-direction",
            label: "Yo'nalish (flex-direction):",
            options: ["row", "column", "row-reverse"]
          },
          {
            prop: "justify-content",
            label: "Oraliq (justify-content):",
            options: ["flex-start", "center", "space-between", "space-evenly"]
          },
          {
            prop: "align-items",
            label: "Markazlash (align-items):",
            options: ["flex-start", "center", "flex-end"]
          }
        ],
        hint: "Bosh o'qni pastga burish uchun <code>flex-direction: column;</code> va oraliqni yoyish uchun <code>justify-content: space-between;</code> ni bosing!",
        codeGoal: "flex-direction: column;\njustify-content: space-between;\nalign-items: center;"
      },
      {
        id: 3,
        title: "3-Bosqich: Koinot Hayvonot Bog'i",
        desc: "6 ta kichkintoyni yangi qatorlarga <strong>tushiring (wrap)</strong>, oralariga <strong>20px masofa (gap)</strong> bering va <strong>space-around</strong> qiling!",
        itemCount: 6,
        charPrefix: "mixed",
        target: {
          "flex-wrap": "wrap",
          "justify-content": "space-around",
          "gap": "20px"
        },
        initial: {
          "flex-wrap": "nowrap",
          "justify-content": "flex-start",
          "gap": "0px"
        },
        controls: [
          {
            prop: "flex-wrap",
            label: "Qatorga sig'ish (flex-wrap):",
            options: ["nowrap", "wrap", "wrap-reverse"]
          },
          {
            prop: "justify-content",
            label: "Yoyilish (justify-content):",
            options: ["flex-start", "center", "space-around", "space-between"]
          },
          {
            prop: "gap",
            label: "Oraliq masofa (gap):",
            options: ["0px", "10px", "20px", "40px"]
          }
        ],
        hint: "Elementlar yangi qatorga tushishi uchun <code>flex-wrap: wrap;</code>, oraliqqa <code>gap: 20px;</code> va <code>justify-content: space-around;</code> ni tanlang!",
        codeGoal: "flex-wrap: wrap;\njustify-content: space-around;\ngap: 20px;"
      },
      {
        id: 4,
        title: "4-Bosqich (Super): Teskari Navbatchilik",
        desc: "Qahramonlarni <strong>teskari tartibda (row-reverse)</strong> qator oxiriga <strong>(flex-end)</strong> jamlang!",
        itemCount: 4,
        charPrefix: "astro",
        target: {
          "flex-direction": "row-reverse",
          "justify-content": "flex-end",
          "align-items": "center"
        },
        initial: {
          "flex-direction": "row",
          "justify-content": "flex-start",
          "align-items": "center"
        },
        controls: [
          {
            prop: "flex-direction",
            label: "Yo'nalish (flex-direction):",
            options: ["row", "row-reverse", "column"]
          },
          {
            prop: "justify-content",
            label: "Gorizontal joylashuv (justify-content):",
            options: ["flex-start", "center", "flex-end"]
          },
          {
            prop: "align-items",
            label: "Vertikal tekislash (align-items):",
            options: ["flex-start", "center", "flex-end"]
          }
        ],
        hint: "Bosh o'qni teskari qilish uchun <code>flex-direction: row-reverse;</code> va <code>justify-content: flex-end;</code> ni tanlang!",
        codeGoal: "flex-direction: row-reverse;\njustify-content: flex-end;\nalign-items: center;"
      }
    ];

    this.userState = {};
    this.starsEarned = [0, 0, 0, 0];
    this.isSolved = false;
  }

  init(containerElement) {
    this.container = containerElement;
    this.loadLevel(0);
  }

  loadLevel(levelIndex) {
    this.currentLevel = levelIndex;
    this.isSolved = false;
    const lvl = this.levels[levelIndex];

    // Clone initial properties into active state
    this.userState = Object.assign({}, lvl.initial);

    this.renderLevel();
  }

  renderLevel() {
    if (!this.container) return;
    const lvl = this.levels[this.currentLevel];

    // Build Level Progress Tabs
    let tabsHtml = `
      <div class="level-tabs">
        ${this.levels.map((l, i) => `
          <button class="level-tab-btn ${i === this.currentLevel ? 'active' : ''} ${this.starsEarned[i] > 0 ? 'completed' : ''}" data-lvl="${i}">
            <span>${l.id}-Bosqich</span>
            <div class="tab-stars">${'⭐'.repeat(this.starsEarned[i] || 0)}</div>
          </button>
        `).join('')}
      </div>
    `;

    // Build Control Groups
    let controlsHtml = `
      <div class="challenge-controls-panel">
        <div class="challenge-goal-card">
          <div class="goal-header">
            <span class="mission-tag">KOSMIK MISSYA:</span>
            <h4>${lvl.title}</h4>
          </div>
          <p class="goal-desc">${lvl.desc}</p>
        </div>

        <div class="controls-grid">
          ${lvl.controls.map(c => `
            <div class="control-group">
              <label class="control-group-title">${c.label}</label>
              <div class="chip-group" data-prop="${c.prop}">
                ${c.options.map(opt => `
                  <button class="chip-btn ${this.userState[c.prop] === opt ? 'active' : ''}" data-prop="${c.prop}" data-val="${opt}">
                    ${opt}
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="challenge-actions-row">
          <button class="btn-hint" id="challengeHintBtn">
            <span>💡</span> Yordam kerakmi?
          </button>
          <button class="btn-reset" id="challengeResetBtn">
            <span>🔄</span> Boshidan
          </button>
        </div>

        <div class="hint-popup-box hidden" id="challengeHintBox">
          <div class="hint-content">
            <strong>Robo-Ustoz Maslahati:</strong>
            <p>${lvl.hint}</p>
            <pre class="hint-code">${lvl.codeGoal}</pre>
          </div>
          <button class="hint-close-btn" id="closeHintBtn">Tushundim!</button>
        </div>
      </div>
    `;

    // Target holographic pads CSS preview
    let targetStyle = `
      display: flex;
      ${Object.entries(lvl.target).map(([k, v]) => `${k}: ${v};`).join('\n')}
    `;

    // Active User CSS preview
    let userStyle = `
      display: flex;
      ${Object.entries(this.userState).map(([k, v]) => `${k}: ${v};`).join('\n')}
    `;

    // Items inside stage
    let itemsHtml = '';
    for (let i = 1; i <= lvl.itemCount; i++) {
      itemsHtml += window.SVGLibrary.getChar(i, i, 'puzzle-char');
    }

    // Target ghost pads
    let targetPadsHtml = '';
    for (let i = 1; i <= lvl.itemCount; i++) {
      targetPadsHtml += `<div class="target-dock-pad" data-id="${i}"><span class="dock-number">#${i}</span></div>`;
    }

    // Assemble Stage
    let stageHtml = `
      <div class="challenge-stage-container">
        <!-- Target Hologram Base Layer -->
        <div class="target-hologram-layer" style="${targetStyle}">
          ${targetPadsHtml}
        </div>

        <!-- Active User Characters Layer -->
        <div class="active-characters-layer" id="challengeActiveLayer" style="${userStyle}">
          ${itemsHtml}
        </div>

        <!-- Success Overlay Banner -->
        <div class="victory-overlay hidden" id="challengeVictoryOverlay">
          <div class="victory-modal">
            <div class="victory-stars">⭐⭐⭐</div>
            <h3>MUKAMMAL QO'NISH!</h3>
            <p>Barcha qahramonlar o'z stansiyalariga xatosiz ulandi!</p>
            <div class="victory-buttons">
              ${this.currentLevel < this.levels.length - 1 
                ? `<button class="btn-next-level" id="btnNextLevel">Keyingi Bosqich ➔</button>`
                : `<button class="btn-all-done" id="btnAllDone">🎉 Barcha Bosqichlar Tugadi!</button>`
              }
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = `
      <div class="challenge-view-wrapper">
        ${tabsHtml}
        <div class="challenge-main-split">
          ${controlsHtml}
          ${stageHtml}
        </div>
      </div>
    `;

    this.attachEvents();
    this.checkWinCondition(false);
  }

  attachEvents() {
    // Level switch tabs
    this.container.querySelectorAll('.level-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        window.soundFX.playClick();
        const lvlIdx = parseInt(btn.getAttribute('data-lvl'), 10);
        this.loadLevel(lvlIdx);
      });
    });

    // Option Chips
    this.container.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prop = btn.getAttribute('data-prop');
        const val = btn.getAttribute('data-val');
        this.userState[prop] = val;
        
        window.soundFX.playSnap();

        // Update active chip classes in that group
        const group = btn.closest('.chip-group');
        group.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active stage layer CSS
        const activeLayer = this.container.querySelector('#challengeActiveLayer');
        if (activeLayer) {
          activeLayer.style[prop] = val;
        }

        this.checkWinCondition(true);
      });
    });

    // Hint toggle
    const hintBtn = this.container.querySelector('#challengeHintBtn');
    const hintBox = this.container.querySelector('#challengeHintBox');
    const closeHintBtn = this.container.querySelector('#closeHintBtn');
    
    if (hintBtn && hintBox) {
      hintBtn.addEventListener('click', () => {
        window.soundFX.playHint();
        hintBox.classList.toggle('hidden');
      });
    }
    if (closeHintBtn && hintBox) {
      closeHintBtn.addEventListener('click', () => {
        window.soundFX.playClick();
        hintBox.classList.add('hidden');
      });
    }

    // Reset button
    const resetBtn = this.container.querySelector('#challengeResetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        window.soundFX.playClick();
        const lvl = this.levels[this.currentLevel];
        this.userState = Object.assign({}, lvl.initial);
        this.renderLevel();
      });
    }

    // Next Level Button
    const nextLvlBtn = this.container.querySelector('#btnNextLevel');
    if (nextLvlBtn) {
      nextLvlBtn.addEventListener('click', () => {
        window.soundFX.playClick();
        if (this.currentLevel < this.levels.length - 1) {
          this.loadLevel(this.currentLevel + 1);
        }
      });
    }

    // All Done
    const allDoneBtn = this.container.querySelector('#btnAllDone');
    if (allDoneBtn) {
      allDoneBtn.addEventListener('click', () => {
        window.soundFX.playVictory();
        if (window.app) {
          window.app.goToSlide(7); // Jump to Slide 8 (Playground)
        }
      });
    }
  }

  checkWinCondition(playSound = true) {
    const lvl = this.levels[this.currentLevel];
    let isMatch = true;

    for (let prop in lvl.target) {
      if (this.userState[prop] !== lvl.target[prop]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch && !this.isSolved) {
      this.isSolved = true;
      this.starsEarned[this.currentLevel] = 3;

      if (playSound) {
        window.soundFX.playVictory();
        if (window.app && window.app.fireConfetti) {
          window.app.fireConfetti();
        }
      }

      const victoryOverlay = this.container.querySelector('#challengeVictoryOverlay');
      if (victoryOverlay) {
        victoryOverlay.classList.remove('hidden');
      }

      // Update Tab Star display
      const activeTab = this.container.querySelector(`.level-tab-btn[data-lvl="${this.currentLevel}"]`);
      if (activeTab) {
        activeTab.classList.add('completed');
        const starBox = activeTab.querySelector('.tab-stars');
        if (starBox) starBox.textContent = '⭐⭐⭐';
      }

      // Update global HUD score
      if (window.app && window.app.updateScoreHUD) {
        window.app.updateScoreHUD();
      }
    }
  }

  getTotalStars() {
    return this.starsEarned.reduce((a, b) => a + b, 0);
  }
}

window.challengeEngine = new ChallengeEngine();
