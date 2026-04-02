import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <span
          className="font-display font-bold text-xl tracking-tight text-primary"
          style={{ textShadow: "0 0 15px hsl(210 100% 62% / 0.15)" }}
        >
          VELOX<span className="text-secondary">™</span>
        </span>
        <button
          data-cal-link="diego-santos-solifunnel/comomelhorar-oseu-onboarding"
          data-cal-namespace="comomelhorar-oseu-onboarding"
          data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          className="relative group font-display font-semibold text-sm px-5 py-2.5 rounded-lg transition-all overflow-hidden border border-primary/30"
           style={{
            background: "hsl(210 100% 62% / 0.08)",
            color: "hsl(210 100% 70%)",
          }}
        >
          <span className="relative z-10">Agendar Sessão</span>
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </motion.header>
  );
};

export default StickyHeader;
