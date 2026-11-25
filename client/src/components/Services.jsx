import { Code2, Layers, Server, PenTool } from "lucide-react";
import { SERVICES } from "../data/services.js";
import SectionHeader from "./SectionHeader.jsx";
import useReveal from "../hooks/useReveal.js";

const ICONS = [Code2, Layers, Server, PenTool];

function ServiceCard({ service, Icon }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal opacity-0 translate-y-4 transition-all duration-700 [&.in]:opacity-100 [&.in]:translate-y-0 card p-6">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-accent/10 text-accent">
        <Icon size={18} />
      </div>
      <h3 className="font-display font-semibold mb-2">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-[1140px] mx-auto px-6">
        <SectionHeader eyebrow="Services" title="What I can help with" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} Icon={ICONS[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
