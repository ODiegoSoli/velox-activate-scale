import ScrollReveal from "./ScrollReveal";
import { Cpu } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-28 relative" style={{ background: "hsl(225 22% 8%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] glow-radial pointer-events-none" />

      <div className="container max-w-3xl relative z-10 px-4 md:px-6">
        {/* Section 5 — Solução */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center text-balance">
            Foi para resolver isso que criamos o{" "}
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(210 100% 62% / 0.15)" }}>
              Método Velox.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-muted-foreground text-center leading-relaxed">
            Uma estrutura que transforma o onboarding da sua agência
            em um sistema automático, organizado e previsível.
          </p>
        </ScrollReveal>

        {/* Section 6 — Mecanismo Único (SNA) */}
        <ScrollReveal delay={0.2}>
          <div
            className="mt-10 md:mt-16 rounded-lg p-5 md:p-8 lg:p-10 border border-primary/20 text-center"
            style={{
              background: "hsl(225 22% 10%)",
            }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cpu className="w-7 h-7 text-primary" />
              <span className="text-sm font-display font-bold text-primary uppercase tracking-widest">
                No centro do Método Velox
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Sistema Nervoso de Ativação
            </h3>
            <p className="text-xl font-display font-bold text-primary mt-1">SNA™</p>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Ele conecta todas as etapas da operação
              e garante que nada dependa de execução manual.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionSection;
