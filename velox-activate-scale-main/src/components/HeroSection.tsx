import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]" style={{ background: "linear-gradient(90deg, transparent, hsl(210 100% 62% / 0.3), transparent)" }} />
      

      <div className="container max-w-4xl text-center py-20 md:py-32 relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight text-balance tracking-[-0.02em] text-center lg:text-5xl">
            Se sua agência já está crescendo,
            <br className="hidden md:block" />
            mas o onboarding de clientes virou um{" "}
            <span className="text-secondary">caos operacional,</span>
            <br className="hidden md:block" />
            isso está te fazendo{" "}
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(210 100% 62% / 0.2)" }}>
              perder dinheiro sem perceber.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-xl md:text-2xl font-display font-medium text-muted-foreground text-balance max-w-3xl mx-auto">
            O Método Velox estrutura a ativação de novos clientes em até 2 horas,
            eliminando atrasos, retrabalho e desorganização nos primeiros dias do projeto.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <button
              data-cal-link="diego-santos-solifunnel/comomelhorar-oseu-onboarding"
              data-cal-namespace="comomelhorar-oseu-onboarding"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="relative group font-display font-semibold text-lg px-10 py-4 rounded-md transition-all overflow-hidden tracking-[-0.01em] hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "hsl(210 100% 62%)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.3), 0 4px 16px hsl(210 100% 62% / 0.15)",
                color: "hsl(0 0% 100%)"
              }}>
              
              <span className="relative z-10">Quero estruturar meu onboarding</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <p className="mt-3 text-sm text-muted-foreground">
              Sessão estratégica de 30 minutos
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>);

};

export default HeroSection;