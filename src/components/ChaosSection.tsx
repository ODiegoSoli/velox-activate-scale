import ScrollReveal from "./ScrollReveal";

const ChaosSection = () => {
  return (
    <section className="py-16 md:py-28 relative" style={{ background: "hsl(230 16% 8%)" }}>
      <div className="container max-w-3xl relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center text-balance">
            A maioria das agências não perde clientes por falta de{" "}
            <span className="text-secondary">resultado.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-4 md:mt-6 text-xl md:text-2xl lg:text-3xl font-display font-bold text-foreground text-center">
            Perde nos primeiros dias.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 md:mt-12 space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-center">
              Cliente fecha contrato ...
              <br />
              mas <span className="text-foreground font-medium">demora para começar.</span>
            </p>
            <p className="text-center">
              Briefing atrasa. Equipe não sabe o que fazer. O projeto começa desorganizado.
            </p>
            <p className="text-foreground text-center font-bold text-xl md:text-2xl">
              E quando isso acontece,{" "}
              <br />
              a percepção de valor do cliente já começa baixa.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>);};
export default ChaosSection;