import { Code2, Server, Layers, Wrench } from "lucide-react";
import { SKILLS } from "../data/skills.js";
import SectionHeader from "./SectionHeader.jsx";
import useReveal from "../hooks/useReveal.js";

const CATEGORY_ICON = { Frontend: Code2, Backend: Server, Database: Layers, Tools: Wrench };

function SkillCategoryCard({ group }) {
  const ref = useReveal();
  const Icon = CATEGORY_ICON[group.category] || Code2;
  return (
    <div ref={ref} className="reveal opacity-0 translate-y-4 transition-all duration-700 [&.in]:opacity-100 [&.in]:translate-y-0 card p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-accent">
          <Icon size={18} />
        </div>
        <h3 className="font-display font-semibold">{group.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technologies I work with"
          subtitle="Grouped the way I actually reach for them on a project — not a scoreboard of percentages."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((g) => (
            <SkillCategoryCard key={g.category} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
