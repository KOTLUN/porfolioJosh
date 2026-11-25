import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { STATS, ABOUT } from "../data/about.js";
import SectionHeader from "./SectionHeader.jsx";
import useReveal from "../hooks/useReveal.js";

function StatCard({ stat }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / 1000);
          setCount(Math.round(stat.value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  return (
    <div ref={ref} className="card p-5">
      <p className="font-display text-3xl font-semibold text-accent">{count}+</p>
      <p className="text-xs mt-1 text-muted">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
        <div ref={ref} className="reveal opacity-0 translate-y-4 transition-all duration-700 [&.in]:opacity-100 [&.in]:translate-y-0">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl bg-surface-2 border border-border flex items-center justify-center">
            <span className="text-sm font-mono text-muted">[YOUR PROFILE IMAGE]</span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-8 max-w-sm">
            {STATS.map((s) => (
              <StatCard key={s.label} stat={s} />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader eyebrow="About" title="Who I am as a developer" />
          <p className="leading-relaxed text-[15px] mb-5 text-muted">{ABOUT.bio}</p>
          <p className="leading-relaxed text-[15px] mb-8 text-muted">{ABOUT.philosophy}</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display font-semibold mb-3 text-sm">Specialties</h3>
              <ul className="space-y-2">
                {ABOUT.specialties.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-3 text-sm">Strengths</h3>
              <ul className="space-y-2">
                {ABOUT.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
