# Pokémon Demo - LeTranTienPhat

A demo showcasing caching & SSR techniques with Next.js 16 using cacheComponents.

## Developing Process (Total Time: ~170mins)

Project is built with Next.js 16 using cacheComponents feature. It is optimized for SSR and caching. With this, all user will be able to access the same cached contents when visiting the page.

### I. Init source base (~30mins)

- Init source base with `bun create next-app@latest`
- Remove default styling and demo code
- Init some Prettier + ESlint + .vscode rules for synchronize coding style
- Setup next config files for SSR and caching
- Add Husky for commitlint

### II. Implementation (~80mins)

- Build page for pokemons list and filter
- Setup api calls (https://pokeapi.co/)
- Optimize for SSR and caching using `cacheComponents` feature of Next.js 16
- Research and implement filter strategy for pokemon's type filter

About filter pokemon by type: In the [Original demo version](https://itc.it-consultis.net/pokemon), we can see that it can filter multiple pokemon's type at once, but I saw that it did not work correctly. So after some research, I found out that PokeAPI doesn't support multiple type filter, so in order to archive multiple type filter feature, I will have to follow one of the below strategies:

1. Fetch all pokemon available, then filter by type in client side.
2. Fetch all pokemon of the selected types, and then loop through the list to get the all pokemon that match with the selected types.

Because both of the strategies above is not efficient, so in my version, it's best that I disable the multiple type filter feature and only support single type filter.

### III. Final Improvements (~60mins)

- Manual test to see if the app works as expected
- Further improve performance and caching strategy
- Update README.md

---

## ✨ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Runtime:** Bun – fast JavaScript runtime & package manager.
- **Language:** TypeScript
- **Styling:** Tailwind CSS

---

## 📁 Project Structure

```
pokemon/
├─ app/                 # Next.js App Router pages & layout
├─ components/          # Shared UI components
│   └─ ui/               # Reusable UI components
│       └─ button.tsx    # Example Button (not used in the app)
├─ lib/                 # Helper utilities
├─ modules/             # Feature‑based modules (home, about, etc)
│   └─ home/            # Components for home module
│       └─ client/      # Client components are separated into dedicated folder
│           └─ filter-link.tsx     # This can also be a server component,
│                                     but I choose it to be a client component
│                                     to showcase how I would handle client components
├─ public/              # Static assets (images, favicon, etc.)
├─ types/               # Global TypeScript types
├─ next.config.ts       # Next.js configuration
├─ package.json         # Project dependencies & scripts
└─ tsconfig.json        # TypeScript configuration
```

- **`components/ui`** is included solely as a structural demo; its `Button` component is intentionally **not used** anywhere in the app.
- The **`modules`** directory follows a feature‑based pattern, keeping related UI, hooks, and server logic together.

---

## 🚀 Getting Started

### Prerequisites

- **Bun** (recommended) – install from https://bun.sh
- Node.js (if you prefer npm/yarn/pnpm) – the project works with any runtime, but scripts use Bun by default.

### Installation

```bash
# Clone the repo
git clone <repo-url>
cd pokemon

# Install dependencies using Bun (or npm)
bun install   # or npm install
```

### Development

```bash
bun dev   # Starts the development server at http://localhost:3000
# or npm run dev
```

### Build & Production

```bash
bun build   # or npm run build
bun start   # or npm start
```

---

## 📦 Scripts Overview

| Script   | Description                              |
| -------- | ---------------------------------------- |
| `dev`    | Starts the Next.js dev server (Bun)      |
| `build`  | Compiles the app for production          |
| `start`  | Runs the compiled app in production mode |
| `lint`   | Runs ESLint across the codebase          |
| `format` | Formats code with Prettier               |

---
