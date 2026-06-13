import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AccentSection from "@/components/AccentSection";
import ScootersSection from "@/components/ScootersSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <AccentSection />
        <ScootersSection />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
