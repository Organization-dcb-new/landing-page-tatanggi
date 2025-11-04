import { motion } from "motion/react";

export function OurPartners() {
  const partners = [
    { name: "HUAWEI", category: "Technology Partner" },
    { name: "VODAFONE", category: "Telecom Partner" },
    { name: "SMARTFREN", category: "Telecom Partner" },
    { name: "XL AXIATA", category: "Telecom Partner" },
    { name: "TELKOMSEL", category: "Telecom Partner" },
    { name: "INDOSAT OOREDOO", category: "Telecom Partner" },
    { name: "OVO", category: "Fintech Partner" },
    { name: "BANK MANDIRI", category: "Banking Partner" },
    { name: "BCA", category: "Banking Partner" },
    { name: "BRI", category: "Banking Partner" },
    { name: "BNI", category: "Banking Partner" },
    { name: "CIMB NIAGA", category: "Banking Partner" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <motion.h2
            className="text-blue-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            Our Partners
          </motion.h2>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors duration-300 flex flex-col items-center justify-center text-center min-h-[140px] border border-slate-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -5 }}
                viewport={{ once: true }}>
                <div
                  className="text-slate-800 mb-2"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}>
                  {partner.name}
                </div>
                <div
                  className="text-slate-500"
                  style={{ fontSize: "0.813rem" }}>
                  {partner.category}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-slate-700 max-w-4xl leading-relaxed text-lg text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            Choosing us means choosing scalability, security, and
            success—powered by a team that understands the pulse of the global
            telco and fintech landscape.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
