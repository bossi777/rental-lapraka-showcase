import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarCatalog from "@/components/CarCatalog";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <CarCatalog />
        <ContactSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
