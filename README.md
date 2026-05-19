# 🚀 React Icons Customizable

A high-performance, premium, and fully customizable React icon library with built-in, hardware-accelerated animations.

🌐 **[Tiếng Việt](./README.vi.md)** | 🎨 **[LIVE INTERACTIVE SANDBOX DEMO](https://ps09754.github.io/react-icons-customizable/)**

---

This library features **over 230+ handcrafted, modern SVG icons** built with fully native animations, robust **TypeScript declarations**, **Tree-shaking support** (only bundle the icons you actually use), and is entirely safe for **Server-Side Rendering (SSR)** systems like Next.js.

---

## 📖 Table of Contents
- [🚀 React Icons Customizable](#-react-icons-customizable)
  - [📖 Table of Contents](#-table-of-contents)
  - [📦 Installation](#-installation)
    - [Method A: Install directly from GitHub (Fastest, no NPM account required)](#method-a-install-directly-from-github-fastest-no-npm-account-required)
    - [Method B: Publishing to NPM Registry (Most Professional)](#method-b-publishing-to-npm-registry-most-professional)
  - [🛠️ Usage](#️-usage)
    - [1. Static Icon usage](#1-static-icon-usage)
    - [2. Tactile Elastic Bouncy Scale on Hover](#2-tactile-elastic-bouncy-scale-on-hover)
    - [3. Infinite Neon Glow Aura](#3-infinite-neon-glow-aura)
    - [4. Interactive Color Shift on Hover](#4-interactive-color-shift-on-hover)
    - [5. Loading Spinner with custom spin rate](#5-loading-spinner-with-custom-spin-rate)
  - [⚙️ Props API Reference](#️-props-api-reference)
  - [🌀 Animation Engine Specification](#-animation-engine-specification)
  - [🛠️ Developer Guide: Add New Icons in under 60 seconds](#️-developer-guide-add-new-icons-in-under-60-seconds)
  - [📄 License](#-license)

---

## 📦 Installation

You can install this library in your projects using one of the two methods below:

### Method A: Install directly from GitHub (Fastest, no NPM account required)

Since we have configured an automatic `"prepare": "npm run build"` compilation trigger in our package, developers can install this library directly from your GitHub repository with a single command. 

Npm will clone, install dependencies, compile the source files to standard `dist/` folders and clean up automatically.

**Using NPM:**
```bash
npm install ps09754/react-icons-customizable
```

**Using Yarn:**
```bash
yarn add ps09754/react-icons-customizable
```

**Using PNPM:**
```bash
pnpm add ps09754/react-icons-customizable
```

---

### Method B: Publishing to NPM Registry (Most Professional)

To make it installable via standard npm package name shorthand `npm install react-icons-customizable`, publish it to the global public NPM Registry:

1. **Register/Login:** Create a free account at [npmjs.com](https://www.npmjs.com) and log in via your terminal:
   ```bash
   npm login
   ```
2. **Build and Validate:** Ensure the typescript compiler and Rollup build run cleanly:
   ```bash
   npm run build
   ```
3. **Publish:** Push your package live:
   ```bash
   npm publish --access public
   ```

*Once successfully published, anyone can install it via:*
```bash
npm install react-icons-customizable
```

---

## 🛠️ Usage

Here are some quick integration examples displaying the interactive custom attributes (compatible with both JavaScript and TypeScript):

```tsx
import React from 'react';
import { HomeIcon, LoadingSpinnerIcon, Heart, Search } from 'react-icons-customizable';

export const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px', background: '#0f172a', borderRadius: '12px', color: '#fff' }}>
      
      {/* 1. Standard Static Icon */}
      <HomeIcon size={32} color="#6366f1" />

      {/* 2. Tactile Elastic Bouncy Scale on Hover */}
      <HomeIcon 
        size={32} 
        color="#a5b4fc" 
        animation="scale" 
        hoverEffect={true} 
        style={{ cursor: 'pointer' }}
      />

      {/* 3. Infinite Glow Pulse (Gaming Neon Style) */}
      <Heart 
        size={32} 
        color="#f43f5e" 
        hoverColor="#fb7185" 
        animation="glow" 
        animationDuration={1.8}
      />

      {/* 4. Interactive Color Shift on Hover */}
      <Search 
        size={32} 
        color="#f43f5e" 
        hoverColor="#10b981" 
        animation="color-shift" 
        hoverEffect={true}
        style={{ cursor: 'pointer' }}
      />

      {/* 5. Custom Loading Spinner Spin Speed */}
      <LoadingSpinnerIcon size={32} color="#10b981" animationDuration={0.8} />

    </div>
  );
};
```

---

## ⚙️ Props API Reference

Every icon component in the library extends `React.SVGProps<SVGSVGElement>`, granting native support for **Tailwind CSS**, standard inline styles, classes, and generic SVG mouse/keyboard events.

### Extended Customizable Attributes:

| Prop Name | TypeScript Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| **`size`** | `string \| number` | `24` | Width and height of the icon container (maps dynamically to both). |
| **`color`** | `string` | `'currentColor'` | Main color applied to the SVG path stroke or fill. |
| **`hoverColor`** | `string` | *Optional* | Secondary color applied dynamically on hover/pulse animations (e.g. for `glow` or `color-shift`). |
| **`animation`** | `'scale' \| 'rotate' \| 'color-shift' \| 'glow' \| 'loading' \| 'none'` | `'none'` | The keyframe CSS animation preset applied to the vector. |
| **`animationDuration`** | `number` | `0.3` | Animation duration cycle in seconds (e.g. `0.8s`). |
| **`hoverEffect`** | `boolean` | `false` | If `true`, the animation is only triggered on mouse hover. If `false`, the animation is infinite. |

---

## 🌀 Animation Engine Specification

All animations are hardware-accelerated using optimized CSS Custom Properties and filters for flawless 144Hz+ display rates:

* **`scale`**:
  - *On Hover (`hoverEffect: true`):* Scales to `1.25x` using an elastic bouncy easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for premium feedback.
  - *Infinite (`hoverEffect: false`):* Soft breathing pulse scale (from `1.0x` to `1.2x`) to draw attention.
* **`rotate`**:
  - *On Hover:* Smoothly tilts by `45deg`, ideal for menu triggers and buttons.
  - *Infinite:* Continuous, linear 360-degree rotation.
* **`color-shift`**:
  - Transitions gracefully from `color` to `hoverColor` (either on hover or continuously).
* **`glow`**:
  - Injects a beautiful neon drop shadow drop glow aura (`drop-shadow(0 0 8px var(--ag-hover-color))`) around the precise SVG paths.
* **`loading`**:
  - Forces infinite 360deg rotation regardless of the `hoverEffect` value for loader feedback.

---

## 🛠️ Developer Guide: Add New Icons in under 60 seconds

Expanding the package with custom icons is extremely fast:

1. **Create the Component:** Save your SVG paths under a new file `src/components/[IconName].tsx` using this template:
   ```tsx
   import React from 'react';
   import { IconBase, IconBaseProps } from './IconBase';

   export const SearchIcon = React.forwardRef<SVGSVGElement, IconBaseProps>(
     (props, ref) => {
       return (
         <IconBase
           ref={ref}
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           {...props}
         >
           {/* Ingress your SVG paths and tags here */}
           <circle cx="11" cy="11" r="8" />
           <line x1="21" y1="21" x2="16.65" y2="16.65" />
         </IconBase>
       );
     }
   );

   SearchIcon.displayName = 'SearchIcon';
   ```
2. **Export:** Export it inside `src/index.ts`:
   ```typescript
   export { SearchIcon } from './components/SearchIcon';
   ```
3. **Compile:** Run `npm run build` to generate CJS/ESM production outputs, autocomplete typing declarations, and tree-shake features.

---

## 📄 License

This project is licensed under the open-source [MIT License](LICENSE).
