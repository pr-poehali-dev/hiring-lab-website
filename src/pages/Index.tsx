import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CasesSection from "@/components/CasesSection";
import PricingSection from "@/components/PricingSection";
import TrustSection from "@/components/TrustSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ApproachSection />
      <ServicesSection />
      <WhyUsSection />
      <CasesSection />
      <PricingSection />
      <TrustSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
