import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { HeroBeams } from "@/components/ui/hero-beams";

const rotatingWords = [
  "caos operacional",
  "atraso nos projetos",
  "retrabalho constante",
  "perda de clientes",
  "improviso diario",
];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas beam animation */}
      <HeroBeams />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl text-center py-16 md:py-32 px-4 md:px-6">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-[-0.02em] text-center">
            Se sua agencia ja esta crescendo,
            <br />
            mas o onboarding virou um
          </h1>
          <div className="relative w-full h-[1.3em] mt-2 overflow-hidden text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            {rotatingWords.map((word, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center text-secondary whitespace-nowrap"
                initial={{ opacity: 0, y: 40 }}
                animate={
                  wordIndex === index
                    ? { y: 0, opacity: 1 }
                    : { y: wordIndex > index ? -60 : 60, opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
              >
                {word}
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl font-body text-white/50 text-balance max-w-2xl mx-auto leading-relaxed">
            O Metodo Velox estrutura a ativacao de novos clientes em ate 2 horas,
            eliminando atrasos, retrabalho e desorganizacao nos primeiros dias do projeto.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <button
              data-cal-link="diego-santos-solifunnel/comomelhorar-oseu-onboarding"
              data-cal-namespace="comomelhorar-oseu-onboarding"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="relative group font-display font-semibold text-base md:text-lg px-6 py-3 md:px-10 md:py-4 rounded-md transition-all overflow-hidden tracking-[-0.01em] hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "hsl(210 100% 62%)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.4), 0 4px 20px hsl(210 100% 62% / 0.2)",
                color: "#fff",
              }}
            >
              <span className="relative z-10">Quero estruturar meu onboarding</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <p className="text-sm text-white/30">
              Sessao estrategica de 30 minutos
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-10" />
    </section>
  );
};

export default HeroSection;
