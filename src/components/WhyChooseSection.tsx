import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseSection() {
  const reasons = [
    {
      title: "Diversified Expertise",
      description:
        "Strong presence across telecommunications, media, IT, fintech, trading, and healthcare.",
    },
    {
      title: "Proven Reliability",
      description:
        "Trusted by partners for consistent quality and on-time delivery.",
    },
    {
      title: "Innovation Driven",
      description:
        "Embracing technology and new ideas to create smarter solutions.",
    },
    {
      title: "Customer-Centric",
      description:
        "Focused on building long-term relationships through tailored services.",
    },
    {
      title: "Integrity & Trust",
      description:
        "Guided by professionalism, transparency, and sustainable growth.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <img
              src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjE4OTE0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Partnership"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-slate-900 mb-6">
              Your Trusted Partner for Growth
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We combine financial strength with strategic insight to deliver
              exceptional results. Our commitment to excellence and innovation
              sets us apart in the investment landscape.
            </p>

            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}>
                  <CheckCircle2
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="text-slate-900">
                      <span className="font-semibold">{reason.title}</span> –{" "}
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
