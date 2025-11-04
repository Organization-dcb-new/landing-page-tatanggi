import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { BusinessLicense } from "./components/BusinessLicense";
import { OurPartners } from "./components/OurPartners";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ServiceDetail } from "./components/ServiceDetail";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "service">("home");
  const [selectedService, setSelectedService] = useState<string>("");

  useEffect(() => {
    if (currentView === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentView]);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentView("service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedService("");
  };

  const handleNavigationFromService = (section: string) => {
    // Navigate back to home first
    setCurrentView("home");
    setSelectedService("");

    // Then scroll to the section after a short delay
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (currentView === "service" && selectedService) {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={handleNavigationFromService} />
        <ServiceDetail serviceId={selectedService} onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection onServiceClick={handleServiceClick} />
      <BusinessLicense />
      <OurPartners />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
