import { motion } from "motion/react";

// Logo imports
import telkomsel from "@/assets/telkomsel.png";
import indosat from "@/assets/indosat.png";
import xlsmart from "@/assets/XLSmart.png";
import smart from "@/assets/smart.png";
import vodafone from "@/assets/Vodafone_logo_PNG7.png";
import telkomindonesia from "@/assets/telkomindonesia.png";
import kddi from "@/assets/kddi.png";
import maxis from "@/assets/maxis.png";
import singtel from "@/assets/singtel.png";
import gojek from "@/assets/gojek.png";
import gopay from "@/assets/gopay.png";
import ovo from "@/assets/ovo.png";
import dana from "@/assets/dana.png";
import shopeepay from "@/assets/shopeepay.png";
import linkaja from "@/assets/linkaja.png";
import mandiri from "@/assets/mandiri.png";
import bca from "@/assets/bca-logo.png";
import bri from "@/assets/bri.webp";
import panin from "@/assets/paninbank.png";
import permata from "@/assets/permata.png";
import visa from "@/assets/visa.png";
import mastercard from "@/assets/mastercard.png";
import unionpay from "@/assets/unionpay.png";
import alipaywechat from "@/assets/Alipaywechat.webp";
import safaricom from "@/assets/safaricom.png";
import telefonica from "@/assets/telefonica.png";
import aws from "@/assets/aws.png";
import unilever from "@/assets/unilever.png";
import shopify from "@/assets/shopify.png";
import mtn from "@/assets/mtn.png";
import ntt from "@/assets/ntt.png";
import celcomdigi from "@/assets/celcomdigi.png";
import chinamobile from "@/assets/chinamobile.png";
import chinatel from "@/assets/chinatel.png";
import viettel from "@/assets/viettel.png";
import huawei from "@/assets/huawei.png";

type PartnerLogo = {
  name: string;
  src: string;
};

export function OurPartners() {
  const partnerLogos: PartnerLogo[] = [
    { name: "Telkomsel", src: telkomsel },
    { name: "Indosat Ooredoo", src: indosat },
    { name: "XL / Smartfren", src: xlsmart },
    { name: "Smart (Cambodia)", src: smart },
    { name: "Vodafone", src: vodafone },
    { name: "Telkom Indonesia", src: telkomindonesia },
    { name: "KDDI", src: kddi },
    { name: "Maxis", src: maxis },
    { name: "Singtel", src: singtel },
    { name: "Gojek", src: gojek },
    { name: "GoPay", src: gopay },
    { name: "OVO", src: ovo },
    { name: "DANA", src: dana },
    { name: "ShopeePay", src: shopeepay },
    { name: "LinkAja", src: linkaja },
    { name: "Mandiri", src: mandiri },
    { name: "BCA", src: bca },
    { name: "BRI", src: bri },
    { name: "Panin", src: panin },
    { name: "Permata", src: permata },
    { name: "Visa", src: visa },
    { name: "Mastercard", src: mastercard },
    { name: "UnionPay", src: unionpay },
    { name: "Alipay & WeChat Pay", src: alipaywechat },
    { name: "Safaricom", src: safaricom },
    { name: "Telefónica", src: telefonica },
    { name: "Chinamobile", src: chinamobile },
    { name: "AWS", src: aws },
    { name: "Unilever", src: unilever },
    { name: "Shopify", src: shopify },
    { name: "Ntt", src: ntt },
    { name: "Mtn", src: mtn },
    { name: "Huawei", src: huawei },
    { name: "Celcomdigi", src: celcomdigi },
    { name: "Chinatel", src: chinatel },
    { name: "Viettel", src: viettel },
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

          <div
            className="mx-auto grid gap-6 md:gap-3 mb-12 max-w-6xl"
            style={{
              gridTemplateRows: "repeat(4, max-content)",
              gridAutoFlow: "column",
            }}>
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="bg-white rounded-lg p-2 md:p-3 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ scale: 1.04 }}
                viewport={{ once: true }}
                aria-label={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-3 md:h-4 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-slate-700 max-w-4xl leading-relaxed text-lg text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
