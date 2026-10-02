/**
 * Koinot Bo'ylab Flexbox — Vector SVG Graphic Factory
 * Generates expressive, crisp, resolution-independent SVG characters & UI elements.
 */

const SVGLibrary = {
  // 1. Astro-Ahmad (Blue & Cyan Cadet)
  astronaut1(badge = "1", customClass = "") {
    return `
      <div class="character-card astro-1 ${customClass}" data-id="1">
        <svg viewBox="0 0 100 120" class="char-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="helmGrad1" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#00ffff" />
              <stop offset="60%" stop-color="#0088cc" />
              <stop offset="100%" stop-color="#003366" />
            </radialGradient>
            <linearGradient id="suitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#d0e8ff" />
            </linearGradient>
            <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00f0ff" />
              <stop offset="100%" stop-color="#00aaff" />
            </linearGradient>
          </defs>
          <!-- Antenna -->
          <line x1="50" y1="18" x2="50" y2="6" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" />
          <circle cx="50" cy="5" r="4.5" fill="#00ffff" class="glow-pulse" />

          <!-- Backpack -->
          <rect x="24" y="48" width="52" height="42" rx="10" fill="#004477" stroke="#00ffff" stroke-width="2" />

          <!-- Space Suit Body -->
          <rect x="28" y="52" width="44" height="42" rx="12" fill="url(#suitGrad1)" stroke="#0088cc" stroke-width="2" />
          <!-- Suit Chest Badge -->
          <circle cx="50" cy="68" r="11" fill="#001830" stroke="#00ffff" stroke-width="1.5" />
          <text x="50" y="73" font-family="'Nunito', sans-serif" font-weight="900" font-size="12" fill="#00f0ff" text-anchor="middle">${badge}</text>

          <!-- Legs -->
          <rect x="33" y="90" width="13" height="18" rx="6" fill="url(#suitGrad1)" stroke="#0088cc" stroke-width="2" />
          <rect x="54" y="90" width="13" height="18" rx="6" fill="url(#suitGrad1)" stroke="#0088cc" stroke-width="2" />
          <ellipse cx="39" cy="108" rx="9" ry="5" fill="#003366" />
          <ellipse cx="61" cy="108" rx="9" ry="5" fill="#003366" />

          <!-- Arms -->
          <path d="M28 58 Q14 70 20 82" fill="none" stroke="url(#suitGrad1)" stroke-width="10" stroke-linecap="round" />
          <circle cx="20" cy="82" r="5" fill="#004477" />
          <path d="M72 58 Q86 70 80 82" fill="none" stroke="url(#suitGrad1)" stroke-width="10" stroke-linecap="round" />
          <circle cx="80" cy="82" r="5" fill="#004477" />

          <!-- Helmet Head -->
          <circle cx="50" cy="34" r="24" fill="url(#suitGrad1)" stroke="#0088cc" stroke-width="2.5" />
          <!-- Visor -->
          <ellipse cx="50" cy="35" rx="17" ry="14" fill="url(#helmGrad1)" stroke="#ffffff" stroke-width="1.5" />
          <!-- Eyes & Visor Glow -->
          <ellipse cx="44" cy="33" rx="3.5" ry="4" fill="#ffffff" />
          <ellipse cx="56" cy="33" rx="3.5" ry="4" fill="#ffffff" />
          <ellipse cx="44.5" cy="33.5" rx="1.5" ry="1.5" fill="#002244" />
          <ellipse cx="56.5" cy="33.5" rx="1.5" ry="1.5" fill="#002244" />
          <path d="M45 42 Q50 46 55 42" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round" />
          <!-- Visor Reflection Shine -->
          <path d="M38 27 Q48 24 58 27" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </svg>
        <span class="char-label">Ahmad</span>
      </div>
    `;
  },

  // 2. Astro-Zuhra (Magenta & Purple Explorer)
  astronaut2(badge = "2", customClass = "") {
    return `
      <div class="character-card astro-2 ${customClass}" data-id="2">
        <svg viewBox="0 0 100 120" class="char-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="helmGrad2" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#ff66cc" />
              <stop offset="60%" stop-color="#cc0088" />
              <stop offset="100%" stop-color="#440033" />
            </radialGradient>
            <linearGradient id="suitGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#ffd5ea" />
            </linearGradient>
          </defs>
          <!-- Star Ears / Antenna -->
          <path d="M30 18 L34 10 L38 18 Z" fill="#ff0077" />
          <path d="M62 18 L66 10 L70 18 Z" fill="#ff0077" />

          <!-- Backpack -->
          <rect x="24" y="48" width="52" height="42" rx="10" fill="#550044" stroke="#ff00aa" stroke-width="2" />

          <!-- Space Suit Body -->
          <rect x="28" y="52" width="44" height="42" rx="12" fill="url(#suitGrad2)" stroke="#cc0088" stroke-width="2" />
          <!-- Suit Chest Badge -->
          <circle cx="50" cy="68" r="11" fill="#290022" stroke="#ff00aa" stroke-width="1.5" />
          <text x="50" y="73" font-family="'Nunito', sans-serif" font-weight="900" font-size="12" fill="#ff00aa" text-anchor="middle">${badge}</text>

          <!-- Legs -->
          <rect x="33" y="90" width="13" height="18" rx="6" fill="url(#suitGrad2)" stroke="#cc0088" stroke-width="2" />
          <rect x="54" y="90" width="13" height="18" rx="6" fill="url(#suitGrad2)" stroke="#cc0088" stroke-width="2" />
          <ellipse cx="39" cy="108" rx="9" ry="5" fill="#440033" />
          <ellipse cx="61" cy="108" rx="9" ry="5" fill="#440033" />

          <!-- Arms -->
          <path d="M28 58 Q12 70 18 82" fill="none" stroke="url(#suitGrad2)" stroke-width="10" stroke-linecap="round" />
          <circle cx="18" cy="82" r="5" fill="#550044" />
          <path d="M72 58 Q88 70 82 82" fill="none" stroke="url(#suitGrad2)" stroke-width="10" stroke-linecap="round" />
          <circle cx="82" cy="82" r="5" fill="#550044" />

          <!-- Helmet Head -->
          <circle cx="50" cy="34" r="24" fill="url(#suitGrad2)" stroke="#cc0088" stroke-width="2.5" />
          <!-- Visor -->
          <ellipse cx="50" cy="35" rx="17" ry="14" fill="url(#helmGrad2)" stroke="#ffffff" stroke-width="1.5" />
          <!-- Cheerful Happy Eyes -->
          <ellipse cx="44" cy="34" rx="3.5" ry="4.5" fill="#ffffff" />
          <ellipse cx="56" cy="34" rx="3.5" ry="4.5" fill="#ffffff" />
          <ellipse cx="44.5" cy="34" rx="1.6" ry="1.6" fill="#330022" />
          <ellipse cx="56.5" cy="34" rx="1.6" ry="1.6" fill="#330022" />
          <!-- Rosy Cheeks & Smile -->
          <circle cx="39" cy="39" r="2.5" fill="#ff00aa" opacity="0.8" />
          <circle cx="61" cy="39" r="2.5" fill="#ff00aa" opacity="0.8" />
          <path d="M46 41 Q50 46 54 41" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" />
          <path d="M38 27 Q48 24 58 27" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round" fill="none" />
        </svg>
        <span class="char-label">Zuhra</span>
      </div>
    `;
  },

  // 3. Robo-Mushuk (Emerald Cyber Cat)
  astronaut3(badge = "3", customClass = "") {
    return `
      <div class="character-card astro-3 ${customClass}" data-id="3">
        <svg viewBox="0 0 100 120" class="char-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="helmGrad3" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#00ffaa" />
              <stop offset="60%" stop-color="#00aa66" />
              <stop offset="100%" stop-color="#003322" />
            </radialGradient>
            <linearGradient id="suitGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#d4ffe8" />
            </linearGradient>
          </defs>
          <!-- Cat Ears -->
          <polygon points="30,16 38,26 24,28" fill="#00ff88" stroke="#009955" stroke-width="1.5" />
          <polygon points="70,16 62,26 76,28" fill="#00ff88" stroke="#009955" stroke-width="1.5" />
          <polygon points="32,20 37,25 28,26" fill="#ffffff" />
          <polygon points="68,20 63,25 72,26" fill="#ffffff" />

          <!-- Tail -->
          <path d="M72 82 Q90 85 88 68" fill="none" stroke="#00ff88" stroke-width="4" stroke-linecap="round" />
          <circle cx="88" cy="68" r="3" fill="#00ffff" />

          <!-- Body -->
          <rect x="28" y="52" width="44" height="42" rx="12" fill="url(#suitGrad3)" stroke="#00aa66" stroke-width="2" />
          <!-- Badge -->
          <circle cx="50" cy="68" r="11" fill="#002b1b" stroke="#00ff88" stroke-width="1.5" />
          <text x="50" y="73" font-family="'Nunito', sans-serif" font-weight="900" font-size="12" fill="#00ff88" text-anchor="middle">${badge}</text>

          <!-- Legs -->
          <rect x="33" y="90" width="13" height="18" rx="6" fill="url(#suitGrad3)" stroke="#00aa66" stroke-width="2" />
          <rect x="54" y="90" width="13" height="18" rx="6" fill="url(#suitGrad3)" stroke="#00aa66" stroke-width="2" />
          <ellipse cx="39" cy="108" rx="9" ry="5" fill="#003322" />
          <ellipse cx="61" cy="108" rx="9" ry="5" fill="#003322" />

          <!-- Arms / Paws -->
          <path d="M28 58 Q14 70 20 82" fill="none" stroke="url(#suitGrad3)" stroke-width="10" stroke-linecap="round" />
          <circle cx="20" cy="82" r="5" fill="#00aa66" />
          <path d="M72 58 Q86 70 80 82" fill="none" stroke="url(#suitGrad3)" stroke-width="10" stroke-linecap="round" />
          <circle cx="80" cy="82" r="5" fill="#00aa66" />

          <!-- Helmet Head -->
          <circle cx="50" cy="34" r="24" fill="url(#suitGrad3)" stroke="#00aa66" stroke-width="2.5" />
          <!-- Visor -->
          <ellipse cx="50" cy="35" rx="17" ry="14" fill="url(#helmGrad3)" stroke="#ffffff" stroke-width="1.5" />
          <!-- Cute Cat Face -->
          <circle cx="43" cy="33" r="3.5" fill="#ffffff" />
          <circle cx="57" cy="33" r="3.5" fill="#ffffff" />
          <circle cx="44" cy="33" r="1.5" fill="#003322" />
          <circle cx="56" cy="33" r="1.5" fill="#003322" />
          <polygon points="50,38 48,36 52,36" fill="#003322" />
          <!-- Whiskers -->
          <line x1="36" y1="38" x2="42" y2="39" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" />
          <line x1="64" y1="38" x2="58" y2="39" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" />
          <path d="M47 40 Q50 43 53 40" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </svg>
        <span class="char-label">Mushuk</span>
      </div>
    `;
  },

  // 4. Yulduzcha Bot (Solar Gold Bot)
  astronaut4(badge = "4", customClass = "") {
    return `
      <div class="character-card astro-4 ${customClass}" data-id="4">
        <svg viewBox="0 0 100 120" class="char-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="helmGrad4" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stop-color="#fff066" />
              <stop offset="60%" stop-color="#ffaa00" />
              <stop offset="100%" stop-color="#663300" />
            </radialGradient>
            <linearGradient id="suitGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#fff4d0" />
            </linearGradient>
          </defs>
          <!-- Star Halo -->
          <polygon points="50,2 54,10 63,11 56,17 58,25 50,21 42,25 44,17 37,11 46,10" fill="#ffd700" stroke="#ff8800" stroke-width="1" />

          <!-- Backpack -->
          <rect x="24" y="48" width="52" height="42" rx="10" fill="#664400" stroke="#ffaa00" stroke-width="2" />

          <!-- Body -->
          <rect x="28" y="52" width="44" height="42" rx="12" fill="url(#suitGrad4)" stroke="#ffaa00" stroke-width="2" />
          <!-- Badge -->
          <circle cx="50" cy="68" r="11" fill="#332200" stroke="#ffd700" stroke-width="1.5" />
          <text x="50" y="73" font-family="'Nunito', sans-serif" font-weight="900" font-size="12" fill="#ffd700" text-anchor="middle">${badge}</text>

          <!-- Legs -->
          <rect x="33" y="90" width="13" height="18" rx="6" fill="url(#suitGrad4)" stroke="#ffaa00" stroke-width="2" />
          <rect x="54" y="90" width="13" height="18" rx="6" fill="url(#suitGrad4)" stroke="#ffaa00" stroke-width="2" />
          <ellipse cx="39" cy="108" rx="9" ry="5" fill="#663300" />
          <ellipse cx="61" cy="108" rx="9" ry="5" fill="#663300" />

          <!-- Arms -->
          <path d="M28 58 Q14 70 20 82" fill="none" stroke="url(#suitGrad4)" stroke-width="10" stroke-linecap="round" />
          <circle cx="20" cy="82" r="5" fill="#ffaa00" />
          <path d="M72 58 Q86 70 80 82" fill="none" stroke="url(#suitGrad4)" stroke-width="10" stroke-linecap="round" />
          <circle cx="80" cy="82" r="5" fill="#ffaa00" />

          <!-- Helmet Head -->
          <circle cx="50" cy="34" r="24" fill="url(#suitGrad4)" stroke="#ffaa00" stroke-width="2.5" />
          <!-- Visor -->
          <ellipse cx="50" cy="35" rx="17" ry="14" fill="url(#helmGrad4)" stroke="#ffffff" stroke-width="1.5" />
          <!-- Cheerful Star Eyes -->
          <ellipse cx="44" cy="33" rx="3.5" ry="4" fill="#331800" />
          <ellipse cx="56" cy="33" rx="3.5" ry="4" fill="#331800" />
          <circle cx="45" cy="32" r="1.5" fill="#ffffff" />
          <circle cx="57" cy="32" r="1.5" fill="#ffffff" />
          <path d="M45 40 Q50 45 55 40" stroke="#ffffff" stroke-width="2" fill="none" stroke-linecap="round" />
        </svg>
        <span class="char-label">Yulduz</span>
      </div>
    `;
  },

  // 5. Cyber-Ayiqcha (Teddy Explorer)
  astronaut5(badge = "5", customClass = "") {
    return `
      <div class="character-card astro-5 ${customClass}" data-id="5">
        <svg viewBox="0 0 100 120" class="char-svg" xmlns="http://www.w3.org/2000/svg">
          <!-- Bear Round Ears -->
          <circle cx="30" cy="18" r="9" fill="#ff7733" stroke="#cc4400" stroke-width="2" />
          <circle cx="30" cy="18" r="4" fill="#ffe0cc" />
          <circle cx="70" cy="18" r="9" fill="#ff7733" stroke="#cc4400" stroke-width="2" />
          <circle cx="70" cy="18" r="4" fill="#ffe0cc" />

          <rect x="28" y="52" width="44" height="42" rx="12" fill="#fff2eb" stroke="#ff7733" stroke-width="2" />
          <circle cx="50" cy="68" r="11" fill="#3a1600" stroke="#ff7733" stroke-width="1.5" />
          <text x="50" y="73" font-family="'Nunito', sans-serif" font-weight="900" font-size="12" fill="#ff9955" text-anchor="middle">${badge}</text>

          <rect x="33" y="90" width="13" height="18" rx="6" fill="#fff2eb" stroke="#ff7733" stroke-width="2" />
          <rect x="54" y="90" width="13" height="18" rx="6" fill="#fff2eb" stroke="#ff7733" stroke-width="2" />
          <ellipse cx="39" cy="108" rx="9" ry="5" fill="#662200" />
          <ellipse cx="61" cy="108" rx="9" ry="5" fill="#662200" />

          <!-- Arms -->
          <path d="M28 58 Q14 70 20 82" fill="none" stroke="#fff2eb" stroke-width="10" stroke-linecap="round" />
          <circle cx="20" cy="82" r="5" fill="#ff7733" />
          <path d="M72 58 Q86 70 80 82" fill="none" stroke="#fff2eb" stroke-width="10" stroke-linecap="round" />
          <circle cx="80" cy="82" r="5" fill="#ff7733" />

          <circle cx="50" cy="34" r="24" fill="#fff2eb" stroke="#ff7733" stroke-width="2.5" />
          <ellipse cx="50" cy="35" rx="17" ry="14" fill="#ff9955" stroke="#ffffff" stroke-width="1.5" />
          <circle cx="44" cy="33" r="3.5" fill="#331100" />
          <circle cx="56" cy="33" r="3.5" fill="#331100" />
          <ellipse cx="50" cy="38" rx="3" ry="2" fill="#331100" />
          <path d="M47 41 Q50 43 53 41" stroke="#331100" stroke-width="1.5" fill="none" />
        </svg>
        <span class="char-label">Ayiqcha</span>
      </div>
    `;
  },

  // 6. Robo-Likopcha (UFO Bot)
  astronaut6(badge = "6", customClass = "") {
    return `
      <div class="character-card astro-6 ${customClass}" data-id="6">
        <svg viewBox="0 0 100 120" class="char-svg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="70" rx="35" ry="14" fill="#8844ff" stroke="#aa77ff" stroke-width="2" />
          <circle cx="25" cy="70" r="3" fill="#00ffff" />
          <circle cx="50" cy="74" r="3" fill="#ffff00" />
          <circle cx="75" cy="70" r="3" fill="#ff0088" />

          <!-- Dome Head -->
          <ellipse cx="50" cy="48" rx="22" ry="20" fill="rgba(150, 220, 255, 0.85)" stroke="#00ffff" stroke-width="2" />
          <circle cx="43" cy="46" r="4" fill="#110033" />
          <circle cx="57" cy="46" r="4" fill="#110033" />
          <circle cx="44" cy="45" r="1.5" fill="#ffffff" />
          <circle cx="58" cy="45" r="1.5" fill="#ffffff" />
          <path d="M46 53 Q50 57 54 53" stroke="#110033" stroke-width="2" fill="none" />

          <!-- Jet Flames / Stand -->
          <polygon points="40,84 50,105 60,84" fill="#ff3366" opacity="0.9" />
          <polygon points="44,84 50,98 56,84" fill="#ffea00" />
        </svg>
        <span class="char-label">Likopcha</span>
      </div>
    `;
  },

  // Helper to render character by index
  getChar(index, badge = null, customClass = "") {
    const b = badge !== null ? badge : `${index}`;
    const chars = [
      this.astronaut1,
      this.astronaut2,
      this.astronaut3,
      this.astronaut4,
      this.astronaut5,
      this.astronaut6
    ];
    const fn = chars[(index - 1) % chars.length];
    return fn.call(this, b, customClass);
  },

  // Robo-Ustoz Mascot SVG
  roboUstoz(expression = "happy") {
    return `
      <svg viewBox="0 0 100 100" class="robo-mascot-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="roboGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f0ff" />
            <stop offset="100%" stop-color="#7000ff" />
          </linearGradient>
        </defs>
        <!-- Antenna -->
        <line x1="50" y1="20" x2="50" y2="8" stroke="#00f0ff" stroke-width="3" stroke-linecap="round" />
        <circle cx="50" cy="6" r="5" fill="#ffe600" class="glow-pulse" />

        <!-- Robot Body/Head -->
        <rect x="20" y="20" width="60" height="56" rx="16" fill="url(#roboGrad)" stroke="#ffffff" stroke-width="2" />
        
        <!-- Screen Face -->
        <rect x="28" y="28" width="44" height="40" rx="10" fill="#080c1e" stroke="#00ffff" stroke-width="1.5" />

        <!-- Eyes -->
        <ellipse cx="40" cy="45" rx="5" ry="6" fill="#00f0ff" />
        <ellipse cx="60" cy="45" rx="5" ry="6" fill="#00f0ff" />
        <circle cx="42" cy="43" r="2" fill="#ffffff" />
        <circle cx="62" cy="43" r="2" fill="#ffffff" />

        <!-- Smile / Expression -->
        ${expression === "happy" 
          ? `<path d="M43 56 Q50 62 57 56" stroke="#00ff88" stroke-width="2.5" fill="none" stroke-linecap="round" />`
          : expression === "thinking"
          ? `<line x1="43" y1="58" x2="57" y2="58" stroke="#ffe600" stroke-width="2.5" stroke-linecap="round" />`
          : `<path d="M43 59 Q50 54 57 59" stroke="#ff2a85" stroke-width="2.5" fill="none" stroke-linecap="round" />`
        }

        <!-- Cheeks -->
        <circle cx="33" cy="54" r="3" fill="#ff2a85" opacity="0.7" />
        <circle cx="67" cy="54" r="3" fill="#ff2a85" opacity="0.7" />

        <!-- Floating Thrusters -->
        <ellipse cx="38" cy="80" rx="6" ry="3" fill="#00f0ff" opacity="0.8" />
        <ellipse cx="62" cy="80" rx="6" ry="3" fill="#00f0ff" opacity="0.8" />
      </svg>
    `;
  },

  // Star Icon
  starIcon() {
    return `<svg class="icon-star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
  },

  // Compass Icon
  compassIcon() {
    return `
      <svg class="icon-compass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#00f0ff"></polygon>
      </svg>
    `;
  }
};

window.SVGLibrary = SVGLibrary;
