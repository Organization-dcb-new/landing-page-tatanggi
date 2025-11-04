import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  Target,
  TrendingUp,
  MessageSquare,
  Mail,
  Phone,
  Video,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

export function ServiceDetail({ serviceId, onBack }: ServiceDetailProps) {
  const servicesData: Record<string, any> = {
    messaging: {
      title: "Messaging Service",
      tagline: "Connect With Your Customers in Real-Time",
      image:
        "https://images.unsplash.com/photo-1760349748488-bd2a7ef25ea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbWVzc2FnaW5nJTIwYXBwfGVufDF8fHx8MTc2MTg5MjcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Our messaging service provides businesses with a reliable and scalable platform to connect with their customers in real time. From SMS marketing campaigns and OTP verifications to transactional notifications and customer engagement, we deliver secure, fast, and cost-efficient communication solutions. With robust infrastructure, multi-operator connectivity, and advanced delivery analytics, our service ensures that every message reaches its audience with maximum impact.",
      keyFeatures: [
        "SMS (OTP, Notification, Marketing, Location-Based Advertising)",
        "RCS Service - Rich Communication Service",
        "Email (OTP, Marketing)",
        "WhatsApp Official (Utilities, OTP, Marketing, Service)",
        "Voice (SIP Trunk, Cloud PBX, Voice Broadcast)",
        "Global reach covering 261+ countries worldwide",
        "SMPP and API support for seamless integration",
        "Advanced delivery analytics and reporting",
        "Multi-channel messaging platform",
      ],
      channels: [
        {
          name: "SMS",
          items: [
            "OTP / One Time Password",
            "Notification",
            "Marketing",
            "Location Based Advertising",
          ],
        },
        {
          name: "EMAIL",
          items: ["Email Otp", "Email Marketing"],
        },
        {
          name: "WhatsApp Official",
          items: ["Utilities", "OTP", "Marketing", "Service"],
        },
        {
          name: "Voice",
          items: ["SIP Trunk", "Cloud PBX", "Voice Broadcast"],
        },
      ],
      benefits: [
        {
          title: "Real-Time Delivery",
          description:
            "Messages delivered instantly with high success rates and real-time delivery reports.",
        },
        {
          title: "Global Coverage",
          description:
            "Reach customers in 261+ countries with our extensive network partnerships.",
        },
        {
          title: "Seamless Integration",
          description:
            "Easy API integration with SMPP support for your existing systems and applications.",
        },
      ],
      approach: [
        "Deploy secure and scalable messaging infrastructure",
        "Ensure compliance with telecommunications regulations",
        "Provide 24/7 technical support and monitoring",
        "Optimize message routing for best delivery rates",
        "Deliver comprehensive analytics and insights",
      ],
      stats: [
        { value: "261+", label: "Countries" },
        { value: "99.9%", label: "Uptime" },
        { value: "10M+", label: "Messages/Day" },
      ],
    },
    media: {
      title: "Media Advertising",
      tagline: "Amplify Your Brand Reach",
      image:
        "https://images.unsplash.com/photo-1760443405944-01ea6ed561a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBiaWxsYm9hcmR8ZW58MXx8fHwxNzYxODkyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Our media advertising services combine traditional and digital channels to maximize your brand visibility and engagement. We create comprehensive campaigns that reach your target audience across multiple touchpoints, driving awareness, engagement, and conversions.",
      keyFeatures: [
        "Digital Display Advertising",
        "Social Media Marketing",
        "Video Advertising & Production",
        "Out-of-Home (OOH) Advertising",
        "Programmatic Advertising",
        "Content Marketing & Creation",
        "Influencer Marketing",
        "Media Planning & Buying",
      ],
      benefits: [
        {
          title: "Multi-Channel Reach",
          description:
            "Comprehensive coverage across digital, social, video, and traditional media channels.",
        },
        {
          title: "Data-Driven Campaigns",
          description:
            "Leverage analytics and insights to optimize campaign performance and ROI.",
        },
        {
          title: "Creative Excellence",
          description:
            "Professional creative team delivering compelling content that resonates with audiences.",
        },
      ],
      approach: [
        "Conduct thorough market and audience research",
        "Develop comprehensive media strategies",
        "Create engaging and memorable creative content",
        "Execute campaigns across optimal channels",
        "Monitor, analyze, and optimize performance",
      ],
      stats: [
        { value: "100+", label: "Campaigns" },
        { value: "50M+", label: "Impressions" },
        { value: "3x", label: "Avg ROI" },
      ],
    },
    connectivity: {
      title: "Connectivity Services",
      tagline: "Seamless Network Solutions",
      image:
        "https://images.unsplash.com/photo-1582648872106-71a64a70af6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGl2aXR5JTIwZmliZXJ8ZW58MXx8fHwxNzYxODkyNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Providing high-speed internet, dedicated lines, and comprehensive network solutions to ensure your business stays connected. Our connectivity services offer reliable, secure, and scalable network infrastructure tailored to your business needs.",
      keyFeatures: [
        "Dedicated Internet Access",
        "MPLS Network Solutions",
        "Fiber Optic Connectivity",
        "SD-WAN Services",
        "VPN & Secure Connections",
        "Bandwidth Management",
        "Network Redundancy",
        "24/7 Network Monitoring",
      ],
      benefits: [
        {
          title: "High Performance",
          description:
            "Ultra-fast connectivity with guaranteed bandwidth and low latency for business operations.",
        },
        {
          title: "Reliability",
          description:
            "Enterprise-grade SLA with redundant infrastructure ensuring maximum uptime.",
        },
        {
          title: "Scalability",
          description:
            "Flexible bandwidth options that grow with your business requirements.",
        },
      ],
      approach: [
        "Assess business connectivity requirements",
        "Design optimal network architecture",
        "Implement secure and scalable solutions",
        "Provide ongoing monitoring and support",
        "Ensure compliance with industry standards",
      ],
      stats: [
        { value: "99.95%", label: "Uptime SLA" },
        { value: "500+", label: "Enterprises" },
        { value: "10Gbps", label: "Max Speed" },
      ],
    },
    infrastructure: {
      title: "Infrastructure Services",
      tagline: "Building Robust IT Foundations",
      image:
        "https://images.unsplash.com/photo-1759912497669-f2b90b1d3fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbiUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MTg5MTcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Enterprise-grade IT infrastructure solutions designed to support your business growth. We provide comprehensive infrastructure services from network design to implementation and optimization.",
      keyFeatures: [
        "Network Design & Architecture",
        "Server Infrastructure Setup",
        "Storage Solutions",
        "Virtualization Services",
        "Disaster Recovery Planning",
        "Infrastructure Migration",
        "Capacity Planning",
        "Performance Optimization",
      ],
      benefits: [
        {
          title: "Expert Design",
          description:
            "Professional infrastructure architecture tailored to your business requirements.",
        },
        {
          title: "Scalable Solutions",
          description:
            "Infrastructure that adapts and grows with your business needs.",
        },
        {
          title: "Cost Efficiency",
          description:
            "Optimized resource utilization reducing operational costs.",
        },
      ],
      approach: [
        "Comprehensive infrastructure assessment",
        "Design scalable and secure architecture",
        "Implement with minimal business disruption",
        "Test and validate all systems",
        "Provide documentation and training",
      ],
      stats: [
        { value: "200+", label: "Projects" },
        { value: "99%", label: "Success Rate" },
        { value: "15+", label: "Years Exp." },
      ],
    },
    managed: {
      title: "Managed Services",
      tagline: "Complete IT Management",
      image:
        "https://images.unsplash.com/photo-1761839922047-fc58829aab61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzYxODY4NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "End-to-end IT management services to monitor, maintain, and optimize your technology infrastructure 24/7. Our managed services let you focus on your core business while we handle all IT operations.",
      keyFeatures: [
        "24/7 Infrastructure Monitoring",
        "Proactive Maintenance",
        "Help Desk Support",
        "Patch Management",
        "Backup & Recovery",
        "Security Management",
        "Performance Reporting",
        "Vendor Management",
      ],
      benefits: [
        {
          title: "Reduced Downtime",
          description:
            "Proactive monitoring and maintenance minimizing system interruptions.",
        },
        {
          title: "Cost Savings",
          description:
            "Predictable monthly costs without the need for in-house IT team.",
        },
        {
          title: "Expert Support",
          description:
            "Access to certified IT professionals available round-the-clock.",
        },
      ],
      approach: [
        "Onboard and assess current IT environment",
        "Implement monitoring and management tools",
        "Establish service level agreements (SLA)",
        "Provide continuous monitoring and support",
        "Regular reporting and optimization",
      ],
      stats: [
        { value: "24/7", label: "Support" },
        { value: "150+", label: "Clients" },
        { value: "95%", label: "Satisfaction" },
      ],
    },
    datacenter: {
      title: "Data Center & Cloud Services",
      tagline: "Secure & Scalable Infrastructure",
      image:
        "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjE4NzkzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Secure data center hosting and cloud computing solutions with high availability, redundancy, and scalable infrastructure. Our facilities provide enterprise-grade security and reliability.",
      keyFeatures: [
        "Colocation Services",
        "Cloud Hosting (IaaS, PaaS, SaaS)",
        "Disaster Recovery as a Service (DRaaS)",
        "Backup Solutions",
        "Virtual Private Servers (VPS)",
        "Dedicated Servers",
        "Tier III Data Centers",
        "Multi-Cloud Management",
      ],
      benefits: [
        {
          title: "Maximum Uptime",
          description:
            "Tier III certified data centers with 99.99% uptime guarantee.",
        },
        {
          title: "Enhanced Security",
          description:
            "Physical and digital security measures protecting your critical data.",
        },
        {
          title: "Flexible Scaling",
          description:
            "Scale resources up or down based on your business demands.",
        },
      ],
      approach: [
        "Understand business requirements and compliance needs",
        "Design optimal hosting and cloud architecture",
        "Migrate data with zero downtime strategies",
        "Implement security and monitoring",
        "Provide ongoing management and optimization",
      ],
      stats: [
        { value: "99.99%", label: "Uptime" },
        { value: "Tier III", label: "Certified" },
        { value: "1000+", label: "Servers" },
      ],
    },
    payment: {
      title: "Payment Gateway",
      tagline: "Secure Payment Processing",
      image:
        "https://images.unsplash.com/photo-1712331393877-995589f20106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwY2FyZCUyMHRlcm1pbmFsfGVufDF8fHx8MTc2MTg5MjcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Comprehensive payment gateway solutions enabling businesses to accept payments securely across multiple channels and methods. Our platform supports various payment types with advanced fraud prevention.",
      keyFeatures: [
        "Credit & Debit Card Processing",
        "Digital Wallet Integration",
        "Bank Transfer & Virtual Account",
        "QR Code Payments",
        "Installment Options",
        "Multi-Currency Support",
        "Fraud Detection System",
        "PCI DSS Compliance",
      ],
      benefits: [
        {
          title: "Multiple Payment Methods",
          description:
            "Support for all major payment methods increasing conversion rates.",
        },
        {
          title: "Secure Transactions",
          description:
            "Bank-level encryption and PCI DSS compliance ensuring payment security.",
        },
        {
          title: "Fast Settlement",
          description: "Quick fund settlement with transparent fee structure.",
        },
      ],
      approach: [
        "Integration with existing e-commerce platform",
        "Configure payment methods and currencies",
        "Implement security and compliance measures",
        "Test all payment scenarios",
        "Provide ongoing support and monitoring",
      ],
      stats: [
        { value: "$500M+", label: "Processed" },
        { value: "99.9%", label: "Success Rate" },
        { value: "20+", label: "Payment Methods" },
      ],
    },
    utilities: {
      title: "Utilities Service",
      tagline: "Smart Utility Management",
      image:
        "https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwcmVuZXdhYmxlJTIwZW5lcmd5fGVufDF8fHx8MTc2MTg4NDM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Integrated utility management solutions for efficient monitoring, billing, and management of electricity, water, and other utility services. Our platform streamlines operations and improves customer service.",
      keyFeatures: [
        "Smart Metering Systems",
        "Automated Billing",
        "Consumption Monitoring",
        "Mobile & Web Portals",
        "Payment Integration",
        "Analytics & Reporting",
        "Alert & Notification System",
        "Customer Self-Service",
      ],
      benefits: [
        {
          title: "Operational Efficiency",
          description:
            "Automated processes reducing manual work and operational costs.",
        },
        {
          title: "Real-Time Monitoring",
          description: "Track consumption and detect anomalies in real-time.",
        },
        {
          title: "Improved Service",
          description:
            "Enhanced customer experience with self-service capabilities.",
        },
      ],
      approach: [
        "Deploy smart metering infrastructure",
        "Integrate billing and payment systems",
        "Implement customer portals",
        "Set up monitoring and analytics",
        "Train staff and provide support",
      ],
      stats: [
        { value: "100K+", label: "Meters" },
        { value: "98%", label: "Accuracy" },
        { value: "50+", label: "Utilities" },
      ],
    },
    iot: {
      title: "IOT (Internet of Things)",
      tagline: "Connected Smart Solutions",
      image:
        "https://images.unsplash.com/photo-1722491237456-0e36655813c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBzbWFydCUyMGRldmljZXN8ZW58MXx8fHwxNzYxNzg2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Internet of Things solutions connecting devices, sensors, and systems to enable smart automation, real-time monitoring, and data-driven decision making across industries.",
      keyFeatures: [
        "IoT Platform & Infrastructure",
        "Device Management",
        "Sensor Integration",
        "Real-Time Data Analytics",
        "Edge Computing",
        "IoT Security",
        "Predictive Maintenance",
        "Custom IoT Applications",
      ],
      benefits: [
        {
          title: "Smart Automation",
          description:
            "Automate processes based on real-time data from connected devices.",
        },
        {
          title: "Data Insights",
          description:
            "Collect and analyze data for actionable business intelligence.",
        },
        {
          title: "Operational Excellence",
          description:
            "Optimize operations through predictive analytics and monitoring.",
        },
      ],
      approach: [
        "Identify IoT use cases and requirements",
        "Select and deploy appropriate sensors/devices",
        "Build secure IoT infrastructure",
        "Implement analytics and automation",
        "Continuous monitoring and optimization",
      ],
      stats: [
        { value: "10K+", label: "Devices" },
        { value: "50+", label: "Projects" },
        { value: "15", label: "Industries" },
      ],
    },
    cybersecurity: {
      title: "Cyber Security",
      tagline: "Protecting Your Digital Assets",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzYxODUwMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Comprehensive cybersecurity solutions to protect your organization from evolving threats. Our services include threat detection, prevention, and response to safeguard your critical assets and ensure business continuity.",
      keyFeatures: [
        "Security Operations Center (SOC)",
        "Threat Intelligence & Detection",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Firewall & Network Security",
        "Endpoint Protection",
        "Security Awareness Training",
        "Compliance & Audit Support",
      ],
      benefits: [
        {
          title: "Proactive Protection",
          description:
            "24/7 monitoring and threat detection preventing security breaches.",
        },
        {
          title: "Compliance Assurance",
          description:
            "Meet regulatory requirements and industry security standards.",
        },
        {
          title: "Rapid Response",
          description:
            "Quick incident response minimizing damage and recovery time.",
        },
      ],
      approach: [
        "Conduct comprehensive security assessment",
        "Identify vulnerabilities and risks",
        "Implement multi-layered security controls",
        "Monitor and respond to threats 24/7",
        "Regular testing and security updates",
      ],
      stats: [
        { value: "24/7", label: "SOC" },
        { value: "99.9%", label: "Threat Detection" },
        { value: "200+", label: "Clients Protected" },
      ],
    },
    trading: {
      title: "General Trade Company",
      tagline: "Global Trade Solutions",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjB0cmFkaW5nJTIwZ29vZHN8ZW58MXx8fHwxNzYxODkyNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Comprehensive trading services facilitating international commerce across diverse sectors. We connect suppliers and buyers, manage logistics, and ensure smooth transaction processes for various commodities and products.",
      keyFeatures: [
        "Import & Export Services",
        "Commodity Trading",
        "Supply Chain Management",
        "Logistics Coordination",
        "Custom Clearance",
        "Trade Financing",
        "Quality Assurance",
        "Market Intelligence",
      ],
      benefits: [
        {
          title: "Global Network",
          description:
            "Extensive network of suppliers and buyers across multiple countries.",
        },
        {
          title: "End-to-End Service",
          description: "Complete trading solutions from sourcing to delivery.",
        },
        {
          title: "Risk Mitigation",
          description:
            "Professional management reducing trading and logistics risks.",
        },
      ],
      approach: [
        "Identify reliable suppliers and buyers",
        "Negotiate favorable terms and conditions",
        "Coordinate logistics and documentation",
        "Ensure quality control and compliance",
        "Provide post-transaction support",
      ],
      stats: [
        { value: "30+", label: "Countries" },
        { value: "$100M+", label: "Trade Volume" },
        { value: "500+", label: "Products" },
      ],
    },
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-slate-900 mb-4">Service not found</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    onBack();
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-24 left-4 lg:left-8 z-40">
        <Button
          variant="outline"
          onClick={onBack}
          className="bg-white shadow-md hover:shadow-lg">
          <ArrowLeft className="mr-2" size={20} />
          Back
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-600 text-white border-0">
            {service.tagline}
          </Badge>
          <h1 className="text-white mb-6">{service.title}</h1>
          <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {service.stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-white mb-1">{stat.value}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-blue-600" size={24} />
              <h2 className="text-slate-900">Key Features</h2>
            </div>
            <p className="text-slate-600 mb-12 max-w-3xl">
              Our comprehensive {service.title.toLowerCase()} covers all aspects
              you need for success.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.keyFeatures.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            {/* Special section for Messaging Service channels */}
            {serviceId === "messaging" && service.channels && (
              <div className="mt-16">
                <h3 className="text-slate-900 mb-8">Communication Channels</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {service.channels.map((channel: any, index: number) => (
                    <Card
                      key={index}
                      className="p-6 border-blue-200 bg-blue-50/50">
                      <h4 className="text-blue-900 mb-4">{channel.name}</h4>
                      <div className="space-y-2">
                        {channel.items.map(
                          (item: string, itemIndex: number) => (
                            <div
                              key={itemIndex}
                              className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <p className="text-slate-700">{item}</p>
                            </div>
                          )
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-blue-600" size={24} />
              <h2 className="text-slate-900">Benefits & Impact</h2>
            </div>
            <p className="text-slate-600 mb-12 max-w-3xl">
              Discover how our {service.title.toLowerCase()} creates tangible
              value for your business.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {service.benefits.map((benefit: any, index: number) => (
                <Card key={index} className="p-8 border-slate-200 bg-white">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-blue-600" size={24} />
              <h2 className="text-slate-900">Our Approach</h2>
            </div>
            <p className="text-slate-600 mb-12 max-w-3xl">
              We follow a systematic and proven methodology to ensure successful
              outcomes.
            </p>

            <div className="space-y-4">
              {service.approach.map((step: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss how our {service.title.toLowerCase()} can help you
            achieve your business objectives and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-blue-50">
              Contact Our Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onBack}
              className="bg-transparent text-white border-white hover:bg-white/10">
              Explore Other Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
