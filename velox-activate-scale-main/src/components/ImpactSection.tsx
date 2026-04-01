import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const ImpactSection = () => {
  return (
    <section className="py-20 md:py-28 relative bg-background">
      <div className="container max-w-3xl relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
            O custo de{" "}
            <span className="text-secondary">não ter estrutura</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div
            className="mt-12 rounded-xl p-8 md:p-10 border border-secondary/20"
            style={{ background: "hsl(225 20% 10%)" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Se sua agência cobra{" "}
              <span className="text-foreground font-bold">R$3.000</span> por cliente
              e perde apenas <span className="text-foreground font-bold">1 cliente por mês</span> por falha operacional
            </p>
            <motion.p
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-4xl md:text-5xl font-display font-bold text-secondary"
            >
              R$36.000/ano
            </motion.p>
            <p className="mt-4 text-muted-foreground">
              perdidos por falta de um sistema de ativação.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-lg text-foreground font-medium">
            Agora compare isso com o custo de estruturar o sistema.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ImpactSection;
