import { motion } from "motion/react";

export function BusinessLicense() {
  const licenses = [
    { name: "KOMDIGI", subtitle: "Kementerian Komunikasi dan Digital" },
    { name: "REDPAY", subtitle: "Payment Gateway License" },
    { name: "BANK INDONESIA", subtitle: "Financial Services Authority" },
    {
      name: "ASPI",
      subtitle: "Asosiasi Penyelenggara Jasa Internet Indonesia",
    },
    {
      name: "APJII",
      subtitle: "Asosiasi Penyelenggara Jasa Internet Indonesia",
    },
    { name: "OSS", subtitle: "Online Single Submission" },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-blue-600 mb-4">Business License</h2>
          <p className="text-slate-700 max-w-3xl mx-auto text-lg">
            Active interactions with industry standard setting committees and
            communities.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {licenses.map((license, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center min-h-[160px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}>
              <div
                className="text-slate-800 mb-2"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}>
                {license.name}
              </div>
              <div className="text-slate-500" style={{ fontSize: "0.875rem" }}>
                {license.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
