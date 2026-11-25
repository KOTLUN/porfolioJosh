import { useMemo, useState } from "react";
import { PROJECTS } from "../data/projects.js";
import SectionHeader from "./SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetails from "./ProjectDetails.jsx";

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)), [filter]);

  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A mix of client, academic, and personal projects — filtered by what kind of problem each one solved."
        />
        <div className="flex flex-wrap gap-2 mb-10 -mt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === cat ? "border-accent bg-accent/10 text-accent" : "border-border text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>
      {active && <ProjectDetails project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
