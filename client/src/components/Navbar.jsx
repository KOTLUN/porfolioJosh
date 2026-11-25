import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../data/profile.js";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.toLowerCase())).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = NAV_ITEMS.find((i) => i.toLowerCase() === entry.target.id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "backdrop-blur-md border-b border-border" : ""}`}
      style={{ background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent" }}
    >
      <nav className="max-w-[1140px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="font-display font-semibold text-lg">
          {PROFILE.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${active === item ? "text-text" : "text-muted hover:text-text"}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

        <button className="md:hidden w-10 h-10 flex items-center justify-center" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-surface">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-[15px] font-medium text-muted">
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-2 flex items-center justify-between">
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="btn btn-ghost">
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">Let's Talk</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
