import type { ReactNode } from "react";
import Image from "next/image";
import SiteNav from "./site-nav";

/* ---------- content ---------- */

const nav = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const projects = [
  {
    n: "01",
    name: "TodoAI",
    kind: "AI productivity · Task management",
    problem: "Task capture often breaks down when the interface gets in the way of the thought.",
    build: "A focused task manager that turns natural-language prompts into organised work, with a conversational demo and a calm, conversion-ready landing page.",
    stack: ["Next.js", "FastAPI", "AI workflows"],
    outcome: "A clear product story that makes the AI interaction understandable in seconds.",
    year: "2026",
    url: "https://hackathon-ii-phase3.vercel.app/",
    image: "/projects/hackathon-store.png",
    alt: "TodoAI landing page showing natural language task management",
  },
  {
    n: "02",
    name: "Karachi Brasserie",
    kind: "Restaurant · Brand website",
    problem: "A hospitality brand needs atmosphere, hierarchy, and an easy path from browsing to booking.",
    build: "A dark, editorial restaurant experience with menu-led navigation, strong brand presence, and a direct route to the venue.",
    stack: ["Next.js", "Responsive UI", "Brand direction"],
    outcome: "A distinctive digital surface for a local dining brand.",
    year: "2025",
    url: "https://karachi-brasseriee.vercel.app/",
    image: "/projects/karachi-brasserie.png",
    alt: "Karachi Brasserie website preview",
  },
  {
    n: "03",
    name: "ResumeBuilder",
    kind: "Career tool · Guided builder",
    problem: "People know their experience but still need structure and confidence to turn it into a polished resume.",
    build: "A friendly, conversion-focused resume builder with templates, a guided four-step flow, responsive layouts, and PDF export as the finish line.",
    stack: ["HTML / CSS", "JavaScript", "Responsive UI"],
    outcome: "A simple path from blank page to a ready-to-send document.",
    year: "2025",
    url: "https://resume-builder-pi-woad.vercel.app/pages/index.html",
    image: "/projects/resume-builder.png",
    alt: "ResumeBuilder landing page preview",
  },
];

const capabilities = [
  {
    heading: "AI Engineering",
    items: [
      "Agentic workflows and tool use",
      "RAG and hybrid retrieval",
      "LLM integrations across providers",
      "Prompt and tool orchestration",
      "Structured output pipelines",
    ],
  },
  {
    heading: "Full-Stack Development",
    items: [
      "Next.js App Router",
      "React dashboards and admin UI",
      "API architecture and typed contracts",
      "Authentication and session flows",
      "SaaS MVPs end to end",
    ],
  },
  {
    heading: "Backend Systems",
    items: [
      "Python services",
      "FastAPI",
      "PostgreSQL and schema design",
      "Redis for queues and cache",
      "Dockerised deployments",
    ],
  },
  {
    heading: "Automation",
    items: [
      "CRM, email, and WhatsApp workflows",
      "Internal copilots",
      "Document and data extraction",
      "Background workers",
      "Third-party API integrations",
    ],
  },
];

const process = [
  {
    n: "01",
    title: "Understand the workflow",
    body: "Before any code, we get clear on the business problem, the users, the inputs and outputs, and what success actually looks like. Most projects turn on this step.",
  },
  {
    n: "02",
    title: "Design the system",
    body: "Product flow, data model, API boundaries, and — for AI work — where the model has authority and where a human does. Enough plan to move fast, not so much that it becomes fiction.",
  },
  {
    n: "03",
    title: "Build the first working version",
    body: "A usable MVP with a clean interface and reliable core functionality. It runs end to end before it's polished.",
  },
  {
    n: "04",
    title: "Refine for production",
    body: "Validation, error handling, logging, auth, deployment, and the performance work that keeps it healthy under real traffic.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "umerali.developer@gmail.com",
    href: "mailto:umerali.developer@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "in/umerali",
    href: "https://www.linkedin.com/in/umerali",
  },
  {
    label: "GitHub",
    value: "github.com/umerali",
    href: "https://github.com/Umer-Ali7",
  },
  {
    label: "WhatsApp",
    value: "Message directly",
    href: "https://wa.me/923052597198?text=Hi%20Umer%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
  },
];

/* ---------- primitives ---------- */

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-[var(--border)] ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <header className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {eyebrow}
            </p>
            {title ? (
              <h2 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-[var(--foreground)] sm:text-3xl">
                {title}
              </h2>
            ) : null}
          </header>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted-strong)]">
      {children}
    </span>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <>
      {/* skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--surface)] focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:text-[var(--foreground)] focus:shadow"
      >
        Skip to content
      </a>

      {/* nav */}
      <SiteNav items={nav} />

      <main id="main">
        {/* HERO */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-[var(--border)]"
        >
          <div
            aria-hidden
            className="grain pointer-events-none absolute inset-0 opacity-[0.35]"
          />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-16 pb-24 sm:px-8 md:pt-24 md:pb-32">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                  <span
                    aria-hidden
                    className="inline-block h-px w-8 bg-[var(--border-strong)]"
                  />
                  Portfolio · 2026
                </p>

                <h1 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-[64px]">
                  Umer Ali builds AI systems and{" "}
                  <span className="text-[var(--muted-strong)]">
                    full-stack products
                  </span>{" "}
                  that actually ship.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-strong)] sm:text-lg">
                  AI Engineer, full-stack developer, and co-founder of{" "}
                  <span className="text-[var(--foreground)]">Codizzz</span>. I
                  design and build agentic workflows, automation systems, and
                  production-ready web apps with Next.js, Python, and FastAPI.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-px"
                  >
                    View selected work
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-soft)]"
                  >
                    Start a project
                  </a>
                </div>
              </div>

              {/* side rail — quiet credibility */}
              <aside className="md:col-span-4">
                <dl className="grid gap-6 border-l border-[var(--border)] pl-6 md:mt-2">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Based in
                    </dt>
                    <dd className="mt-1 text-sm text-[var(--foreground)]">
                      Pakistan · GMT+5
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Focus
                    </dt>
                    <dd className="mt-1 text-sm text-[var(--foreground)]">
                      AI Engineering, Full-Stack Development, Automation
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Currently
                    </dt>
                    <dd className="mt-1 flex items-center gap-2 text-sm text-[var(--foreground)]">
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                      />
                      Building at Codizzz · open to select projects
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <Section
          id="work"
          eyebrow="Selected work"
          title={
            <>
              A few projects worth
              <br className="hidden sm:inline" /> writing about.
            </>
          }
        >
          <ul className="divide-y divide-[var(--border)]">
            {projects.map((p) => (
              <li key={p.n} className="group py-10 first:pt-0 last:pb-0">
                <article>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block aspect-video overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface-soft)]"
                  >
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-[var(--foreground)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--background)]">
                      Live site ↗
                    </span>
                  </a>
                  <div className="mt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      Project {p.n}
                      <span className="mx-2 text-[var(--border-strong)]">
                        /
                      </span>
                      {p.year}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-[var(--foreground)]">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted-strong)]">
                      {p.kind}
                    </p>
                    <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                      <div>
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          The problem
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-[var(--foreground)]">
                          {p.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          What I built
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-[var(--foreground)]">
                          {p.build}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          Outcome
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-relaxed text-[var(--foreground)]">
                          {p.outcome}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          Stack
                        </dt>
                        <dd className="mt-2 flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <Pill key={s}>{s}</Pill>
                          ))}
                        </dd>
                      </div>
                    </dl>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="link mt-6 inline-flex items-center gap-2 text-sm font-medium"
                    >
                      Open project <span aria-hidden>↗</span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-[var(--muted)]">
            A few client projects are under NDA and shared on request.{" "}
            <a href="#contact" className="link">
              Ask for the private list.
            </a>
          </p>
        </Section>

        {/* CAPABILITIES */}
        <Section
          id="skills"
          eyebrow="Capabilities"
          title={
            <>
              What I actually work on,
              <br className="hidden sm:inline" /> in plain terms.
            </>
          }
        >
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.heading}>
                <h3 className="font-display text-lg font-medium tracking-tight text-[var(--foreground)]">
                  {cap.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-relaxed text-[var(--muted-strong)]"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 inline-block h-px w-3 shrink-0 bg-[var(--border-strong)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ABOUT */}
        <Section
          id="about"
          eyebrow="About"
          title={<>A short version, honestly written.</>}
        >
          <div className="space-y-5 text-[17px] leading-[1.7] text-[var(--foreground)]">
            <p>
              I&apos;m Umer Ali, an AI Engineer and full-stack developer. I
              co-founded{" "}
              <a href="#codizzz" className="link">
                Codizzz
              </a>
              , where we build AI solutions and web products for businesses
              that need practical systems — not just demos.
            </p>
            <p>
              My work usually sits between product, engineering, and
              automation: turning messy business processes into clean
              interfaces, reliable APIs, and AI workflows that people can
              actually use.
            </p>
            <p>
              I care about clean architecture, fast execution, and building
              things that are maintainable after the first demo. I&apos;d
              rather ship something small that works than something ambitious
              that doesn&apos;t.
            </p>
          </div>
        </Section>

        {/* PROCESS */}
        <Section
          id="process"
          eyebrow="Process"
          title={
            <>
              How a project usually
              <br className="hidden sm:inline" /> moves forward.
            </>
          }
        >
          <ol className="space-y-8">
            {process.map((step) => (
              <li key={step.n} className="grid gap-3 sm:grid-cols-12 sm:gap-6">
                <div className="sm:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Step {step.n}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-medium tracking-tight text-[var(--foreground)]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--muted-strong)] sm:col-span-9">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* CODIZZZ */}
        <Section id="codizzz" eyebrow="Codizzz" title="On the agency side.">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10">
            <p className="text-[17px] leading-[1.7] text-[var(--foreground)]">
              I also co-founded{" "}
              <span className="font-medium">Codizzz</span> — an AI solutions
              and web development agency focused on practical automation,
              full-stack products, and custom AI systems for businesses. If a
              project needs a small team instead of just me, that&apos;s
              usually where it lives.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://codizzz.com"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-px"
              >
                Visit Codizzz
                <span aria-hidden>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-soft)]"
              >
                Discuss a project
              </a>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="Contact"
          title={
            <>
              Have an AI workflow, SaaS idea,
              <br className="hidden sm:inline" /> or automation problem worth
              solving?
            </>
          }
        >
          <p className="max-w-2xl text-[17px] leading-[1.7] text-[var(--muted-strong)]">
            Send me the rough idea. I&apos;ll help turn it into a clear
            technical plan — scope, stack, and a first shippable version.
          </p>

          <ul className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {contactLinks.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-[var(--surface-soft)]"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {c.label}
                  </span>
                  <span className="flex items-center gap-3 font-display text-lg font-medium tracking-tight text-[var(--foreground)] sm:text-xl">
                    {c.value}
                    <span
                      aria-hidden
                      className="text-[var(--muted)] transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:umerali.developer@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-ink)] transition-transform hover:-translate-y-px"
            >
              Start a project
              <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:umerali.developer@gmail.com"
              className="inline-flex items-center rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-soft)]"
            >
              Email me
            </a>
            <a
              href="https://github.com/Umer-Ali7"
              className="inline-flex items-center rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-soft)]"
            >
              View GitHub
            </a>
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            © {new Date().getFullYear()} Umer Ali · Built with care · Pakistan
            · GMT+5
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
            <a href="#top" className="hover:text-[var(--foreground)]">
              Back to top ↑
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
