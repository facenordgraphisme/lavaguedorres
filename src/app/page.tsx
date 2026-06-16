import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import PhotoGallery from "@/components/PhotoGallery";
import Prestations from "@/components/Prestations";
import AboutAndFaq from "@/components/AboutAndFaq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <InfoSection />
        <PhotoGallery />
        <Prestations />
        <AboutAndFaq />
      </main>
      <Footer />
    </div>
  );
}


