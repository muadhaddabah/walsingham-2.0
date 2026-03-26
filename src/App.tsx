import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Check,
  Menu,
  X,
  Beef,
  Utensils,
  ShieldCheck,
  Hand,
} from "lucide-react";
import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BUSINESS_INFO, HOMEPAGE_MEAT_PLANS, PICK_FIVE, DEAL_SECTIONS } from "./constants";
import MeatPlansPage from "./MeatPlansPage";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Meat Cuts"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-red-800 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Est. 1984 • Local Butcher
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-8">
              Premium Cuts, <br />
              <span className="italic text-stone-300">Honest Prices.</span>
            </h1>
            <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-lg">
              Experience the difference of locally sourced, expertly butchered meats.
              From family bundles to bulk beef, we provide quality you can taste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/meat-plans"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-100 transition-all group"
              >
                Explore Meat Plans
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                Visit Our Shop
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <div className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Beef className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold">Locally Sourced</h3>
              <p className="text-sm text-stone-400">Direct from local farms</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold">Expertly Butchered</h3>
              <p className="text-sm text-stone-400">Hand-cut with precision</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold">Freshness Guaranteed</h3>
              <p className="text-sm text-stone-400">Never frozen, always fresh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pick 5 Section */}
      <section id="pick-five" className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:sticky lg:top-28"
            >
              <div className="bg-white rounded-3xl p-10 border border-stone-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-800/10 flex items-center justify-center">
                    <Hand className="w-6 h-6 text-red-800" />
                  </div>
                  <span className="text-red-800 font-bold uppercase tracking-widest text-sm">Mix & Match</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4 leading-tight">
                  {PICK_FIVE.title}
                </h2>
                <p className="text-stone-500 text-lg mb-8">
                  Choose any <span className="font-bold text-stone-900">{PICK_FIVE.pickCount} items</span> from our selection and pay one flat price.
                </p>
                <div className="bg-red-800 text-white rounded-2xl p-6 text-center mb-8">
                  <span className="text-5xl font-bold">{PICK_FIVE.price}</span>
                  <p className="text-red-200 text-sm font-medium mt-1">for any 5 items</p>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call to Order
                </a>
              </div>
            </motion.div>

            {/* Right: Items Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {PICK_FIVE.items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-stone-100 hover:border-red-800/30 hover:shadow-sm transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-red-800/10 flex items-center justify-center shrink-0 transition-colors">
                      <Check className="w-4 h-4 text-stone-400 group-hover:text-red-800 transition-colors" />
                    </div>
                    <span className="text-stone-700 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals & Specials Section */}
      <section id="deals" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Deals & Specials
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-6" />
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Take advantage of our weekly specials on premium cuts, bulk cases, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DEAL_SECTIONS.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-stone-200 overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-red-800 px-6 py-4">
                  <h3 className="font-serif text-xl font-bold text-white text-center">
                    {section.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {section.type === "tiered" && (
                    <div className="flex justify-end gap-4 mb-3 pr-2">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest w-16 text-right">5 lbs</span>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest w-16 text-right">10 lbs</span>
                    </div>
                  )}

                  <div className="divide-y divide-stone-100">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-3 hover:bg-stone-50 px-2 rounded transition-colors"
                      >
                        <span className="text-stone-700 font-medium text-sm">
                          {item.name}
                        </span>
                        {section.type === "single" ? (
                          <span className="font-bold text-stone-900 text-sm">
                            {(item as { name: string; price: string }).price}
                          </span>
                        ) : (
                          <div className="flex gap-4">
                            <span className="font-bold text-stone-900 text-sm w-16 text-right">
                              {(item as { name: string; price5: string | null; price10: string }).price5 || "—"}
                            </span>
                            <span className="font-bold text-red-800 text-sm w-16 text-right">
                              {(item as { name: string; price5: string | null; price10: string }).price10}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="plans" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Our Meat Plans
            </h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Save money and stock your freezer with our curated bulk plans.
              Each bundle is hand-selected to provide a balanced variety of premium cuts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {HOMEPAGE_MEAT_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col p-8 rounded-3xl border-2 ${
                  plan.featured
                    ? "border-red-800 bg-stone-50 shadow-xl scale-105 z-10"
                    : "border-stone-100 bg-white"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-800 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </span>
                )}

                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">{plan.title}</h3>
                  <p className="text-stone-500 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-stone-900">{plan.price}</span>
                    <span className="text-stone-500 font-medium">/ {plan.weight}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Included Cuts</p>
                  <ul className="space-y-3 mb-8">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-stone-700 text-sm">
                        <Check className="w-4 h-4 text-red-800 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-4 rounded-full font-bold text-center transition-all block ${
                    plan.featured
                      ? "bg-red-800 text-white hover:bg-red-900"
                      : "bg-stone-900 text-white hover:bg-stone-800"
                  }`}
                >
                  Order Now
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/meat-plans"
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-bold rounded-full hover:bg-red-900 transition-all group"
            >
              View All Plans & Details
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-16 p-8 bg-stone-100 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-serif text-2xl font-bold text-stone-900 mb-2">Need a Custom Order?</h4>
              <p className="text-stone-600">We offer custom butchering for half or whole beef. Contact us for current market pricing.</p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-4 bg-white border border-stone-200 text-stone-900 font-bold rounded-full hover:shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=1987&auto=format&fit=crop"
              alt="Butcher at work"
              className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-red-800 text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-serif font-bold mb-1">40+</p>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Quality</p>
            </div>
          </div>

          <div>
            <span className="text-red-800 font-bold uppercase tracking-widest text-sm mb-4 block">Our Commitment</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
              Quality You Can Trust, <br />
              From Our Family to Yours.
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              At Walsingham Meat Market, we believe that great meals start with great ingredients.
              Since 1984, we've partnered with local farmers who share our commitment to sustainable
              and ethical practices.
            </p>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Every cut that leaves our shop is handled with the utmost care by our master butchers.
              Whether you're looking for a single steak for dinner or a quarter beef for the season,
              you'll receive the same premium quality and personalized service.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-stone-900 mb-2">100% Local</h4>
                <p className="text-sm text-stone-500">Sourced from farms within 50 miles of our shop.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-2">No Hormones</h4>
                <p className="text-sm text-stone-500">Natural growth, no added hormones or steroids.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">Visit the Market</h2>
            <div className="w-24 h-1 bg-red-800 mx-auto mb-6" />
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Stop by our shop to see our full selection of premium meats,
              house-made sausages, and specialty items.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Business Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-red-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Location</h4>
                  <p className="text-stone-600">{BUSINESS_INFO.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-red-800 font-medium text-sm mt-2 hover:text-red-900 transition-colors"
                  >
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-red-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Phone</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-stone-600 hover:text-red-800 transition-colors text-lg">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-red-800" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 text-lg">Hours</h4>
                  <div className="space-y-1">
                    {BUSINESS_INFO.hours.map((h) => (
                      <p key={h.day} className="text-stone-600">
                        <span className="font-medium">{h.day}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl border border-stone-200"
            >
              <iframe
                title="Walsingham Meat Market Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&output=embed`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meat Plans", href: "/meat-plans" },
    { name: "About Us", href: isHome ? "#about" : "/#about" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Beef className="w-8 h-8 text-red-800" />
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
              Walsingham
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-stone-600 hover:text-red-800 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-stone-600 hover:text-red-800 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
            <Link
              to="/meat-plans"
              className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-red-900 transition-all"
            >
              View Prices
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-stone-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-200 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium text-stone-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-stone-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </motion.div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meat-plans" element={<MeatPlansPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Beef className="w-6 h-6 text-red-800" />
            <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
              Walsingham Meat Market
            </span>
          </Link>

          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Walsingham Meat Market. All rights reserved.
          </p>

          <div className="flex gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-red-800 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-red-800 transition-colors"
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
