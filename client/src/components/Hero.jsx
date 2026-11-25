import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/profile.js";
import SocialLinks from "./SocialLinks.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} className="font-mono text-sm mb-5 text-accent">
            Hi, I'm {PROFILE.name.split(" ")[0]} —
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-display font-semibold tracking-tight leading-[1.05] text-5xl sm:text-6xl"
          >
            {PROFILE.title}
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="mt-6 text-lg max-w-lg leading-relaxed text-muted">
            {PROFILE.tagline}
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">Let's Talk</a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="mt-10">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-[28%] card flex items-center justify-center shadow-2xl">
            <span className="font-display text-7xl font-semibold text-accent">
              {PROFILE.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <div className="absolute -top-4 -right-4 chip">React</div>
            <div className="absolute -bottom-4 -left-4 chip">Node.js</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
