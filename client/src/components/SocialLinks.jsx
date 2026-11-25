import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/profile.js";

export default function SocialLinks({ className = "" }) {
  const links = [
    { href: PROFILE.github, label: "GitHub", Icon: Github },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: PROFILE.email ? `mailto:${PROFILE.email}` : undefined, label: "Email", Icon: Mail },
  ].filter((link) => typeof link.href === "string" && link.href.trim());
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent transition-colors"
        >
          <Icon size={17} />
        </a>
      ))}
    </div>
  );
}
