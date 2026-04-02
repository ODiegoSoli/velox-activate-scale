const Footer = () => {
  return (
    <footer className="py-8 md:py-12 border-t border-border/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
            <span
              className="font-display font-bold text-base md:text-lg tracking-tight text-primary"
              style={{ textShadow: "0 0 20px hsl(165 70% 46% / 0.1)" }}
            >
              VELOX<span className="text-secondary">™</span>
            </span>
            <span className="hidden md:block w-[1px] h-4 bg-border/30" />
            <span className="text-sm text-muted-foreground/60">
              Estrutura para agências que escalam
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs md:text-sm text-muted-foreground/50">
            <span>© 2026 Método VELOX™</span>
            <span className="w-[1px] h-3 bg-border/20" />
            <span>Todos os direitos reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
