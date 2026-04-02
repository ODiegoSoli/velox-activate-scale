import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { trigger: "Cliente marcado como ganho no CRM", result: "O sistema inicia automaticamente" },
  { trigger: "Contrato enviado instantaneamente", result: "Sem depender de ninguém" },
  { trigger: "Contrato assinado", result: "Cliente entra no sistema" },
  { trigger: "Grupo de comunicação criado", result: "Cliente + equipe conectados" },
  { trigger: "Briefing enviado automaticamente", result: "Com estrutura e prazo definido" },
  { trigger: "Reunião de kickoff agendada", result: "Sem troca de mensagens" },
  { trigger: "Projeto criado na ferramenta", result: "Com tarefas prontas" },
  { trigger: "Equipe notificada automaticamente", result: "Cada um sabe o que fazer" },
  { trigger: "Financeiro ativado", result: "Cobrança estruturada" },
  { trigger: "Operação começa organizada", result: "Sem atraso, sem improviso" },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative flex items-stretch gap-3 md:gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center shrink-0 w-8">
        {/* Node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative w-4 h-4 rounded-full shrink-0 z-10"
          style={{ background: "hsl(210 100% 62%)" }}
        >
          {/* Glow pulse */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={isInView ? { scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            className="absolute inset-0 rounded-full"
            style={{ background: "hsl(210 100% 62% / 0.3)" }}
          />
        </motion.div>

        {/* Beam line */}
        {index < steps.length - 1 && (
          <div className="relative w-[2px] flex-1 min-h-[40px] overflow-hidden" style={{ background: "hsl(225 15% 18%)" }}>
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-0 left-0 w-full"
              style={{
                background: "linear-gradient(180deg, hsl(210 100% 62% / 0.6), hsl(210 100% 62% / 0.15))",
              }}
            />
            {/* Traveling light beam */}
            <motion.div
              initial={{ top: "-20px", opacity: 0 }}
              animate={isInView ? { top: ["0%", "100%"], opacity: [0, 1, 0] } : {}}
              transition={{ duration: 1.2, delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="absolute left-0 w-full h-5"
              style={{
                background: "linear-gradient(180deg, transparent, hsl(210 100% 62% / 0.7), transparent)",
              }}
            />
          </div>
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="pb-6 flex-1"
      >
        <div
          className="rounded-xl p-3 md:p-5 border border-border/50 hover:border-primary/40 transition-all duration-300 group"
          style={{ background: "hsl(225 22% 10%)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="font-display font-semibold text-foreground text-sm md:text-base">
              {step.trigger}
            </p>
            <p className="mt-1.5 text-sm text-primary font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-[1px]" style={{ background: "hsl(210 100% 62% / 0.3)" }} />
              {step.result}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const StepByStepSection = () => {
  return (
    <section className="py-16 md:py-28 relative bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] glow-radial pointer-events-none" />

      <div className="container max-w-2xl relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center text-balance">
            De cliente fechado a{" "}
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(210 100% 62% / 0.15)" }}>
              operação iniciada
            </span>{" "}
            em minutos
          </h2>
        </ScrollReveal>

        <div className="mt-14">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStepSection;
