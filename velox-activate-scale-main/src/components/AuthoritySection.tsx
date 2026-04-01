import ScrollReveal from "./ScrollReveal";

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-28 relative bg-background">
      <div className="container max-w-3xl relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center text-balance">
            O problema não está na sua equipe.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-8 text-xl text-muted-foreground text-center leading-relaxed">
            Está no fato de que sua operação ainda depende de{" "}
            <span className="text-foreground font-medium">você</span> para funcionar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-lg text-muted-foreground">
              Agências que escalam não operam no improviso.
            </p>
            <p className="mt-3 font-display font-bold text-primary text-5xl" style={{ textShadow: "0 0 20px hsl(210 100% 62% / 0.15)" }}>
              Elas operam com sistemas.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};

export default AuthoritySection;