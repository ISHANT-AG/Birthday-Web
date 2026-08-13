/**
 * Mumma's Birthday Celebration - Interactive Experience Script
 * Created with Love from Swasti
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initScrollAnimations();
  initGiftButton();
  initGalleryLightbox();
  initWishesBouquet();
  initInteractiveCake();
  initAudioSystem();
});

/* ==========================================================================
   1. AMBIENT FLOATING CANVAS BACKGROUND (Balloons, Petals, Sparkles, Hearts)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const emojis = ['🎈', '🌸', '✨', '💖', '🎂', '🎉', '🎀', '⭐'];
  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 35), 32);

  class FloatingParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 30;
      this.size = Math.random() * 16 + 14; // emoji size 14px to 30px
      this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
      this.speedY = -(Math.random() * 0.8 + 0.35);
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.opacity = Math.random() * 0.55 + 0.35;
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = Math.random() * 0.03 + 0.01;
    }

    update() {
      this.y += this.speedY;
      this.wobble += this.wobbleSpeed;
      this.x += this.speedX + Math.sin(this.wobble) * 0.4;
      this.rotation += this.rotationSpeed;

      if (this.y < -40 || this.x < -40 || this.x > width + 40) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.font = `${this.size}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.emoji, 0, 0);
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new FloatingParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollAnimations() {
  const revealItems = document.querySelectorAll('.reveal-item, .reveal-text');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealItems.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   3. CONFETTI CANNON ENGINE (Zero dependencies, Custom celebratory bursts)
   ========================================================================== */
const ConfettiEngine = {
  createBurst(x, y, count = 55) {
    const colors = ['#FF6B8B', '#FFB7C5', '#D4AF37', '#FFDF9E', '#800E28', '#FF4D6D', '#FFF'];
    const shapes = ['square', 'circle', 'heart'];

    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 6;

      piece.className = 'confetti-burst-particle';
      piece.style.position = 'fixed';
      piece.style.left = `${x}px`;
      piece.style.top = `${y}px`;
      piece.style.width = `${size}px`;
      piece.style.height = `${size}px`;
      piece.style.backgroundColor = shape !== 'heart' ? color : 'transparent';
      piece.style.zIndex = '9999';
      piece.style.pointerEvents = 'none';

      if (shape === 'circle') {
        piece.style.borderRadius = '50%';
      } else if (shape === 'heart') {
        piece.innerHTML = '💖';
        piece.style.fontSize = `${size + 4}px`;
      }

      document.body.appendChild(piece);

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 180 + 90;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity - 120;
      const rotation = Math.random() * 720 - 360;

      const animation = piece.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
          { transform: `translate(${vx}px, ${vy + 260}px) rotate(${rotation}deg) scale(0.4)`, opacity: 0 }
        ],
        {
          duration: Math.random() * 900 + 800,
          easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        }
      );

      animation.onfinish = () => piece.remove();
    }
  },

  fireGrandCelebration() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    this.createBurst(width * 0.5, height * 0.45, 80);
    setTimeout(() => this.createBurst(width * 0.25, height * 0.5, 60), 180);
    setTimeout(() => this.createBurst(width * 0.75, height * 0.5, 60), 360);
    setTimeout(() => this.createBurst(width * 0.5, height * 0.35, 70), 550);
  }
};

/* ==========================================================================
   4. HERO "OPEN GIFT" BUTTON
   ========================================================================== */
function initGiftButton() {
  const giftBtn = document.getElementById('open-gift-btn');
  const letterSection = document.getElementById('letter-section');
  if (!giftBtn || !letterSection) return;

  giftBtn.addEventListener('click', (e) => {
    const rect = giftBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Confetti Explosion
    ConfettiEngine.createBurst(x, y, 90);
    ConfettiEngine.fireGrandCelebration();

    // Sound chime
    SoundSynth.playCelebrationChime();

    // Gift Button Feedback
    giftBtn.style.transform = 'scale(1.15)';
    setTimeout(() => {
      giftBtn.style.transform = '';
      letterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 450);
  });
}

/* ==========================================================================
   5. PHOTO GALLERY LIGHTBOX
   ========================================================================== */
function initGalleryLightbox() {
  const photoCards = document.querySelectorAll('.photo-card');
  const modal = document.getElementById('lightbox-modal');
  const backdrop = document.getElementById('lightbox-backdrop');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const modalCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!modal) return;

  const galleryData = [
    { src: 'assets/mom-photo-1.jpg', caption: 'The smile that raised me 😊' },
    { src: 'assets/mom-photo-2.jpg', caption: 'My first best friend 💗' },
    { src: 'assets/mom-photo-3.jpg', caption: 'The reason for everything good in my life ✨' },
    { src: 'assets/mom-photo-4.jpg', caption: 'My home, wherever we are 🏡' },
    { src: 'assets/mom-photo-5.jpg', caption: 'The strongest person I know 💪' },
    { src: 'assets/mom-photo-6.jpg', caption: 'Forever my Mumma 🌸' }
  ];

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = (index + galleryData.length) % galleryData.length;
    updateLightboxContent();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    SoundSynth.playTapChime();
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = galleryData[currentIndex];
    modalImg.src = item.src;
    modalImg.alt = item.caption;
    modalCaption.textContent = `"${item.caption}"`;
    modalCounter.textContent = `${currentIndex + 1} / ${galleryData.length}`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateLightboxContent();
    SoundSynth.playTapChime();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
    SoundSynth.playTapChime();
  }

  // Card click listeners
  photoCards.forEach((card, i) => {
    card.addEventListener('click', () => openLightbox(i));
  });

  // Controls
  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Touch Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 45) {
      showNext(); // swipe left -> next
    } else if (touchEndX > touchStartX + 45) {
      showPrev(); // swipe right -> prev
    }
  }, { passive: true });
}

/* ==========================================================================
   6. WISHES BOUQUET INTERACTION (Tap to Bloom)
   ========================================================================== */
function initWishesBouquet() {
  const wishCards = document.querySelectorAll('.wish-card');

  wishCards.forEach((card) => {
    const handleBloom = (e) => {
      card.classList.add('bloomed');
      const rect = card.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      ConfettiEngine.createBurst(x, y, 35);
      SoundSynth.playHappyNote();

      const tapHint = card.querySelector('.wish-tap-hint');
      if (tapHint) {
        tapHint.textContent = 'Bloomed with Love! 💖';
      }
    };

    card.addEventListener('click', handleBloom);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleBloom();
      }
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE CAKE MINI-GAME (Blow out candles)
   ========================================================================== */
function initInteractiveCake() {
  const cake = document.getElementById('interactive-cake');
  const blowBtn = document.getElementById('blow-candles-btn');
  const flames = document.querySelectorAll('.flame');
  const candles = document.querySelectorAll('.candle');
  const statusMsg = document.getElementById('cake-status-msg');
  const revealCard = document.getElementById('cake-reveal-card');
  const relightBtn = document.getElementById('relight-btn');

  let areCandlesBlown = false;

  function blowOutCandles() {
    if (areCandlesBlown) return;
    areCandlesBlown = true;

    // Extinguish each flame
    flames.forEach((flame, index) => {
      setTimeout(() => {
        flame.classList.add('extinguished');
        candles[index].classList.add('blown');
      }, index * 160);
    });

    statusMsg.innerHTML = '🎉 Woohoo! Happy Birthday Mumma! 🎉';
    blowBtn.style.display = 'none';

    // Sound & Confetti
    SoundSynth.playBirthdayFanfare();
    setTimeout(() => {
      ConfettiEngine.fireGrandCelebration();
      revealCard.classList.remove('hidden');
      revealCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 550);
  }

  function relightCandles() {
    areCandlesBlown = false;
    flames.forEach((flame) => flame.classList.remove('extinguished'));
    candles.forEach((candle) => candle.classList.remove('blown'));
    statusMsg.innerHTML = '✨ Tap the candles or the button above to blow them out! ✨';
    blowBtn.style.display = 'inline-flex';
    revealCard.classList.add('hidden');
    SoundSynth.playTapChime();
  }

  if (cake) cake.addEventListener('click', blowOutCandles);
  if (blowBtn) blowBtn.addEventListener('click', blowOutCandles);
  if (relightBtn) relightBtn.addEventListener('click', relightCandles);
}

/* ==========================================================================
   8. WEB AUDIO SYNTHESIZER (Acoustic Birthday Melody & Interactive Chimes)
   ========================================================================== */
const SoundSynth = {
  ctx: null,
  isPlaying: false,
  melodyTimeout: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },

  playNote(freq, type = 'sine', duration = 0.4, startTime = 0, gainLevel = 0.15) {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

    gain.gain.setValueAtTime(0.001, this.ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(gainLevel, this.ctx.currentTime + startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + startTime);
    osc.stop(this.ctx.currentTime + startTime + duration);
  },

  playTapChime() {
    this.playNote(523.25, 'sine', 0.2, 0, 0.08); // C5
    this.playNote(659.25, 'sine', 0.25, 0.05, 0.06); // E5
  },

  playHappyNote() {
    this.playNote(440, 'triangle', 0.3, 0, 0.1); // A4
    this.playNote(554.37, 'sine', 0.35, 0.08, 0.1); // C#5
    this.playNote(659.25, 'sine', 0.45, 0.16, 0.12); // E5
  },

  playCelebrationChime() {
    const notes = [392, 523.25, 659.25, 783.99, 1046.5]; // G4, C5, E5, G5, C6
    notes.forEach((freq, i) => {
      this.playNote(freq, 'sine', 0.5, i * 0.08, 0.12);
    });
  },

  playBirthdayFanfare() {
    // Happy Birthday opening motif
    const fanfare = [
      { f: 523.25, d: 0.3, t: 0 },    // C5
      { f: 523.25, d: 0.3, t: 0.25 }, // C5
      { f: 587.33, d: 0.5, t: 0.5 },  // D5
      { f: 523.25, d: 0.5, t: 0.9 },  // C5
      { f: 698.46, d: 0.6, t: 1.3 },  // F5
      { f: 659.25, d: 0.9, t: 1.8 }   // E5
    ];

    fanfare.forEach((n) => {
      this.playNote(n.f, 'triangle', n.d, n.t, 0.15);
      this.playNote(n.f / 2, 'sine', n.d, n.t, 0.08); // warm lower harmony
    });
  },

  // Soft Music Box Melody Loop
  playMusicBoxLoop() {
    if (!this.isPlaying) return;

    // Full Happy Birthday Melody in soft music box tones (C Major)
    const melody = [
      // Happy birthday to you
      { f: 261.63, d: 0.35, t: 0 },
      { f: 261.63, d: 0.35, t: 0.4 },
      { f: 293.66, d: 0.6, t: 0.8 },
      { f: 261.63, d: 0.6, t: 1.4 },
      { f: 349.23, d: 0.6, t: 2.0 },
      { f: 329.63, d: 1.0, t: 2.6 },

      // Happy birthday to you
      { f: 261.63, d: 0.35, t: 3.8 },
      { f: 261.63, d: 0.35, t: 4.2 },
      { f: 293.66, d: 0.6, t: 4.6 },
      { f: 261.63, d: 0.6, t: 5.2 },
      { f: 392.00, d: 0.6, t: 5.8 },
      { f: 349.23, d: 1.0, t: 6.4 },

      // Happy birthday dear Mumma
      { f: 261.63, d: 0.35, t: 7.6 },
      { f: 261.63, d: 0.35, t: 8.0 },
      { f: 523.25, d: 0.7, t: 8.4 },
      { f: 440.00, d: 0.7, t: 9.1 },
      { f: 349.23, d: 0.7, t: 9.8 },
      { f: 329.63, d: 0.7, t: 10.5 },
      { f: 293.66, d: 0.9, t: 11.2 },

      // Happy birthday to you
      { f: 466.16, d: 0.35, t: 12.4 },
      { f: 466.16, d: 0.35, t: 12.8 },
      { f: 440.00, d: 0.7, t: 13.2 },
      { f: 349.23, d: 0.7, t: 13.9 },
      { f: 392.00, d: 0.7, t: 14.6 },
      { f: 349.23, d: 1.2, t: 15.3 }
    ];

    melody.forEach((note) => {
      if (this.isPlaying) {
        // High music box bell
        this.playNote(note.f * 2, 'sine', note.d * 1.5, note.t, 0.08);
        // Soft acoustic tone
        this.playNote(note.f, 'triangle', note.d, note.t, 0.07);
      }
    });

    // Loop after 17 seconds
    this.melodyTimeout = setTimeout(() => {
      if (this.isPlaying) {
        this.playMusicBoxLoop();
      }
    }, 17500);
  },

  startMelody() {
    this.init();
    this.isPlaying = true;
    this.playMusicBoxLoop();
  },

  stopMelody() {
    this.isPlaying = false;
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
  }
};

/* ==========================================================================
   9. AUDIO TOGGLE BUTTON CONTROL
   ========================================================================= */
function initAudioSystem() {
  const musicBtn = document.getElementById('music-toggle-btn');
  const musicIcon = document.getElementById('music-icon');
  if (!musicBtn) return;

  musicBtn.addEventListener('click', () => {
    if (!SoundSynth.isPlaying) {
      SoundSynth.startMelody();
      musicBtn.classList.add('playing');
      musicIcon.textContent = '🔊';
    } else {
      SoundSynth.stopMelody();
      musicBtn.classList.remove('playing');
      musicIcon.textContent = '🎵';
    }
  });
}
