import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FloatingCollage from "@/components/FloatingCollage";
import MarqueeStrip from "@/components/MarqueeStrip";
import SelectedProjects from "@/components/SelectedProjects";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import Services from "@/components/Services";
import InstagramGrid from "@/components/InstagramGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <FloatingCollage />
        <MarqueeStrip />
        <SelectedProjects />
        <DesignPhilosophy />
        <Services />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
