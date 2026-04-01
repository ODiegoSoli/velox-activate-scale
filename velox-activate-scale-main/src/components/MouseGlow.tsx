import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

let rippleId = 0;

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const addRipple = useCallback((x: number, y: number) => {
    const id = ++rippleId;
    setRipples((prev) => [...prev.slice(-5), { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleTouchStart = () => setIsTouchDevice(true);

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setPos({ x: touch.clientX, y: touch.clientY });
    };

    const handleTap = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      addRipple(touch.clientX, touch.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      if (!isTouchDevice) {
        addRipple(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTap, { passive: true });
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTap);
      window.removeEventListener("click", handleClick);
    };
  }, [isTouchDevice, addRipple]);

  return (
    <>
      {/* Glow that follows cursor/finger */}
      <motion.div
        className="fixed pointer-events-none z-[50]"
        animate={{ x: pos.x - 150, y: pos.y - 150 }}
        transition={{ type: "spring", damping: 25, stiffness: 150, mass: 0.5 }}
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.03) 40%, transparent 70%)",
        }}
      />

      {/* Ripple effects on tap/click */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none z-[50]"
            initial={{ opacity: 0.4, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              left: ripple.x - 80,
              top: ripple.y - 80,
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "1px solid hsl(var(--primary) / 0.25)",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.1)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default MouseGlow;
