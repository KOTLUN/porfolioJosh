import useReveal from "../hooks/useReveal.js";

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal max-w-2xl mb-12 opacity-0 translate-y-4 transition-all duration-700 [&.in]:opacity-100 [&.in]:translate-y-0 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p className="font-mono text-xs mb-3 text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}
