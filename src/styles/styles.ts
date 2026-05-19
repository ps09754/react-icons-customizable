const cssStyles = `
/* Core Antigravity Icon Styles */
.ag-icon {
  display: inline-block;
  vertical-align: middle;
  transform-origin: center;
  transition: transform var(--ag-duration, 0.3s) ease-in-out,
              color var(--ag-duration, 0.3s) ease-in-out,
              filter var(--ag-duration, 0.3s) ease-in-out,
              stroke var(--ag-duration, 0.3s) ease-in-out,
              fill var(--ag-duration, 0.3s) ease-in-out;
}

/* ==========================================================================
   1. Scale Animation
   ========================================================================== */
.ag-icon-scale-hover {
  transition: transform var(--ag-duration, 0.3s) cubic-bezier(0.34, 1.56, 0.64, 1);
}
.ag-icon-scale-hover:hover {
  transform: scale(1.25);
}
.ag-icon-scale-infinite {
  animation: ag-keyframes-scale-pulse var(--ag-duration, 1.5s) infinite ease-in-out;
}
@keyframes ag-keyframes-scale-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* ==========================================================================
   2. Rotate Animation
   ========================================================================== */
.ag-icon-rotate-hover {
  transition: transform var(--ag-duration, 0.3s) cubic-bezier(0.34, 1.56, 0.64, 1);
}
.ag-icon-rotate-hover:hover {
  transform: rotate(45deg);
}
.ag-icon-rotate-infinite {
  animation: ag-keyframes-rotate var(--ag-duration, 2s) infinite linear;
}
@keyframes ag-keyframes-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ==========================================================================
   3. Color Shift Animation
   ========================================================================== */
.ag-icon-color-shift-hover {
  transition: color var(--ag-duration, 0.3s) ease-in-out;
}
.ag-icon-color-shift-hover:hover {
  color: var(--ag-hover-color, currentColor) !important;
}
.ag-icon-color-shift-infinite {
  animation: ag-keyframes-color-pulse var(--ag-duration, 2s) infinite ease-in-out;
}
@keyframes ag-keyframes-color-pulse {
  0% {
    color: currentColor;
  }
  50% {
    color: var(--ag-hover-color, currentColor);
  }
  100% {
    color: currentColor;
  }
}

/* ==========================================================================
   4. Glow Animation
   ========================================================================== */
.ag-icon-glow-hover {
  transition: filter var(--ag-duration, 0.3s) ease-in-out,
              color var(--ag-duration, 0.3s) ease-in-out;
}
.ag-icon-glow-hover:hover {
  color: var(--ag-hover-color, currentColor) !important;
  filter: drop-shadow(0 0 8px var(--ag-hover-color, var(--ag-glow-color, currentColor)));
}
.ag-icon-glow-infinite {
  animation: ag-keyframes-glow-pulse var(--ag-duration, 2s) infinite ease-in-out;
}
@keyframes ag-keyframes-glow-pulse {
  0% {
    color: currentColor;
    filter: drop-shadow(0 0 2px var(--ag-hover-color, var(--ag-glow-color, currentColor)));
  }
  50% {
    color: var(--ag-hover-color, var(--ag-glow-color, currentColor));
    filter: drop-shadow(0 0 10px var(--ag-hover-color, var(--ag-glow-color, currentColor)));
  }
  100% {
    color: currentColor;
    filter: drop-shadow(0 0 2px var(--ag-hover-color, var(--ag-glow-color, currentColor)));
  }
}

/* ==========================================================================
   5. Loading/Spinning Animation
   ========================================================================== */
.ag-icon-loading {
  animation: ag-keyframes-rotate var(--ag-duration, 1s) infinite linear;
}
`;

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
let isStylesInjected = false;

export const injectStyles = (): void => {
  if (!isBrowser || isStylesInjected) return;

  const styleId = 'antigravity-icons-styles';
  if (document.getElementById(styleId)) {
    isStylesInjected = true;
    return;
  }

  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = cssStyles;
  document.head.appendChild(styleElement);
  isStylesInjected = true;
};
