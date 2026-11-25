import { useEffect } from "react";
import { X, Check, ExternalLink, Github } from "lucide-react";

export default function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/50 flex items-start sm:items-center justify-center p-0 sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-border w-full sm:max-w-2xl sm:rounded-2xl max-h-screen sm:max-h-[86vh] overflow-y-auto"
      >
        <div className="aspect-video bg-surface-2 flex items-center justify-center relative">
          <span className="font-display text-3xl font-semibold opacity-30">{project.name}</span>
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center">
            <X size={16} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="chip">{project.category}</span>
          <h3 className="font-display text-2xl font-semibold mt-4 mb-3">{project.name}</h3>
          <p className="text-sm leading-relaxed mb-6 text-muted">{project.longDescription}</p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-semibold text-sm mb-2">Problem</h4>
              <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-2">Solution</h4>
              <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
            </div>
          </div>

          <h4 className="font-display font-semibold text-sm mb-2">Key features</h4>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted">
                <Check size={14} className="mt-0.5 shrink-0 text-accent" /> {f}
              </li>
            ))}
          </ul>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-semibold text-sm mb-2">Challenges</h4>
              <p className="text-sm leading-relaxed text-muted">{project.challenges}</p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-sm mb-2">Results</h4>
              <p className="text-sm leading-relaxed text-muted">{project.results}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.technologies.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
