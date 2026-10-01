"use client";

import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

export default function SiteNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  // Close on Escape, and lock body scroll while the panel is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--background)_82%,transparent)] backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]"
          />
          <span className="font-display text-[15px] font-semibold tracking-tight text-[var(--foreground)]">
            Umer Ali
          </span>
          <span className="ml-2 hidden font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] sm:inline">
            AI · Full-Stack
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 sm:flex sm:gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-sm text-[var(--muted-strong)] transition-colors hover:text-[var(--foreground)] sm:px-3"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-1">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-4 py-1.5 text-sm font-medium text-[var(--accent-ink)] transition-transform hover:-translate-y-px"
            >
              Start a project
            </a>
          </li>
        </ul>

        {/* Mobile hamburger — morphs to an X when open */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative -mr-1.5 flex h-10 w-10 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-[var(--surface-soft)] sm:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ease-out ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 bg-current transition-all duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.5px] w-5 bg-current transition-all duration-300 ease-out ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`sm:hidden ${open ? "block" : "hidden"}`}
      >
        {/* backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-x-0 bottom-0 top-[65px] z-30 bg-[color-mix(in_oklab,var(--background)_40%,transparent)] backdrop-blur-sm"
        />
        <div className="relative z-40 border-t border-[var(--border)] bg-[var(--background)]">
          <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
            {items.map((item, i) => (
              <li
                key={item.href}
                className="animate-[menuIn_0.35s_ease_both]"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-2 py-3 text-lg font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-soft)]"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="font-mono text-[11px] text-[var(--muted)]"
                  >
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
            <li
              className="mt-2 animate-[menuIn_0.35s_ease_both]"
              style={{ animationDelay: `${items.length * 45}ms` }}
            >
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-ink)]"
              >
                Start a project
                <span aria-hidden>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
