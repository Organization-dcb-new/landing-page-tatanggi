import { motion } from "motion/react";

import komdigi from "@/assets/komdigi.png";
import redpay from "@/assets/redpay.png";
import bi from "@/assets/bi.png";
import aspi from "@/assets/aspi.png";
import apjii from "@/assets/apjii.png";
import oss from "@/assets/oss.png";

type LicenseLogo = {
  name: string;
  src: string;
};

export function BusinessLicense() {
  const licenseLogos: LicenseLogo[] = [
    { name: "KOMDIGI", src: komdigi },
    { name: "REPAY / Payment", src: redpay },
    { name: "Bank Indonesia", src: bi },
    { name: "ASPI", src: aspi },
    { name: "APJII", src: apjii },
    { name: "OSS", src: oss },
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

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-8">
          {licenseLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className=" rounded-lg p-3 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ scale: 1.04 }}
              viewport={{ once: true }}
              aria-label={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                className={`${
                  logo.name === "KOMDIGI" ? "h-18 md:h-18" : "h-16 md:h-20"
                } w-auto object-contain`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
