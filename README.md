# RollGraph

An AI-powered Brazilian Jiu-Jitsu training log and interactive skill tree built to turn post-session sparring notes into structured positions, transitions, and trouble spots.

**Live Demo:** [roll-graph.vercel.app](https://roll-graph.vercel.app)

---

## Why RollGraph

Most grapplers train hard but lack a clear picture of how individual techniques connect into a cohesive game plan:

- **Scattered notes & random techniques:** Post-session reflections get buried in phone notes or disconnected from what you actually want to build next.
- **Visual game-plan clarity:** Instead of treating training as isolated moves of the day, RollGraph maps sparring notes into an interactive skill tree so you can see your positions, transitions, and trouble spots at a glance.
- **Structured feedback loop:** Log free-text roll notes, parse key moments with schema validation, and see how your sessions shape your skill graph over time.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router) with [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Skill Tree & Layout:** [@xyflow/react](https://reactflow.dev) and [@dagrejs/dagre](https://github.com/dagrejs/dagre)
- **Database & Auth:** [Supabase](https://supabase.com) (`@supabase/supabase-js`, `@supabase/ssr`)
- **AI & Schema Validation:** [OpenAI](https://openai.com) (`openai`) and [Zod](https://zod.dev) (`zod`)
- **Icons:** [Lucide React](https://lucide.dev)

---

## Getting Started

1. **Clone the repository and install dependencies:**

   ```bash
   git clone [https://github.com/MartinRenteria/RollGraph.git](https://github.com/MartinRenteria/RollGraph.git)
   cd RollGraph
   npm install
