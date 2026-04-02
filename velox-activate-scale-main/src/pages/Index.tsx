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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
};

export default Index;
