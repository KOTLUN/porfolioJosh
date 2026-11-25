import { PROFILE, NAV_ITEMS } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <a href="#home" className="font-display font-semibold">{PROFILE.name}</a>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-text">{item}</a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">© {new Date().getFullYear()} {PROFILE.name}. Built with React.</p>
      </div>
    </footer>
  );
}
