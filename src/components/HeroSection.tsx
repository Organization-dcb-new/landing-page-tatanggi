import heroImage from "../assets/306e3d2c1e3084d225db198a542dcd587dda5c4f.png";

import { motion } from "motion/react";

export function HeroSection() {
  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}>
        <img
          src={heroImage}
          alt="Corporate Buildings"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/50"></div>
      </motion.div>

      {/* Content */}
      {/* <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-white/90 mb-6 tracking-widest">
          Empowering Growth Across Industries.
        </p>
        
        <h1 className="text-white mb-8 tracking-[0.3em] max-w-5xl mx-auto">
          COMPANY
          <br />
          <span className="inline-block mt-2">PROFILE</span>
        </h1>

        <p className="text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Leading the way in strategic investments and business development across multiple sectors. 
          We partner with visionaries to create sustainable growth and lasting impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('about')}
            className="bg-blue-600 hover:bg-blue-700 group"
          >
            Learn More
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900"
          >
            Contact Us
          </Button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-between items-end px-4 lg:px-8">
          <p className="text-white/60 text-sm">presented by</p>
          <p className="text-white tracking-wide">aura tatanggi investama</p>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
