import { motion } from "motion/react";
import {
  Check,
  Phone,
  ChevronDown,
  Beef,
  Scale,
  Truck,
  ShieldCheck,
  Gift,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO, ALL_MEAT_PLANS } from "./constants";

const FAQ_ITEMS = [
  {
    question: "How do I place an order?",
    answer:
      "You can place an order by calling us directly, visiting our shop, or sending a message through our contact form. We'll confirm availability and arrange a pickup time that works for you.",
  },
  {
    question: "Can I customize the cuts in my plan?",
    answer:
      "Absolutely! Our plans are a starting point — we're happy to swap out cuts based on your preferences. Just let us know when you order and our butchers will accommodate your requests.",
  },
  {
    question: "How should I store my meat?",
    answer:
      "All plans come vacuum-sealed and flash-frozen for maximum freshness. Store in your freezer and thaw in the refrigerator 24 hours before cooking. Properly stored, cuts will stay fresh for 6–12 months.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "We offer free local pickup from our shop. Delivery is available within a 25-mile radius for a small fee. Contact us for delivery scheduling and pricing.",
  },
  {
    question: "What's the difference between plans and custom orders?",
    answer:
      "Our plans are pre-configured bundles at a discounted rate. Custom orders let you choose exactly what you want — half or whole beef, specific cuts, and quantities. Custom orders are priced at current market rates.",
  },
];

export default function MeatPlansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=2070&auto=format&fit=crop"
            alt="Premium meat selection"
            className="w-full h-full object-cover brightness-[0.35]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-800 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Save More, Eat Better
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6">
              Our Meat Plans
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Hand-selected bundles of premium, locally sourced cuts — curated for
              families, grillers, and freezer-stockers alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Props Strip */}
      <div className="bg-stone-900 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Scale, label: "Weighed Fresh" },
            { icon: Truck, label: "Local Pickup" },
            { icon: ShieldCheck, label: "Quality Guaranteed" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center justify-center gap-3 text-white"
            >
              <Icon className="w-5 h-5 text-red-400" />
              <span className="text-sm font-semibold">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Plans Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Choose Your Plan
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-6" />
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              From budget-friendly bundles to premium combos — every plan comes with a free bonus.
              Call us to order or stop by the shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ALL_MEAT_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Card Header */}
                <div className="bg-red-800 px-6 py-4 text-center">
                  <h3 className="font-serif text-lg font-bold text-white">
                    {plan.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="flex flex-col grow p-6 bg-white">
                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-stone-900">
                      {plan.price}
                    </span>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2 mb-6 grow">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-stone-700 text-sm"
                      >
                        <Check className="w-3.5 h-3.5 text-red-800 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bonus */}
                  {plan.bonus && (
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-6">
                      <Gift className="w-4 h-4 text-green-700 shrink-0" />
                      <span className="text-green-800 text-xs font-bold">
                        {plan.bonus}
                      </span>
                    </div>
                  )}

                  {/* CTA */}
                  {/* <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full py-3 bg-stone-900 text-white font-bold rounded-full text-center hover:bg-red-900 transition-all text-sm"
                  >
                    Call to Order
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-6" />
            <p className="text-stone-600 text-lg">
              Everything you need to know about our meat plans.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <span className="font-semibold text-stone-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-stone-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-stone-900 p-12 md:p-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-800/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Beef className="w-8 h-8 text-red-400" />
                  <span className="text-red-400 font-bold uppercase tracking-widest text-sm">
                    Custom Butchering
                  </span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                  Need Something Different?
                </h3>
                <p className="text-stone-400 text-lg max-w-xl">
                  We offer custom butchering for half or whole beef. Tell us
                  exactly what cuts you want and we'll make it happen. Contact us
                  for more info.
                </p>
              </div>

              <div className="flex flex-col gap-4 shrink-0">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="px-10 py-4 bg-white text-stone-900 font-bold rounded-full hover:shadow-xl transition-all flex items-center gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
