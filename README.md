# Ruang Fisika 🔬

**Ruang Fisika** is an interactive physics learning platform for Grade 10 Indonesian high school students, built around the **Kurikulum Merdeka** curriculum. It uses in-browser simulations to make abstract physics concepts visual and hands-on — no installation required.

🌐 **Live site:** [ruangfisika.vercel.app](https://ruangfisika.vercel.app)

## Features

- **Gerak Parabola** — an interactive projectile motion simulator
- **Besaran & Pengukuran** — a measurement and units module
- Fully Indonesian-language UI, tailored to Grade 10 physics topics
- More simulation modules in active development

## Tech Stack

- **[TanStack Start](https://tanstack.com/start)** — full-stack React framework (React 19)
- **[TanStack Router](https://tanstack.com/router)** & **[TanStack Query](https://tanstack.com/query)** — routing and data fetching
- **[Vite](https://vitejs.dev/)** — build tool and dev server
- **TypeScript**
- **[Tailwind CSS 4](https://tailwindcss.com/)** with **[Radix UI](https://www.radix-ui.com/)** primitives (shadcn-style components)
- **[p5.js](https://p5js.org/)** — powers the interactive physics simulations/canvases
- **React Hook Form** + **Zod** — form handling and validation
- Built and scaffolded with **[Lovable](https://lovable.dev/)**

## Getting Started

This project uses [bun](https://bun.sh/) as its package manager.

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev

# Build for production
bun run build

# Preview the production build
bun run preview
```

### Other useful scripts

```bash
bun run lint     # Lint the codebase with ESLint
bun run format   # Format the codebase with Prettier
```

## Project Structure

```
ruangfisika/
├── src/              # Application source code (routes, components, simulations)
├── .lovable/          # Lovable project configuration
├── vite.config.ts     # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── components.json     # shadcn/Radix UI component configuration
```

## Contributing

This project is under active development. Issues and pull requests are welcome — see the [Issues](https://github.com/Jaybycakes/ruangfisika/issues) tab to report bugs or suggest new simulation modules.
