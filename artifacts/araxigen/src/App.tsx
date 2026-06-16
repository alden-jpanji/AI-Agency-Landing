import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Workflow, Globe, Smartphone, Play, Zap, Users, Target, TrendingUp, Linkedin, Facebook, Instagram, Twitter, Mail, ArrowUpRight } from "lucide-react";
import logoSrc from "./assets/logo.png";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

function LandingPage() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", v => setScrolled(v > 60));
  }, [scrollY]);

  /* Contact form */
  const [form, setForm]           = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors]       = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim())    newErrors.name    = "Required";
    if (!form.email.trim())   newErrors.email   = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Required";
    if (Object.keys(newErrors).length) { setErrors(newErrors); return; }
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\n\n${form.message}`;
    window.open(`mailto:araxigen@gmail.com?subject=Enquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`);
    setSubmitted(true);
  };

  /* Sphere parallax */
  const sphere1Y       = useTransform(scrollY, [0, 800], [0, -220]);
  const sphere1Opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const sphere2Y       = useTransform(scrollY, [0, 800], [0, -120]);
  const sphere2Opacity = useTransform(scrollY, [0, 700], [0.7, 0]);

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* ── Navigation ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-black/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
          <img
            src={logoSrc}
            alt="Araxigen"
            className={`h-8 w-auto transition-all duration-300 ${
              scrolled ? "brightness-0" : "brightness-0 invert"
            }`}
          />
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] font-normal">
            {(["Services", "Portfolio", "About", "Contact"] as const).map((label, i) => (
              <a
                key={i}
                href={`#${label.toLowerCase()}`}
                className={`transition-colors duration-300 ${
                  scrolled ? "text-[#6d6d6d] hover:text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className={`text-[11px] uppercase tracking-[0.18em] px-6 py-2 rounded-[75px] border transition-colors duration-300 ${
              scrolled
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white/30 text-white hover:border-white"
            }`}
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* ── Hero — Black Immersive Frame ── */}
      <section className="relative bg-black text-white min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary gradient sphere */}
          <motion.div
            style={{
              y: sphere1Y,
              opacity: sphere1Opacity,
              position: "absolute",
              width: "65vw",
              height: "65vw",
              borderRadius: "50%",
              background: "radial-gradient(circle at 40% 40%, rgba(110, 80, 255, 0.22) 0%, rgba(80, 40, 200, 0.1) 35%, rgba(40, 10, 140, 0.04) 60%, transparent 75%)",
              filter: "blur(72px)",
              top: "-10vw",
              right: "-10vw",
            }}
          />
          {/* Secondary sphere — offset for depth */}
          <motion.div
            style={{
              y: sphere2Y,
              opacity: sphere2Opacity,
              position: "absolute",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background: "radial-gradient(circle at 60% 60%, rgba(160, 100, 255, 0.12) 0%, rgba(100, 60, 220, 0.06) 45%, transparent 70%)",
              filter: "blur(90px)",
              top: "20vw",
              right: "10vw",
            }}
          />
          {/* Faint hairline accent */}
          <div className="absolute top-0 bottom-0 w-px bg-white/[0.04]" style={{ right: "18%" }} />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 pt-40 pb-24">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-[11px] uppercase tracking-[0.22em] text-white/35 mb-12 font-normal"
            >
              Enterprise AI Solutions
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-light text-white mb-10"
              style={{ fontSize: "clamp(3.4rem, 8vw, 6rem)", lineHeight: 1.05, fontWeight: 300, letterSpacing: "-0.01em" }}
            >
              Build Smarter<br />
              Businesses<br />
              With AI
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white/50 text-lg font-normal leading-[1.6] max-w-lg mb-14"
            >
              We build AI-powered receptionists, automation systems, websites and
              custom applications that help businesses save time, capture more
              leads, and deliver better customer experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                data-testid="button-hero-cta"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[75px] bg-white text-black text-xs uppercase tracking-[0.15em] font-normal hover:bg-white/90 transition-colors"
              >
                Book a Free Consultation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#portfolio"
                data-testid="button-hero-portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-[75px] border border-white/25 text-white text-xs uppercase tracking-[0.15em] font-normal hover:border-white transition-colors"
              >
                View Our Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services — White Editorial ── */}
      <section id="services" className="bg-white text-black py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={slideLeft}
            className="mb-20"
          >
            <h2 className="font-light" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}>
              AI Solutions For<br />Modern Businesses
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              { icon: MessageSquare, title: "AI Receptionists",  desc: "24/7 AI assistants that answer customer questions, qualify leads, and schedule appointments." },
              { icon: Smartphone,    title: "AI Chatbots",        desc: "Smart website assistants that engage visitors and help convert them into customers." },
              { icon: Workflow,      title: "AI Automation",      desc: "Automate repetitive tasks and connect your business workflows." },
              { icon: Globe,         title: "AI Websites & Apps", desc: "Custom websites and applications powered by AI technology." }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`p-10 border-b border-black/10 group ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-5 h-5 text-black/25" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-xl font-normal mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#6d6d6d] text-base leading-[1.65]">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio — Black Immersive Frame ── */}
      <section id="portfolio" className="bg-black text-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={slideRight}
            className="mb-20"
          >
            <h2 className="font-light" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}>
              Featured AI Builds
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              {
                title: "Dental AI Voice Receptionist",
                desc: "AI receptionist for dental clinics that answers patient questions, handles FAQs, and helps schedule appointments.",
                href: "https://agent.retellai.com/orb/agent_571ba3c42e1fd1b804dc40d665?token=3a4d6fc1f82a24eb3ae263acc35e3271"
              },
              {
                title: "Real Estate AI Assistant",
                desc: "AI chatbot that helps users find properties, answers questions, qualifies leads, and collects customer information.",
                href: "https://studio.botpress.cloud/0a8f46d0-21e0-46bf-9830-b958789e2997/home?_gl=1*otph75*_gcl_aw*R0NMLjE3ODEwMjUyNTQuQ2p3S0NBanc4NTdSQmhBZ0Vpd0FJLTF5S0NRd3dmQi1CUFpEMi13RWhZNThHYTcweGVOdzdqOEZNT05aUXUycU45cDM4THQ1dFJFRUJCb0NhUTRRQXZEX0J3RQ..*_gcl_au*MTEzMjUzMTMxMC4xNzgxMDI1MjM4*_ga*MTE5ODM4MjgxNC4xNzgxMDI1MjM5*_ga_HKHSWES9V9*czE3ODEwMjUyMzgkbzEkZzEkdDE3ODEwMjU0MDIkajIxJGwwJGg0OTcyNjQ3NDI."
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                transition={{ duration: 0.3 }}
                className={`p-10 border-b border-white/10 group ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/25 font-normal">Demo Project</span>
                  <a href={project.href} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:border-white/50 hover:text-white/70 transition-colors">
                    <Play className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
                <h3 className="font-light mb-4 leading-tight" style={{ fontSize: "1.65rem", fontWeight: 300 }}>{project.title}</h3>
                <p className="text-white/40 text-base leading-[1.65] mb-12">{project.desc}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer"
                  data-testid={`button-try-demo-${i}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[75px] border border-white/20 text-white/70 text-[11px] uppercase tracking-[0.15em] hover:border-white hover:text-white transition-colors">
                  Try Demo <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works — White Editorial ── */}
      <section className="bg-white text-black py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-20"
          >
            <h2 className="font-light" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}>
              How We Build AI Systems
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {[
              { num: "01", title: "Understand", desc: "We analyze your business and identify where AI can create value." },
              { num: "02", title: "Build",       desc: "We design and develop a custom AI solution for your needs." },
              { num: "03", title: "Launch",      desc: "We deploy, optimize, and improve your AI system." }
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`p-10 border-b border-black/10 ${i < 2 ? "md:border-r" : ""}`}
              >
                <motion.p
                  className="font-light mb-2 text-black/10 leading-none select-none"
                  style={{ fontSize: "clamp(4rem, 6vw, 6rem)", fontWeight: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {step.num}
                </motion.p>
                <h3 className="font-light mb-5 mt-6" style={{ fontSize: "1.75rem", fontWeight: 300 }}>{step.title}</h3>
                <p className="text-[#6d6d6d] text-base leading-[1.65]">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose AI + Industries — Black Immersive ── */}
      <section className="bg-black text-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={slideLeft}>
              <h2 className="font-light mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.12, fontWeight: 300 }}>
                Why Businesses<br />Choose AI
              </h2>
              <motion.div
                className="border-t border-white/10"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {[
                  { icon: Zap,        title: "Save Time",                  desc: "Automate repetitive tasks and focus on growth." },
                  { icon: Users,      title: "Better Customer Experience", desc: "Provide instant responses anytime." },
                  { icon: Target,     title: "Capture More Leads",         desc: "Never miss a potential customer." },
                  { icon: TrendingUp, title: "Scale Faster",               desc: "Grow without adding unnecessary workload." }
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="py-6 border-b border-white/10 flex items-start gap-5"
                  >
                    <benefit.icon className="w-4 h-4 text-white/20 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-base font-normal mb-1">{benefit.title}</p>
                      <p className="text-white/35 text-sm leading-[1.6]">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={slideRight}>
              <h2 className="font-light mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.12, fontWeight: 300 }}>
                AI Solutions For<br />Every Industry
              </h2>
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
              >
                {["Healthcare", "Restaurants", "Real Estate", "Ecommerce", "Fitness", "Education", "Local Businesses"].map((industry, i) => (
                  <motion.span
                    key={i}
                    variants={fadeIn}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2.5 rounded-[75px] border border-white/15 text-white/50 text-sm font-normal hover:border-white/40 hover:text-white/80 transition-colors cursor-default"
                  >
                    {industry}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── About — White Editorial ── */}
      <section id="about" className="bg-white text-black py-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.p
            className="text-[10px] uppercase tracking-[0.22em] text-[#9a9a9a] mb-14 font-normal"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          >
            About
          </motion.p>
          <motion.h2
            className="font-light mb-12 max-w-3xl"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={slideLeft}
          >
            Building The Future<br />With AI
          </motion.h2>
          <motion.p
            className="text-[#6d6d6d] text-lg leading-[1.65] font-normal max-w-2xl"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            Araxigen creates practical AI systems that help businesses automate
            everyday tasks, improve customer interactions, and operate more
            efficiently.
          </motion.p>
        </div>
      </section>

      {/* ── Contact — Black Immersive ── */}
      <section id="contact" className="bg-black text-white py-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

            {/* Left — headline */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={slideLeft}
              className="flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/30 mb-12 font-normal">Get In Touch</p>
                <h2
                  className="font-light mb-8"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", lineHeight: 1.08, fontWeight: 300 }}
                >
                  Ready To Automate<br />Your Business?
                </h2>
                <p className="text-white/40 text-base font-normal leading-[1.7] max-w-sm">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>
              <div className="mt-16 hidden lg:block border-t border-white/10 pt-10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/25 mb-3 font-normal">Direct email</p>
                <a href="mailto:araxigen@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm font-normal">
                  araxigen@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              variants={slideRight}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-center h-full py-16"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8">
                    <ArrowUpRight className="w-5 h-5 text-white/60" />
                  </div>
                  <h3 className="text-2xl font-light mb-4">Message sent.</h3>
                  <p className="text-white/40 text-base leading-[1.7]">
                    Your email client should open with your message ready. We'll reply within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                    className="mt-10 text-[11px] uppercase tracking-[0.18em] text-white/30 hover:text-white transition-colors self-start"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-0">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                    {/* Name */}
                    <div className="group border-b border-white/12 sm:border-r sm:border-r-white/12 py-6 pr-0 sm:pr-8">
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-normal">
                        Name <span className="text-white/20">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: undefined })); }}
                        placeholder="Your name"
                        className="w-full bg-transparent text-white placeholder-white/20 text-base font-light outline-none"
                      />
                      {errors.name && <p className="text-white/40 text-[10px] mt-2 uppercase tracking-wider">{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div className="border-b border-white/12 py-6 sm:pl-8">
                      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-normal">
                        Email <span className="text-white/20">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: undefined })); }}
                        placeholder="you@company.com"
                        className="w-full bg-transparent text-white placeholder-white/20 text-base font-light outline-none"
                      />
                      {errors.email && <p className="text-white/40 text-[10px] mt-2 uppercase tracking-wider">{errors.email}</p>}
                    </div>
                  </div>
                  {/* Company */}
                  <div className="border-b border-white/12 py-6">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-normal">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      placeholder="Optional"
                      className="w-full bg-transparent text-white placeholder-white/20 text-base font-light outline-none"
                    />
                  </div>
                  {/* Message */}
                  <div className="border-b border-white/12 py-6">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3 font-normal">
                      Message <span className="text-white/20">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: undefined })); }}
                      placeholder="Tell us about your project…"
                      className="w-full bg-transparent text-white placeholder-white/20 text-base font-light outline-none resize-none leading-[1.7]"
                    />
                    {errors.message && <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">{errors.message}</p>}
                  </div>
                  {/* Submit */}
                  <div className="pt-10">
                    <motion.button
                      type="submit"
                      data-testid="button-cta-get-started"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[75px] bg-white text-black text-xs uppercase tracking-[0.15em] font-normal cursor-pointer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Send Message <ArrowUpRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#111] text-white py-10 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoSrc} alt="Araxigen" className="h-7 w-auto brightness-0 invert opacity-50" />
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] text-white/30">
            <a href="#services"  className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact"   className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/profile.php?id=61550763885137" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/araxigen-ai-88749b316" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://www.instagram.com/araxigen.ai/" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="https://x.com/araxigen" target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="mailto:araxigen@gmail.com" className="text-white/25 hover:text-white transition-colors">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-8 mt-8">
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Araxigen. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── Floating Social Sidebar ── */}
      <motion.div
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: scrolled ? 0 : 80, opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center gap-0.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-[20px] p-2">
          {[
            { href: "https://www.facebook.com/profile.php?id=61550763885137", icon: Facebook,  label: "Facebook"  },
            { href: "https://www.linkedin.com/in/araxigen-ai-88749b316",      icon: Linkedin,  label: "LinkedIn"  },
            { href: "https://www.instagram.com/araxigen.ai/",                 icon: Instagram, label: "Instagram" },
            { href: "https://x.com/araxigen",                                 icon: Twitter,   label: "X"         },
            { href: "mailto:araxigen@gmail.com",                              icon: Mail,      label: "Email"     },
          ].map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-[14px] text-white/30 hover:text-white hover:bg-white/8 transition-colors group relative"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <Icon className="w-[15px] h-[15px]" strokeWidth={1.5} />
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-2.5 py-1 rounded-[8px] bg-black/90 border border-white/10 text-white text-[10px] tracking-[0.12em] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
