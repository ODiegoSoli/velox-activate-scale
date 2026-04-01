import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ChaosSection from "@/components/ChaosSection";
import ProblemSection from "@/components/ProblemSection";
import AuthoritySection from "@/components/AuthoritySection";
import SolutionSection from "@/components/SolutionSection";
import StepByStepSection from "@/components/StepByStepSection";
import TransformationSection from "@/components/TransformationSection";
import ImpactSection from "@/components/ImpactSection";
import FilterSection from "@/components/FilterSection";
import FinalCTASection from "@/components/FinalCTASection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import MouseGlow from "@/components/MouseGlow";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <div className="min-h-screen noise grid-bg">
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <MouseGlow />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <StickyHeader />
        <HeroSection />
        <ChaosSection />
        <ProblemSection />
        <AuthoritySection />
        <SolutionSection />
        <StepByStepSection />
        <TransformationSection />
        <ImpactSection />
        <FilterSection />
        <FinalCTASection />
        <ClosingSection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
