import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "hsl(230 18% 7%)" }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, hsl(165 70% 46% / 0.25), transparent)" }} />
      

      <div className="container max-w-3xl text-center relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
            Agendar diagnóstico da{" "}
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(165 70% 46% / 0.15)" }}>
              minha operação
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja em 30 minutos como estruturar sua agência.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <button
              data-cal-link="diego-santos-solifunnel/comomelhorar-oseu-onboarding"
              data-cal-namespace="comomelhorar-oseu-onboarding"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="relative group font-display font-bold text-base md:text-lg px-6 py-3 md:px-10 md:py-4 rounded-md transition-all overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "hsl(165 70% 46%)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3), 0 4px 16px hsl(165 70% 46% / 0.15)",
                color: "hsl(0 0% 100%)"
              }}>
              
              <span className="relative z-10">Agendar Diagnóstico Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};

export default FinalCTASection;