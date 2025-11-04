import React from "react";
import {
  MessageSquare,
  Megaphone,
  Network,
  Building,
  Settings,
  Cloud,
  CreditCard,
  Zap,
  Cpu,
  Shield,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface ServicesSectionProps {
  onServiceClick: (serviceId: string) => void;
}

export function ServicesSection({ onServiceClick }: ServicesSectionProps) {
  const services = [
    {
      id: "messaging",
      icon: MessageSquare,
      title: "Messaging Service",
      description:
        "Reliable platform for SMS, RCS, Email, WhatsApp, and Voice communications with global reach and advanced delivery analytics.",
    },
    {
      id: "media",
      icon: Megaphone,
      title: "Media Advertising",
      description:
        "Comprehensive digital and traditional advertising solutions to amplify your brand and reach target audiences effectively.",
    },
    {
      id: "connectivity",
      icon: Network,
      title: "Connectivity Services",
      description:
        "High-speed internet, dedicated lines, and network solutions ensuring seamless connectivity for your business operations.",
    },
    {
      id: "infrastructure",
      icon: Building,
      title: "Infrastructure Services",
      description:
        "Enterprise-grade IT infrastructure solutions including network design, implementation, and optimization.",
    },
    {
      id: "managed",
      icon: Settings,
      title: "Managed Services",
      description:
        "End-to-end IT management services to monitor, maintain, and optimize your technology infrastructure 24/7.",
    },
    {
      id: "datacenter",
      icon: Cloud,
      title: "Data Center & Cloud Services",
      description:
        "Secure data center hosting and cloud computing solutions with high availability and scalable infrastructure.",
    },
    {
      id: "payment",
      icon: CreditCard,
      title: "Payment Gateway",
      description:
        "Secure and efficient payment processing solutions supporting multiple payment methods and currencies.",
    },
    {
      id: "utilities",
      icon: Zap,
      title: "Utilities Service",
      description:
        "Integrated utility management solutions for efficient resource monitoring and billing systems.",
    },
    {
      id: "iot",
      icon: Cpu,
      title: "IOT",
      description:
        "Internet of Things solutions connecting devices and systems for smart automation and data-driven insights.",
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your digital assets from threats and ensure compliance.",
    },
    {
      id: "trading",
      icon: ShoppingCart,
      title: "General Trade Company",
      description:
        "Trading services across diverse sectors, facilitating international commerce and supply chain management.",
    },
  ];

  const stats = [
    { value: "200+", label: "Active Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4">
            Core Business
          </div>
          <h2 className="text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Aura Tatanggi Investama manages a diversified portfolio in
            telecommunications, media, IT solutions, fintech, and general
            trading. Through these sectors, we create synergy, foster
            innovation, and deliver sustainable value for stakeholders and
            communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <Card
                className="p-6 gap-4 hover:shadow-xl  transition-all duration-300 hover:-translate-y-1 border-slate-200 bg-white group cursor-pointer"
                onClick={() => onServiceClick(service.id)}>
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-slate-900 ">{service.title}</h3>
                <p className="text-slate-600 mb-3">{service.description}</p>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <div className="text-white mb-2">{stat.value}</div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
