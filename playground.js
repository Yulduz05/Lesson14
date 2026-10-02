/**
 * Koinot Bo'ylab Flexbox — Real-Time CSS Compiler & Robo-Ustoz Linter (Slide 8)
 * Live code editing, syntax validation, preset templates & instant visual reflection.
 */

class PlaygroundEngine {
  constructor() {
    this.itemCount = 4;
    this.containerWidth = "100%";
    this.presets = {
      nav: {
        name: "🚀 Navigatsiya Menyusi",
        css: `.koinot-stansiya {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}`
      },
      gallery: {
        name: "🖼️ Kartalar Galereyasi",
        css: `.koinot-stansiya {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}`
      },
      center: {
        name: "🎯 Markaziy Portal",
        css: `.koinot-stansiya {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}`
      },
      column: {
        name: "🛸 Vertikal Boshqaruv",
        css: `.koinot-stansiya {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px;
}`
      }
    };
  }

  init(containerElement) {
    this.container = containerElement;
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="playground-wrapper">
        <!-- Preset Header Chips -->
        <div class="playground-presets-bar">
          <span class="preset-label">⚡ Tezkor Namunalar:</span>
          <div class="preset-buttons-wrap">
            <button class="preset-chip active" data-preset="nav">🚀 Navigatsiya</button>
            <button class="preset-chip" data-preset="gallery">🖼️ Galereya</button>
            <button class="preset-chip" data-preset="center">🎯 Markaziy Portal</button>
            <button class="preset-chip" data-preset="column">🛸 Ustun Tartibi</button>
          </div>
          <div class="device-toggles">
            <button class="device-btn active" data-width="100%" title="Keng ekran">🖥️ Katta</button>
            <button class="device-btn" data-width="70%" title="Planshet">📱 O'rta</button>
            <button class="device-btn" data-width="45%" title="Telefon">📲 Kichik</button>
          </div>
        </div>

        <div class="playground-main-split">
          <!-- Left: Code Editor & Quick Chips -->
          <div class="playground-editor-pane">
            <div class="editor-header">
              <div class="mac-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="editor-filename">style.css</span>
              <button class="btn-copy-css" id="btnCopyCss" title="Kodni nusxalash">
                📋 Nusxa olish
              </button>
            </div>

            <div class="editor-body">
              <div class="line-numbers" id="lineNumbers">
                1<br>2<br>3<br>4<br>5<br>6<br>7<br>8
              </div>
              <textarea id="cssTextarea" class="css-code-input" spellcheck="false">${this.presets.nav.css}</textarea>
            </div>

            <!-- Quick Insertion Toolbar for Kids -->
            <div class="quick-props-toolbar">
              <div class="toolbar-title">⚡ Bir bosishda qo'shish:</div>
              <div class="toolbar-chips">
                <button class="insert-chip" data-insert="justify-content: center;">center</button>
                <button class="insert-chip" data-insert="justify-content: space-between;">space-between</button>
                <button class="insert-chip" data-insert="justify-content: space-around;">space-around</button>
                <button class="insert-chip" data-insert="flex-direction: column;">column</button>
                <button class="insert-chip" data-insert="flex-wrap: wrap;">wrap</button>
                <button class="insert-chip" data-insert="align-items: center;">align: center</button>
                <button class="insert-chip" data-insert="gap: 25px;">gap: 25px</button>
              </div>
            </div>

            <!-- Robo-Ustoz Assistant Card -->
            <div class="robo-feedback-card" id="roboFeedbackCard">
              <div class="robo-mascot-box" id="roboMascotBox">
                ${window.SVGLibrary.roboUstoz("happy")}
              </div>
              <div class="robo-speech-bubble">
                <strong class="robo-name">Robo-Ustoz:</strong>
                <p id="roboSpeechText">Kodni o'zgartirib ko'ring! Men har bir satrni real vaqtda tekshirib boraman.</p>
              </div>
            </div>
          </div>

          <!-- Right: Live Preview Stage -->
          <div class="playground-preview-pane">
            <div class="preview-stage-header">
              <span class="stage-tag">🔴 Jonli Natija (Live Canvas)</span>
              <div class="item-count-controls">
                <button class="btn-count-mod" id="btnRemoveItem" title="Qahramonni kamaytirish">➖</button>
                <span class="count-display" id="charCountLabel">4 ta Qahramon</span>
                <button class="btn-count-mod" id="btnAddItem" title="Qahramon qo'shish">➕</button>
              </div>
            </div>

            <div class="preview-canvas-outer" id="previewCanvasOuter" style="width: 100%;">
              <div class="koinot-stansiya" id="liveFlexContainer">
                ${this.renderCharacters(this.itemCount)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachEvents();
    this.compileCSS();
  }

  renderCharacters(count) {
    let html = '';
    for (let i = 1; i <= count; i++) {
      html += window.SVGLibrary.getChar(i, i, 'playground-char');
    }
    return html;
  }

  attachEvents() {
    const textarea = this.container.querySelector('#cssTextarea');
    const liveContainer = this.container.querySelector('#liveFlexContainer');
    const previewCanvasOuter = this.container.querySelector('#previewCanvasOuter');

    // Textarea input compiler
    if (textarea) {
      textarea.addEventListener('input', () => {
        this.updateLineNumbers();
        this.compileCSS();
      });
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          textarea.value = textarea.value.substring(0, start) + "  " + textarea.value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 2;
          this.compileCSS();
        }
      });
    }

    // Presets
    this.container.querySelectorAll('.preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playClick();
        this.container.querySelectorAll('.preset-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const pKey = btn.getAttribute('data-preset');
        if (this.presets[pKey]) {
          textarea.value = this.presets[pKey].css;
          this.updateLineNumbers();
          this.compileCSS();
        }
      });
    });

    // Device toggles
    this.container.querySelectorAll('.device-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playClick();
        this.container.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const w = btn.getAttribute('data-width');
        previewCanvasOuter.style.width = w;
      });
    });

    // Quick Insert Toolbar
    this.container.querySelectorAll('.insert-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playSnap();
        const snippet = btn.getAttribute('data-insert');
        // Replace or append property into textarea
        let current = textarea.value;
        const [propKey] = snippet.split(':');
        const regex = new RegExp(`(${propKey.trim()}\\s*:\\s*[^;]+;)`, 'g');

        if (regex.test(current)) {
          current = current.replace(regex, `  ${snippet}`);
        } else {
          // insert before closing brace
          const lastBrace = current.lastIndexOf('}');
          if (lastBrace !== -1) {
            current = current.slice(0, lastBrace) + `  ${snippet}\n` + current.slice(lastBrace);
          } else {
            current += `\n  ${snippet}`;
          }
        }
        textarea.value = current;
        this.updateLineNumbers();
        this.compileCSS();
      });
    });

    // Character Count +/-
    const btnAddItem = this.container.querySelector('#btnAddItem');
    const btnRemoveItem = this.container.querySelector('#btnRemoveItem');
    const charCountLabel = this.container.querySelector('#charCountLabel');

    if (btnAddItem && btnRemoveItem) {
      btnAddItem.addEventListener('click', () => {
        if (this.itemCount < 8) {
          window.soundFX.playSnap();
          this.itemCount++;
          liveContainer.innerHTML = this.renderCharacters(this.itemCount);
          charCountLabel.textContent = `${this.itemCount} ta Qahramon`;
        }
      });

      btnRemoveItem.addEventListener('click', () => {
        if (this.itemCount > 1) {
          window.soundFX.playClick();
          this.itemCount--;
          liveContainer.innerHTML = this.renderCharacters(this.itemCount);
          charCountLabel.textContent = `${this.itemCount} ta Qahramon`;
        }
      });
    }

    // Copy CSS button
    const btnCopyCss = this.container.querySelector('#btnCopyCss');
    if (btnCopyCss) {
      btnCopyCss.addEventListener('click', () => {
        window.soundFX.playClick();
        navigator.clipboard.writeText(textarea.value).then(() => {
          btnCopyCss.textContent = "✅ Nusxalandi!";
          setTimeout(() => {
            btnCopyCss.textContent = "📋 Nusxa olish";
          }, 2000);
        });
      });
    }
  }

  updateLineNumbers() {
    const textarea = this.container.querySelector('#cssTextarea');
    const lineNumbers = this.container.querySelector('#lineNumbers');
    if (!textarea || !lineNumbers) return;

    const lines = textarea.value.split('\n').length;
    let nums = [];
    for (let i = 1; i <= Math.max(lines, 8); i++) {
      nums.push(i);
    }
    lineNumbers.innerHTML = nums.join('<br>');
  }

  compileCSS() {
    const textarea = this.container.querySelector('#cssTextarea');
    const liveContainer = this.container.querySelector('#liveFlexContainer');
    const roboMascotBox = this.container.querySelector('#roboMascotBox');
    const roboSpeechText = this.container.querySelector('#roboSpeechText');

    if (!textarea || !liveContainer) return;

    const rawCSS = textarea.value;
    const rules = {};
    let hasDisplayFlex = false;
    let syntaxWarnings = [];

    // Parse key-value rules between { and }
    const match = rawCSS.match(/\{([\s\S]*?)\}/);
    const body = match ? match[1] : rawCSS;
    const lines = body.split(';');

    lines.forEach(line => {
      const parts = line.split(':');
      if (parts.length >= 2) {
        const key = parts[0].trim().toLowerCase();
        const val = parts.slice(1).join(':').trim().toLowerCase();
        if (key && val) {
          rules[key] = val;
          if (key === 'display' && val.includes('flex')) {
            hasDisplayFlex = true;
          }
        }
      }
    });

    // Validate properties
    const validProps = [
      'display', 'flex-direction', 'justify-content', 'align-items',
      'flex-wrap', 'gap', 'row-gap', 'column-gap', 'align-content',
      'background', 'background-color', 'border-radius', 'padding'
    ];

    for (let k in rules) {
      if (!validProps.includes(k) && !k.startsWith('--')) {
        syntaxWarnings.push(`"${k}" xossasi Flexbox'da notanish bo'lishi mumkin.`);
      }
    }

    // Apply styles directly to live container
    // Reset standard flex styles first
    liveContainer.style.display = 'flex';
    liveContainer.style.flexDirection = 'row';
    liveContainer.style.justifyContent = 'flex-start';
    liveContainer.style.alignItems = 'stretch';
    liveContainer.style.flexWrap = 'nowrap';
    liveContainer.style.gap = '0px';

    for (let [k, v] of Object.entries(rules)) {
      try {
        liveContainer.style.setProperty(k, v);
      } catch (e) {}
    }

    // Robo-Ustoz Feedback
    if (!hasDisplayFlex && rules['display'] && !rules['display'].includes('flex')) {
      roboMascotBox.innerHTML = window.SVGLibrary.roboUstoz("alert");
      roboSpeechText.innerHTML = `⚠️ Diqqat: <code>display: ${rules['display']}</code> bo'lsa, Flexbox sehrli xossalari ishlamaydi! <code>display: flex;</code> qiling!`;
    } else if (syntaxWarnings.length > 0) {
      roboMascotBox.innerHTML = window.SVGLibrary.roboUstoz("thinking");
      roboSpeechText.innerHTML = `💡 ${syntaxWarnings[0]} Tekshirib ko'ring!`;
    } else {
      roboMascotBox.innerHTML = window.SVGLibrary.roboUstoz("happy");
      const jc = rules['justify-content'] || 'flex-start';
      const ai = rules['align-items'] || 'stretch';
      const fd = rules['flex-direction'] || 'row';
      const gap = rules['gap'] || '0px';

      roboSpeechText.innerHTML = `✨ Ajoyib! <strong>${fd}</strong> yo'nalishida <strong>${jc}</strong> va <strong>${ai}</strong> bilan elementlar mukammal tartiblandi! (Oraliq: ${gap})`;
    }
  }
}

window.playgroundEngine = new PlaygroundEngine();
