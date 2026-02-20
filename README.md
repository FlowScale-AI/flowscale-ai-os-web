# FlowScale AI OS — Web (Landing Page)

> **The operating layer for Generative Pipelines.**  
> Stop forcing artists to be engineers. FlowScale abstracts complex ComfyUI graphs into standardized, production-ready interfaces for your entire creative team.

---

## Overview

`flowscale-ai-os-web` is the public-facing **marketing & landing page** for the FlowScale platform. Built with **Next.js 16 + React 19**, it acts as the entry point for users discovering FlowScale and proxies traffic to the FlowScale OS app (`/os/*`) via Next.js rewrites — enabling a seamless multi-zone architecture.

---

## Tech Stack

| Technology                                   | Purpose                          |
| -------------------------------------------- | -------------------------------- |
| [Next.js 16](https://nextjs.org/)            | React framework / SSR / rewrites |
| [React 19](https://react.dev/)               | UI library                       |
| [Tailwind CSS v4](https://tailwindcss.com/)  | Utility-first styling            |
| [Iconify](https://iconify.design/)           | Icon system                      |
| [Phosphor React](https://phosphoricons.com/) | Supplemental icon set            |
| TypeScript                                   | Type safety                      |

---

## Project Structure

```
flowscale-ai-os-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts & metadata
│   │   ├── page.tsx          # Landing page (composes all sections)
│   │   └── globals.css       # Global styles & Tailwind directives
│   └── components/
│       └── landing/
│           ├── Navbar.tsx        # Top navigation bar
│           ├── Hero.tsx          # Hero section with animated SVG pipeline
│           ├── ProblemSolution.tsx  # Problem vs solution comparison
│           ├── WorkflowSteps.tsx # Step-by-step workflow explainer
│           ├── CTA.tsx           # Call to action
│           └── Footer.tsx        # Footer
├── next.config.ts            # Next.js config + /os/* proxy rewrites
├── postcss.config.mjs        # PostCSS config for Tailwind v4
├── tsconfig.json
└── package.json
```

---

## Multi-Zone Architecture

This app proxies all `/os` and `/os/*` traffic to the FlowScale OS app running on `localhost:5175`, enabling Next.js [Multi-Zones](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones):

```
Landing Page (port 5174)  →  /           Serves this app
                           →  /os/**     Proxied → OS App (port 5175)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/) (recommended — this project is part of a Turborepo monorepo)

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
# Starts on http://localhost:5174
```

> **Note:** For the `/os` proxy to work, the FlowScale OS app must be running on port `5175`.

### Build for production

```bash
pnpm build
pnpm start
```

---

## Landing Page Sections

| Section                | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| **Navbar**             | Logo, navigation links, and "Deploy OS" CTA                                |
| **Hero**               | Headline, description, CTAs, and animated ComfyUI node visualization       |
| **Problem / Solution** | Side-by-side contrast of raw ComfyUI complexity vs FlowScale's abstraction |
| **Workflow Steps**     | 3-step explainer: Connect → Configure → Deploy                             |
| **CTA**                | Conversion section nudging users to start a free trial                     |
| **Footer**             | Links and copyright                                                        |

---

## Related Repositories

| Repo                  | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `flowscale-ai-os`     | The core OS application (ComfyUI orchestration, canvas, tools) |
| `flowscale-ai-studio` | Studio app for workflow authoring                              |

---

## License

Copyright © 2025 [InSynk Studios](https://github.com/InSynk-Studios). All rights reserved.
