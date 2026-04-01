import ScrollReveal from "./ScrollReveal";

const ClosingSection = () => {
  return (
    <section className="py-20 md:py-28 relative bg-background">
      <div className="container max-w-3xl relative z-10 text-center">
        <ScrollReveal>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Se sua agência ainda depende de você
            <br />
            para organizar cada novo cliente que entra…
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mt-8 text-2xl md:text-3xl font-display font-bold text-foreground">
            você não tem um processo.
          </p>
          <p className="mt-3 text-2xl md:text-3xl font-display font-bold text-secondary">
            Você tem um improviso que ainda está funcionando.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-3xl md:text-4xl font-display font-bold text-foreground">
            A questão é:{" "}
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(210 100% 62% / 0.15)" }}>
              até quando?
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>);

};

export default ClosingSection;