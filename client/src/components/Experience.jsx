import { EXPERIENCE } from "../data/experience.js";
import SectionHeader from "./SectionHeader.jsx";
import useReveal from "../hooks/useReveal.js";

function ExperienceItem({ exp }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal opacity-0 translate-y-4 transition-all duration-700 [&.in]:opacity-100 [&.in]:translate-y-0 relative sm:pl-10">
      <span className="hidden sm:block absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent/10" />
      <p className="font-mono text-xs mb-2 text-accent">{exp.date}</p>
      <h3 className="font-display font-semibold text-lg">{exp.position}</h3>
      <p className="text-sm mb-3 text-muted">{exp.organization}</p>
      <p className="text-sm leading-relaxed mb-3 text-muted">{exp.description}</p>
      <ul className="space-y-1.5 mb-4">
        {exp.responsibilities.map((r) => (
          <li key={r} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-accent" /> {r}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        <div className="relative max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
