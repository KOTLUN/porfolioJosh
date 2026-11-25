import { ArrowUpRight, Github } from "lucide-react";
import useReveal from "../hooks/useReveal.js";

export default function ProjectCard({ project, onOpen }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      className="reveal opacity-0 translate-y-4 transition-all duration-700 [&.in]:opacity-100 [&.in]:translate-y-0 card overflow-hidden group cursor-pointer"
    >
      <div className="aspect-video bg-surface-2 relative overflow-hidden flex items-center justify-center">
        <span className="font-display text-2xl font-semibold opacity-30 group-hover:scale-105 transition-transform duration-500">
          {project.name}
        </span>
        <span className="absolute top-3 left-3 chip">{project.category}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg mb-2">{project.name}</h3>
        <p className="text-sm leading-relaxed mb-4 line-clamp-2 text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
