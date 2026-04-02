import ScrollReveal from "./ScrollReveal";
import { X, Check } from "lucide-react";

const beforeItems = [
  "Cliente espera dias para começar",
  "Equipe fica perdida",
  "Você centraliza tudo",
  "Projetos começam atrasados",
];

const afterItems = [
  "Cliente começa no mesmo dia",
  "Equipe já sabe o que fazer",
  "Operação roda com sistema",
  "Crescimento sem caos",
];

const TransformationSection = () => {
  return (
    <section className="py-16 md:py-28 relative" style={{ background: "hsl(230 16% 8%)" }}>
      <div className="container max-w-5xl relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center text-balance">
            De <span className="text-secondary">Caos</span> a{" "}
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(165 70% 46% / 0.15)" }}>
              Sistema
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-10 md:mt-14">
          <ScrollReveal delay={0.15} direction="left">
            <div
              className="rounded-xl p-5 md:p-8 h-full border border-secondary/20"
              style={{ background: "hsl(230 14% 10%)" }}
            >
              <h3 className="text-lg font-display font-bold text-secondary mb-6 uppercase tracking-wider">
                Sem o Método Velox
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="right">
            <div
              className="rounded-xl p-5 md:p-8 h-full border border-primary/20"
              style={{ background: "hsl(230 14% 10%)" }}
            >
              <h3 className="text-lg font-display font-bold text-primary mb-6 uppercase tracking-wider">
                Com o Método Velox
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
