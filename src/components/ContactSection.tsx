import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@auratatanggi.com",
      link: "mailto:artika@auratatanggi.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 852-2166-3644",
      link: "tel:+622112345678",
    },
    {
      icon: MapPin,
      title: "Office",
      value:
        "Jl Damai I Cipete Utara, RT. 005 RW. 001 Kebayoran Baru, Jakarta Selatan.",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4">
            Contact Us
          </div>
          <h2 className="text-slate-900 mb-4">Let's Start a Conversation</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ready to explore partnership opportunities? Get in touch with our
            team to discuss how we can help drive your business forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <Card className="p-6 border-slate-200 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-900 hover:text-blue-600 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}>
              <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
                <h3 className="text-white mb-2">Office Hours</h3>
                <p className="text-blue-100">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM WIB
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <Card className="p-8 border-slate-200 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-slate-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-slate-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      className="border-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+62 xxx xxxx xxxx"
                      className="border-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                    className="border-slate-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg">
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
