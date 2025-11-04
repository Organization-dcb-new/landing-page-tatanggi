import {
  Brain,
  ClipboardCheck,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="bg-slate-100">
      {/* About Us Main Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <h2 className="text-blue-600 mb-8">About Us</h2>
              <p className="text-slate-700 mb-6 leading-relaxed text-justify">
                <span className="font-semibold">Aura Tatanggi Investama</span>{" "}
                is a dynamic holding group committed to driving growth,
                innovation, and sustainability across diverse industries. With a
                strong presence in telecommunication infrastructure, media
                advertising, IT solutions, fintech, and general trading, we
                bring together expertise, resources, and strategic vision to
                create long-term value for our stakeholders.
              </p>
              <p className="text-slate-700 leading-relaxed text-justify">
                At the core of our philosophy is the belief that progress comes
                from synergy and innovation. By empowering our subsidiaries with
                strategic guidance, financial strength, and a shared vision,
                Aura Tatanggi Investama ensures that each business unit not only
                thrives in its own sector but also contributes to a stronger,
                more integrated ecosystem.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE4NTIwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Architecture"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto relative">
            {/* Vision */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <motion.div
                className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}>
                <Brain className="text-white" size={40} strokeWidth={1.5} />
              </motion.div>
              <h2 className="text-blue-600 mb-6">Vision</h2>
              <p className="text-slate-700 leading-relaxed text-justify">
                Aura Tatanggi Investama envisions becoming a leading and trusted
                holding group that drives progress across multiple industries.
                We aspire to unite innovation, integrity, and sustainability in
                every business we nurture—ranging from telecommunications and
                media to technology, finance, and trade.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 transform -translate-x-1/2"></div>

            {/* Mission */}
            <motion.div
              className="text-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              <motion.div
                className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}>
                <ClipboardCheck
                  className="text-white"
                  size={40}
                  strokeWidth={1.5}
                />
              </motion.div>
              <h2 className="text-blue-600 mb-6">Mission</h2>
              <p className="text-slate-700 leading-relaxed text-justify">
                Aura Tatanggi Investama is dedicated to driving growth and
                innovation across its diverse business portfolio. By providing
                strategic direction, resources, and synergy among our
                subsidiaries in telecommunications, media, IT solutions,
                fintech, and trading, we aim to create sustainable value and
                lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            Innovation
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <p className="text-white leading-relaxed text-justify">
                We believe that progress comes from continuously exploring new
                ideas, embracing technology, and creating smarter solutions
                across our diverse business sectors. From advancing
                telecommunication infrastructure and developing digital
                platforms to delivering modern IT solutions, fintech services,
                and efficient trading systems, we are committed to transforming
                challenges into opportunities.
              </p>
            </motion.div>

            {/* Innovation Path Diagram */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}>
              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%">
                    <stop
                      offset="0%"
                      style={{
                        stopColor: "rgba(255,255,255,0.3)",
                        stopOpacity: 1,
                      }}
                    />
                    <stop
                      offset="100%"
                      style={{
                        stopColor: "rgba(255,255,255,0.6)",
                        stopOpacity: 1,
                      }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M 60 340 Q 150 280, 180 220 T 300 140 Q 380 80, 480 60"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Points */}
              <div className="relative space-y-10" style={{ zIndex: 1 }}>
                {/* Point 1 - Bottom */}
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}>
                  <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                    <Lightbulb className="text-blue-600" size={26} />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-white mb-1">Innovation for Progress</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Transforming ideas into impactful solutions across
                      industries.
                    </p>
                  </div>
                </motion.div>

                {/* Point 2 - Middle Left */}
                <motion.div
                  className="flex items-start gap-4 ml-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}>
                  <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                    <Users className="text-blue-600" size={26} />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-white mb-1">Collaboration & Synergy</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Uniting strengths to achieve collective success.
                    </p>
                  </div>
                </motion.div>

                {/* Point 3 - Middle Right */}
                <motion.div
                  className="flex items-start gap-4 ml-32"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}>
                  <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                    <TrendingUp className="text-blue-600" size={26} />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-white mb-1">Sustainable Growth</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Creating value that lasts for stakeholders and
                      communities.
                    </p>
                  </div>
                </motion.div>

                {/* Point 4 - Top Right */}
                <motion.div
                  className="flex items-start gap-4 ml-48"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}>
                  <div className="w-14 h-14 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
                    <Target className="text-blue-600" size={26} />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-white mb-1">
                      Commitment to Excellence
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Delivering quality and reliability in every endeavor.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
