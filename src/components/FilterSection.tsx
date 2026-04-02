import ScrollReveal from "./ScrollReveal";

const FilterSection = () => {
  return (
    <section className="py-16 md:py-28 relative" style={{ background: "hsl(225 22% 8%)" }}>
      <div className="container max-w-3xl relative z-10 text-center px-4 md:px-6">
        <ScrollReveal>
          <div
            className="rounded-xl p-5 md:p-8 lg:p-10 border border-border/50"
            style={{ background: "hsl(225 20% 10%)" }}
          >
            <p className="text-sm font-display font-bold text-secondary uppercase tracking-widest mb-4">
              Importante
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-balance">
              O Método Velox não é para agências iniciantes.
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Ele é para operações que já possuem múltiplos clientes ativos
              e precisam de estrutura para continuar crescendo.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FilterSection;
