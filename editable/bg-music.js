/**
 * bg-music.js — Background music controller for wedding invitation
 * Plays background audio on user interaction (such as tapping the wax seal or skip button)
 * and provides a floating gold glassmorphism toggle button.
 */

(function () {
  function initMusic() {
    const musicConfig = (window.WEDDING_DATA && window.WEDDING_DATA.music) || {};
    const musicSrc = musicConfig.src || './editable/assets/bg-music.mp3';
    if (!musicSrc) return;

    const audio = new Audio();
    audio.src = musicSrc;
    audio.loop = musicConfig.loop !== false;
    audio.preload = 'auto';

    let isPlaying = false;
    let userHasInteracted = false;
    let manuallyPaused = false;

    // Create floating control button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'bg-music-toggle';
    btn.setAttribute('aria-label', 'Toggle background music');
    btn.title = 'Music';
    btn.innerHTML = `
      <span class="music-disc-wrapper">
        <svg class="music-icon-playing" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
        <svg class="music-icon-muted" style="display:none;" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
          <line x1="2" y1="2" x2="22" y2="22"></line>
        </svg>
      </span>
    `;

    // Button style
    btn.style.cssText = `
      position: fixed;
      top: 18px;
      right: 18px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: color-mix(in oklab, var(--ivory, #fdf8ef) 85%, transparent);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid color-mix(in oklab, var(--gold, #d4af37) 50%, transparent);
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08), 0 0 12px color-mix(in oklab, var(--gold, #d4af37) 30%, transparent);
      color: var(--primary, #6b4e3d);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 95;
      transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      opacity: 0;
      transform: scale(0.85);
      pointer-events: none;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes music-rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      #bg-music-toggle.is-active .music-disc-wrapper {
        display: inline-flex;
        animation: music-rotate 5s linear infinite;
      }
      #bg-music-toggle:hover {
        transform: scale(1.1) !important;
        border-color: var(--gold-deep, #9c6c24);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.12), 0 0 18px color-mix(in oklab, var(--gold, #d4af37) 55%, transparent) !important;
      }
      #bg-music-toggle:active {
        transform: scale(0.95) !important;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);

    function showButton() {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
      btn.style.transform = 'scale(1)';
    }

    function setPlayingState(playing) {
      isPlaying = playing;
      const playingIcon = btn.querySelector('.music-icon-playing');
      const mutedIcon = btn.querySelector('.music-icon-muted');
      if (playing) {
        btn.classList.add('is-active');
        if (playingIcon) playingIcon.style.display = 'block';
        if (mutedIcon) mutedIcon.style.display = 'none';
        btn.style.color = 'var(--gold-deep, #9c6c24)';
      } else {
        btn.classList.remove('is-active');
        if (playingIcon) playingIcon.style.display = 'none';
        if (mutedIcon) mutedIcon.style.display = 'block';
        btn.style.color = 'var(--muted-foreground, #8c7f76)';
      }
    }

    function playMusic() {
      audio.play().then(() => {
        setPlayingState(true);
        showButton();
      }).catch(() => {
        setPlayingState(false);
      });
    }

    function pauseMusic() {
      audio.pause();
      setPlayingState(false);
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      userHasInteracted = true;
      if (isPlaying) {
        manuallyPaused = true;
        pauseMusic();
      } else {
        manuallyPaused = false;
        playMusic();
      }
    });

    function triggerOnInteraction() {
      if (manuallyPaused) return;
      if (!userHasInteracted) {
        userHasInteracted = true;
        showButton();
        playMusic();
      }
    }

    // Bind to interaction events
    window.addEventListener('click', triggerOnInteraction, { passive: true });
    window.addEventListener('touchstart', triggerOnInteraction, { passive: true });
    window.addEventListener('keydown', triggerOnInteraction, { passive: true });

    // Try initial playback if browser allows
    playMusic();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
  } else {
    initMusic();
  }
})();
