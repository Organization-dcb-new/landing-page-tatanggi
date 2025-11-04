import React from "react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "Business License", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
    services: [
      { label: "Messaging Service", href: "#services" },
      { label: "Media Advertising", href: "#services" },
      { label: "Connectivity Services", href: "#services" },
      { label: "Infrastructure Services", href: "#services" },
      { label: "Managed Services", href: "#services" },
      { label: "Data Center & Cloud", href: "#services" },
    ],
    moreServices: [
      { label: "Payment Gateway", href: "#services" },
      { label: "Utilities Service", href: "#services" },
      { label: "IOT Solutions", href: "#services" },
      { label: "Cyber Security", href: "#services" },
      { label: "General Trading", href: "#services" },
    ],
  };

  // const socialLinks = [
  //   { icon: Linkedin, href: "#", label: "LinkedIn" },
  //   { icon: Twitter, href: "#", label: "Twitter" },
  //   { icon: Facebook, href: "#", label: "Facebook" },
  //   { icon: Instagram, href: "#", label: "Instagram" },
  // ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-white mb-4 tracking-wider">
              AURA TATANGGI INVESTAMA
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              A dynamic holding group committed to driving growth, innovation,
              and sustainability across telecommunications, media, IT solutions,
              fintech, and general trading.
            </p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div> */}
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h4 className="text-white mb-4">Core Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <h4 className="text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.moreServices.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>
          <p className="text-slate-400">
            © {currentYear} Aura Tatanggi Investama. All rights reserved.
          </p>
          {/* <p className="text-slate-500">Designed with excellence in mind</p> */}
        </motion.div>
      </div>
    </footer>
  );
}
