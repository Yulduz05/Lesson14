/**
 * Koinot Bo'ylab Flexbox — Main Application Coordinator
 * Slides Engine, Interactive Visual Handlers, Starfield Generator & Confetti System
 */

class FlexboxSafariApp {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 8;
    this.slideTitles = [
      "1. Sehrli Quti (display: flex)",
      "2. Yo'nalish (flex-direction)",
      "3. Gorizontal Tekislash (justify-content)",
      "4. Vertikal Tekislash (align-items)",
      "5. Oraliq Masofa (gap)",
      "6. Qatorga Sig'maganda (flex-wrap)",
      "7. Interaktiv Topshiriqlar",
      "8. Jonli CSS Kompilyator"
    ];

    // State for Slide 1-6 interactive sandboxes
    this.slideState = {
      // Slide 1
      s1_display: 'flex',
      // Slide 2
      s2_direction: 'row',
      // Slide 3
      s3_justify: 'center',
      // Slide 4
      s4_align: 'center',
      // Slide 5
      s5_gap: 20,
      // Slide 6
      s6_wrap: 'wrap',
      s6_count: 5
    };

    // Confetti particles
    this.confettiParticles = [];
    this.isConfettiActive = false;
  }

  init() {
    this.generateStarfield();
    this.initConfetti();
    this.initSlides();
    this.initNavigation();
    this.initInteractiveSlide1();
    this.initInteractiveSlide2();
    this.initInteractiveSlide3();
    this.initInteractiveSlide4();
    this.initInteractiveSlide5();
    this.initInteractiveSlide6();
    this.initHUDButtons();

    // Init Slide 7 & Slide 8 engines
    const challengeContainer = document.getElementById('challengeContainer');
    if (challengeContainer && window.challengeEngine) {
      window.challengeEngine.init(challengeContainer);
    }

    const playgroundContainer = document.getElementById('playgroundContainer');
    if (playgroundContainer && window.playgroundEngine) {
      window.playgroundEngine.init(playgroundContainer);
    }

    this.goToSlide(0);
  }

  /* -------------------------------------------------------------
     STARFIELD BACKGROUND GENERATOR
  ------------------------------------------------------------- */
  generateStarfield() {
    const bg = document.querySelector('.space-background');
    if (!bg) return;

    for (let i = 0; i < 65; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + 1.2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.setProperty('--duration', `${(Math.random() * 3 + 2).toFixed(1)}s`);
      star.style.animationDelay = `${(Math.random() * 4).toFixed(1)}s`;
      bg.appendChild(star);
    }
  }

  /* -------------------------------------------------------------
     SLIDE DECK CONTROLLER & KEYBOARD NAVIGATION
  ------------------------------------------------------------- */
  initSlides() {
    this.slides = document.querySelectorAll('.slide');
    this.dotsContainer = document.getElementById('slideDots');
    this.progressFill = document.getElementById('progressFill');
    this.slideNumberPill = document.getElementById('slideNumberPill');

    // Create dot indicators
    if (this.dotsContainer) {
      this.dotsContainer.innerHTML = '';
      for (let i = 0; i < this.totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `slide-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('title', this.slideTitles[i]);
        dot.addEventListener('click', () => {
          window.soundFX.playClick();
          this.goToSlide(i);
        });
        this.dotsContainer.appendChild(dot);
      }
    }
  }

  initNavigation() {
    const btnPrev = document.getElementById('btnPrevSlide');
    const btnNext = document.getElementById('btnNextSlide');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        window.soundFX.playClick();
        if (this.currentSlide > 0) this.goToSlide(this.currentSlide - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        window.soundFX.playClick();
        if (this.currentSlide < this.totalSlides - 1) this.goToSlide(this.currentSlide + 1);
      });
    }

    // Keyboard Arrow Keys
    window.addEventListener('keydown', (e) => {
      // Don't hijack arrow keys when child is typing in CSS editor textarea
      if (document.activeElement && document.activeElement.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (this.currentSlide < this.totalSlides - 1) {
          window.soundFX.playWhoosh();
          this.goToSlide(this.currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (this.currentSlide > 0) {
          window.soundFX.playWhoosh();
          this.goToSlide(this.currentSlide - 1);
        }
      } else if (e.key === 'Home') {
        this.goToSlide(0);
      } else if (e.key === 'End') {
        this.goToSlide(this.totalSlides - 1);
      }
    });
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;
    this.currentSlide = index;

    // Toggle active slide class
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // Update Dots
    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.slide-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    // Update Progress Bar & Pill
    const progressPercent = ((index + 1) / this.totalSlides) * 100;
    if (this.progressFill) {
      this.progressFill.style.width = `${progressPercent}%`;
    }
    if (this.slideNumberPill) {
      this.slideNumberPill.textContent = `${index + 1} / ${this.totalSlides}`;
    }

    // Update Prev / Next button states
    const btnPrev = document.getElementById('btnPrevSlide');
    const btnNext = document.getElementById('btnNextSlide');
    if (btnPrev) btnPrev.disabled = (index === 0);
    if (btnNext) {
      if (index === this.totalSlides - 1) {
        btnNext.innerHTML = `<span>Boshlash 🚀</span>`;
      } else {
        btnNext.innerHTML = `<span>Oldinga ➔</span>`;
      }
    }
  }

  /* -------------------------------------------------------------
     SLIDE 1: DISPLAY FLEX vs BLOCK INTERACTION
  ------------------------------------------------------------- */
  initInteractiveSlide1() {
    const toggleBtn = document.getElementById('s1ToggleFlex');
    const container = document.getElementById('s1Container');
    const codeSnippet = document.getElementById('s1CodeSnippet');
    const stateBadge = document.getElementById('s1StateBadge');
    const explainer = document.getElementById('s1Explainer');

    if (!toggleBtn || !container) return;

    // Render characters
    container.innerHTML = 
      window.SVGLibrary.getChar(1, 1) + 
      window.SVGLibrary.getChar(2, 2) + 
      window.SVGLibrary.getChar(3, 3);

    toggleBtn.addEventListener('click', () => {
      window.soundFX.playWhoosh();
      if (this.slideState.s1_display === 'flex') {
        this.slideState.s1_display = 'block';
        container.style.display = 'block';
        container.classList.add('block-mode');
        codeSnippet.textContent = 'display: block;';
        stateBadge.textContent = '📦 Oddiy Blok (Qavatma-qavat)';
        stateBadge.style.color = '#94a3b8';
        explainer.innerHTML = 'Oddiy <code>block</code> rejimida elementlar bir-birining ustiga qavatma-qavat qulab tushadi.';
        toggleBtn.innerHTML = '<span>⚡ Flex Sehrini Yoqish!</span>';
      } else {
        this.slideState.s1_display = 'flex';
        container.style.display = 'flex';
        container.classList.remove('block-mode');
        codeSnippet.textContent = 'display: flex;';
        stateBadge.textContent = '✨ Sehrli Flexbox (Bir Qatorda)';
        stateBadge.style.color = '#00f0ff';
        explainer.innerHTML = '<strong>Ajoyib!</strong> <code>display: flex;</code> yoqilganda barcha qahramonlar tartibli ravishda bitta gorizontal qatorga tiziladi!';
        toggleBtn.innerHTML = '<span>📦 Oddiy Blokga Qaytish</span>';
      }
    });
  }

  /* -------------------------------------------------------------
     SLIDE 2: FLEX-DIRECTION INTERACTION
  ------------------------------------------------------------- */
  initInteractiveSlide2() {
    const container = document.getElementById('s2Container');
    const codeSnippet = document.getElementById('s2CodeSnippet');

    if (!container) return;

    // Render axis layer and characters
    container.innerHTML = `
      <div class="axis-indicator-layer">
        <div class="main-axis-arrow axis-row" id="s2AxisArrow">
          <span id="s2AxisLabel">Bosh o'q (Chapdan ➔ O'ngga)</span>
        </div>
      </div>
      ${window.SVGLibrary.getChar(1, 1)}
      ${window.SVGLibrary.getChar(2, 2)}
      ${window.SVGLibrary.getChar(3, 3)}
    `;

    const axisArrow = document.getElementById('s2AxisArrow');
    const axisLabel = document.getElementById('s2AxisLabel');

    document.querySelectorAll('[data-s2-dir]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playSnap();
        document.querySelectorAll('[data-s2-dir]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const dir = btn.getAttribute('data-s2-dir');
        this.slideState.s2_direction = dir;
        container.style.flexDirection = dir;
        codeSnippet.textContent = `flex-direction: ${dir};`;

        if (axisArrow) {
          if (dir === 'row') {
            axisArrow.className = 'main-axis-arrow axis-row';
            axisLabel.textContent = 'Bosh o\'q (Chapdan ➔ O\'ngga)';
          } else if (dir === 'row-reverse') {
            axisArrow.className = 'main-axis-arrow axis-row';
            axisLabel.textContent = 'Bosh o\'q (O\'ngdan ⬅ Chapga)';
          } else if (dir === 'column') {
            axisArrow.className = 'main-axis-arrow axis-column';
            axisLabel.textContent = 'Bosh o\'q (Tepadan ⬇ Pastga)';
          } else if (dir === 'column-reverse') {
            axisArrow.className = 'main-axis-arrow axis-column';
            axisLabel.textContent = 'Bosh o\'q (Pastdan ⬆ Tepaga)';
          }
        }
      });
    });
  }

  /* -------------------------------------------------------------
     SLIDE 3: JUSTIFY-CONTENT INTERACTION
  ------------------------------------------------------------- */
  initInteractiveSlide3() {
    const container = document.getElementById('s3Container');
    const codeSnippet = document.getElementById('s3CodeSnippet');

    if (!container) return;

    container.innerHTML = 
      window.SVGLibrary.getChar(1, 1) + 
      window.SVGLibrary.getChar(2, 2) + 
      window.SVGLibrary.getChar(3, 3);

    document.querySelectorAll('[data-s3-jc]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playSnap();
        document.querySelectorAll('[data-s3-jc]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const jc = btn.getAttribute('data-s3-jc');
        this.slideState.s3_justify = jc;
        container.style.justifyContent = jc;
        codeSnippet.textContent = `justify-content: ${jc};`;
      });
    });
  }

  /* -------------------------------------------------------------
     SLIDE 4: ALIGN-ITEMS INTERACTION
  ------------------------------------------------------------- */
  initInteractiveSlide4() {
    const container = document.getElementById('s4Container');
    const codeSnippet = document.getElementById('s4CodeSnippet');

    if (!container) return;

    container.innerHTML = `
      <div class="laser-guideline active" id="s4LaserBeam" style="top: 50%;"></div>
      ${window.SVGLibrary.getChar(1, 1, 'char-tall')}
      ${window.SVGLibrary.getChar(2, 2, 'char-medium')}
      ${window.SVGLibrary.getChar(3, 3, 'char-small')}
    `;

    const laserBeam = document.getElementById('s4LaserBeam');

    document.querySelectorAll('[data-s4-ai]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playSnap();
        document.querySelectorAll('[data-s4-ai]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const ai = btn.getAttribute('data-s4-ai');
        this.slideState.s4_align = ai;
        container.style.alignItems = ai;
        codeSnippet.textContent = `align-items: ${ai};`;

        if (laserBeam) {
          laserBeam.classList.add('active');
          if (ai === 'flex-start') {
            laserBeam.style.top = '30px';
          } else if (ai === 'center') {
            laserBeam.style.top = '50%';
          } else if (ai === 'flex-end') {
            laserBeam.style.top = 'calc(100% - 30px)';
          } else {
            laserBeam.classList.remove('active');
          }
        }
      });
    });
  }

  /* -------------------------------------------------------------
     SLIDE 5: GAP INTERACTION
  ------------------------------------------------------------- */
  initInteractiveSlide5() {
    const container = document.getElementById('s5Container');
    const slider = document.getElementById('s5GapSlider');
    const valDisplay = document.getElementById('s5GapVal');
    const codeSnippet = document.getElementById('s5CodeSnippet');
    const moodBadge = document.getElementById('s5MoodBadge');

    if (!container) return;

    container.innerHTML = 
      window.SVGLibrary.getChar(1, 1) + 
      window.SVGLibrary.getChar(2, 2) + 
      window.SVGLibrary.getChar(3, 3);

    const updateGap = (gapVal) => {
      this.slideState.s5_gap = gapVal;
      container.style.gap = `${gapVal}px`;
      codeSnippet.textContent = `gap: ${gapVal}px;`;
      valDisplay.textContent = `${gapVal}px`;
      slider.value = gapVal;

      if (gapVal === 0) {
        moodBadge.textContent = '😣 Juda tor! Bir-biriga yopishib qolishdi.';
        moodBadge.style.color = '#ff2a85';
      } else if (gapVal <= 20) {
        moodBadge.textContent = '😊 Qulay! Ideal do\'stona oraliq.';
        moodBadge.style.color = '#00f0ff';
      } else {
        moodBadge.textContent = '🚀 Keng va erkin fazoviy masofa!';
        moodBadge.style.color = '#00ff88';
      }
    };

    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        window.soundFX.playTick(val / 30);
        updateGap(val);
      });
    }

    document.querySelectorAll('[data-s5-preset]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playSnap();
        const pVal = parseInt(btn.getAttribute('data-s5-preset'), 10);
        updateGap(pVal);
      });
    });
  }

  /* -------------------------------------------------------------
     SLIDE 6: FLEX-WRAP INTERACTION
  ------------------------------------------------------------- */
  initInteractiveSlide6() {
    const container = document.getElementById('s6Container');
    const codeSnippet = document.getElementById('s6CodeSnippet');
    const btnAdd = document.getElementById('s6BtnAdd');
    const btnRemove = document.getElementById('s6BtnRemove');
    const countLabel = document.getElementById('s6CountLabel');

    const renderWrapItems = () => {
      let html = '';
      for (let i = 1; i <= this.slideState.s6_count; i++) {
        html += window.SVGLibrary.getChar(i, i, 'wrap-char');
      }
      container.innerHTML = html;
      countLabel.textContent = `${this.slideState.s6_count} ta Qahramon`;
    };

    document.querySelectorAll('[data-s6-wrap]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundFX.playSnap();
        document.querySelectorAll('[data-s6-wrap]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const wrapVal = btn.getAttribute('data-s6-wrap');
        this.slideState.s6_wrap = wrapVal;
        container.style.flexWrap = wrapVal;
        codeSnippet.textContent = `flex-wrap: ${wrapVal};`;
      });
    });

    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (this.slideState.s6_count < 8) {
          window.soundFX.playSnap();
          this.slideState.s6_count++;
          renderWrapItems();
        }
      });
    }

    if (btnRemove) {
      btnRemove.addEventListener('click', () => {
        if (this.slideState.s6_count > 2) {
          window.soundFX.playClick();
          this.slideState.s6_count--;
          renderWrapItems();
        }
      });
    }

    renderWrapItems();
  }

  /* -------------------------------------------------------------
     HUD BUTTONS (SOUND, FULLSCREEN) & SCORE
  ------------------------------------------------------------- */
  initHUDButtons() {
    const btnAudio = document.getElementById('btnAudioToggle');
    const btnFullscreen = document.getElementById('btnFullscreenToggle');

    if (btnAudio) {
      btnAudio.addEventListener('click', () => {
        const isMuted = window.soundFX.toggleMute();
        btnAudio.innerHTML = isMuted ? '🔇' : '🔊';
        btnAudio.setAttribute('title', isMuted ? 'Ovozni yoqish' : 'Ovozni o\'chirish');
      });
    }

    if (btnFullscreen) {
      btnFullscreen.addEventListener('click', () => {
        window.soundFX.playClick();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
          btnFullscreen.innerHTML = '🗗';
        } else {
          document.exitFullscreen().catch(() => {});
          btnFullscreen.innerHTML = '⛶';
        }
      });
    }
  }

  updateScoreHUD() {
    const starCount = document.getElementById('hudStarCount');
    if (starCount && window.challengeEngine) {
      starCount.textContent = `${window.challengeEngine.getTotalStars()}`;
    }
  }

  /* -------------------------------------------------------------
     CONFETTI PARTICLE ENGINE (HTML5 CANVAS)
  ------------------------------------------------------------- */
  initConfetti() {
    this.canvas = document.getElementById('confettiCanvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    const resize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
  }

  fireConfetti() {
    if (!this.canvas || !this.ctx) return;
    const colors = ['#00f0ff', '#ff2a85', '#ffe600', '#00ff88', '#a855f7', '#ffffff'];

    for (let i = 0; i < 90; i++) {
      this.confettiParticles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        isStar: Math.random() > 0.5
      });
    }

    if (!this.isConfettiActive) {
      this.isConfettiActive = true;
      this.animateConfetti();
    }
  }

  animateConfetti() {
    if (!this.isConfettiActive) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.alpha -= 0.012;

      if (p.alpha <= 0) {
        this.confettiParticles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;

      if (p.isStar) {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.confettiParticles.length > 0) {
      requestAnimationFrame(() => this.animateConfetti());
    } else {
      this.isConfettiActive = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new FlexboxSafariApp();
  window.app.init();
});
