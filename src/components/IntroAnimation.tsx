import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState<"beam" | "split" | "done">("beam");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("split"), 700);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {phase !== "done" ? (
        <motion.div
          key="intro-overlay"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Left panel */}
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-background"
            initial={{ width: "50%" }}
            animate={phase === "split" ? { width: "0%" } : { width: "50%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Right panel */}
          <motion.div
            className="absolute top-0 right-0 bottom-0 bg-background"
            initial={{ width: "50%" }}
            animate={phase === "split" ? { width: "0%" } : { width: "50%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Central light beam */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
            initial={{ width: 0, opacity: 0 }}
            animate={
              phase === "beam"
                ? { width: 3, opacity: 1 }
                : { width: 120, opacity: 0 }
            }
            transition={
              phase === "beam"
                ? { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
                : { duration: 0.6, ease: "easeOut" }
            }
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, hsl(217 91% 60% / 0.6) 15%, hsl(217 91% 60% / 1) 50%, hsl(217 91% 60% / 0.6) 85%, transparent 100%)",
              boxShadow:
                "0 0 60px 20px hsl(217 91% 60% / 0.4), 0 0 120px 40px hsl(217 91% 60% / 0.15)",
            }}
          />

          {/* Particle dots */}
          {phase === "split" &&
            Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 400,
                  opacity: 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  background: "hsl(217 91% 60%)",
                  boxShadow: "0 0 8px hsl(217 91% 60% / 0.8)",
                  left: "50%",
                  top: "50%",
                }}
              />
            ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroAnimation;
