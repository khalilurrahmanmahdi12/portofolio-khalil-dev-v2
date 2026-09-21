import {
  ArrowDown,
  ArrowUpRight,
  CloudCog,
  Code2,
  DatabaseZap,
  Layers3,
  Mail,
  Menu,
  ServerCog,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import type { CSSProperties } from "react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Go",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "GraphQL",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "GitHub Actions",
];

const services = [
  {
    icon: Layers3,
    title: "Full-Stack Architecture",
    copy: "Menyusun sistem end-to-end yang rapi, cepat, dan mudah dikembangkan tanpa mengorbankan pengalaman pengguna.",
  },
  {
    icon: ServerCog,
    title: "Scalable Backend",
    copy: "API, queue, cache, dan integrasi data yang disiapkan untuk traffic nyata dan operasional jangka panjang.",
  },
  {
    icon: DatabaseZap,
    title: "Database Strategy",
    copy: "Skema, indexing, query, dan caching yang dirancang untuk mengurangi bottleneck sejak awal.",
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps",
    copy: "Deployment, observability, CI/CD, dan reliability workflow agar rilis terasa tenang.",
  },
];

const projects = [
  {
    year: "2026",
    title: "Orbit Commerce",
    type: "Headless Storefront",
    challenge:
      "Tim retail butuh storefront cepat dengan katalog besar, checkout stabil, dan dashboard internal yang tidak berat.",
    solution:
      "Dibangun memakai Next.js, server actions, PostgreSQL, dan edge caching untuk pengalaman belanja yang responsif.",
    metrics: ["0.8s LCP", "99.9% uptime", "+38% checkout"],
    stack: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
  },
  {
    year: "2025",
    title: "Atlas Ops",
    type: "SaaS Operations Platform",
    challenge:
      "Proses bisnis tersebar di spreadsheet, chat, dan tools berbeda sehingga audit dan tracking lambat.",
    solution:
      "Menyatukan workflow, role access, notifikasi, dan laporan real-time dalam satu platform operasional.",
    metrics: ["12 modules", "4 role flows", "-64% manual work"],
    stack: ["React", "Node.js", "GraphQL", "Docker"],
  },
];

const process = [
  ["01", "Discovery", "Memahami target, constraint, dan keputusan teknis yang paling menentukan."],
  ["02", "Architecture", "Mendesain data, service boundary, dan flow sebelum produksi kode utama."],
  ["03", "Build", "Implementasi modular dengan perhatian pada performa, aksesibilitas, dan maintainability."],
  ["04", "Optimize", "Profiling, testing, dan tuning sampai pengalaman terasa cepat di perangkat nyata."],
  ["05", "Deploy", "Rilis terukur dengan monitoring, rollback path, dan dokumentasi operasional."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="site-grid" />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070b]/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a className="flex items-center gap-3" href="#home" aria-label="Portfolio home">
            <span className="grid h-10 w-10 place-items-center rounded border border-cyan-300/40 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200">
              KD
            </span>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.24em] text-white/70 sm:inline">
              Khalil Dev
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-white/62 md:flex">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="hidden items-center gap-2 rounded border border-white/14 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/70 hover:text-cyan-100 md:flex"
            href="mailto:hello@example.com"
          >
            <Mail size={16} />
            Let&apos;s talk
          </a>
          <details className="mobile-menu md:hidden">
            <summary aria-label="Open navigation">
              <Menu size={18} />
            </summary>
            <div className="mobile-menu-panel">
              <a href="#about">About</a>
              <a href="#expertise">Expertise</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>
      </header>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-12 pt-28 sm:px-8">
        <div className="hero-aurora" />
        <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="hero-copy">
            <p className="status-pill mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-4 py-2 text-sm text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_#6ee7b7]" />
              Available for selected projects
            </p>
            <h1 className="hero-title max-w-5xl text-[clamp(3.35rem,13vw,10.6rem)] font-black uppercase leading-[0.8] tracking-normal text-white">
              <span>KHALIL</span>
              <span>DEV</span>
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <p className="hero-role text-2xl font-semibold text-cyan-100 sm:text-4xl">
                Software Engineer - Full Stack Developer
              </p>
              <span className="h-px w-20 bg-cyan-300/50" />
              <p className="max-w-xl text-base leading-8 text-white/62 sm:text-lg">
                Membangun sistem digital yang cepat, elegan, dan siap tumbuh: dari front-end interaktif sampai backend yang tahan beban.
              </p>
            </div>
            <div className="hero-actions mt-9 flex flex-wrap gap-3">
              <a className="group inline-flex items-center gap-2 rounded bg-cyan-200 px-5 py-3 font-semibold text-slate-950 transition hover:bg-white" href="#work">
                View Selected Work
                <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
              </a>
              <a className="inline-flex items-center gap-2 rounded border border-white/14 px-5 py-3 font-semibold text-white transition hover:border-amber-300/70 hover:text-amber-100" href="#about">
                Scroll
                <ArrowDown size={18} />
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="orbit-panel">
              <div className="orbit-core">
                <Sparkles size={30} />
                <span>Live Orbit</span>
              </div>
              {techStack.slice(0, 8).map((tech, index) => (
                <span key={tech} className="orbit-chip" style={{ "--i": index } as CSSProperties}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 rounded border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/70">
                Tech Constellation
              </p>
              <p className="mt-2 text-sm leading-6 text-white/58">
                Stack inti bergerak dalam orbit visual. Hover di area ini untuk memperlambat rotasi dan membaca setiap teknologi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee border-y border-white/10 bg-white/[0.03] py-5">
        <div className="marquee-track">
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={`${tech}-${index}`}>{tech}</span>
          ))}
        </div>
      </div>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Engineering with intention.</h2>
        </div>
        <div className="grid gap-6 text-lg leading-9 text-white/65">
          <p>
            Saya membantu founder, studio, dan tim produk membangun aplikasi web yang bukan hanya terlihat premium, tetapi juga punya fondasi teknis yang kuat.
          </p>
          <p>
            Fokus utama saya ada di Next.js, TypeScript, API architecture, database performance, dan deployment workflow. Setiap keputusan dibuat agar produk mudah dirawat ketika fitur, pengguna, dan ambisi bisnis ikut naik.
          </p>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Domain 01</p>
            <h2 className="section-title">Core expertise.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/52">
            Kombinasi strategi produk dan engineering praktis untuk membuat sistem yang terasa cepat dari sisi pengguna dan stabil dari sisi operasional.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="expertise-card" key={service.title}>
                <Icon className="text-cyan-200" size={28} />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title mb-12">Projects with measurable outcomes.</h2>
        <div className="space-y-5">
          {projects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <div className="font-mono text-sm text-white/40">0{index + 1} / {project.year}</div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-amber-200/70">{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="project-label">Challenge</p>
                  <p>{project.challenge}</p>
                </div>
                <div>
                  <p className="project-label">Solution</p>
                  <p>{project.solution}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span className="metric" key={metric}>{metric}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span className="stack-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <a className="project-link" href="#contact" aria-label={`Discuss ${project.title}`}>
                <ArrowUpRight size={22} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <p className="section-kicker">Process</p>
        <h2 className="section-title mb-12">How I build.</h2>
        <div className="process-list">
          {process.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="testimonial">
          <TerminalSquare className="text-amber-200" size={30} />
          <blockquote>
            “Kualitas arsitektur dan attention to detail terasa sejak sprint pertama. Sistemnya cepat, dokumentasinya jelas, dan proses deploy jauh lebih rapi.”
          </blockquote>
          <div>
            <p className="font-semibold text-white">Alex Chen</p>
            <p className="text-sm text-white/45">CTO at TechStart Inc.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let&apos;s build something exceptional.</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/58">
            Terbuka untuk kolaborasi produk digital, platform SaaS, dashboard internal, dan sistem web yang butuh eksekusi rapi dari ide sampai rilis.
          </p>
          <div className="mt-8 flex gap-3">
            <a className="social-button" href="https://github.com/" aria-label="GitHub">
              <Code2 size={18} />
            </a>
            <a className="social-button" href="mailto:hello@example.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell me about your project" />
          </label>
          <button type="submit">
            Send Message
            <ArrowUpRight size={18} />
          </button>
        </form>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 px-5 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>KHALIL DEV © 2026. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
