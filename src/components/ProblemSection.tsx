import ScrollReveal from "./ScrollReveal";
import { AlertTriangle } from "lucide-react";

const problems = [
"Cliente fechado que demora dias para começar",
"Equipe perguntando o que precisa fazer",
"Briefing que nunca chega completo",
"Você organizando tudo manualmente",
"Projetos começando atrasados"];


const ProblemSection = () => {
  return (
    <section className="py-16 md:py-28 relative bg-background">
      <div className="container max-w-3xl relative z-10 px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-center text-balance">
            Se sua agência está crescendo,{" "}
            <br />
            provavelmente você já viveu isso:
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <ul className="mt-8 md:mt-12 space-y-3 md:space-y-4">
            {problems.map((item, i) =>
            <li key={i} className="flex items-start gap-3 md:gap-4 text-base md:text-lg text-muted-foreground">
                <AlertTriangle className="w-5 h-5 text-secondary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            )}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 md:mt-12 text-center">
            <p className="text-base md:text-lg text-muted-foreground">
              Se esforço fosse a chave, você já teria resolvido.      
   
            
            </p>
            <p className="mt-2 font-display font-bold text-foreground text-2xl md:text-3xl lg:text-4xl">
              É falta de <span className="text-primary" style={{ textShadow: "0 0 20px hsl(210 100% 62% / 0.15)" }}>estrutura.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>);};

export default ProblemSection;