import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { MessageSquare, Workflow, Globe, Smartphone, Play, Zap, Users, Target, TrendingUp, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import logoSrc from "./assets/logo.png";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="absolute inset-0">
          <img
            src="/hero-dashboard.png"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
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
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-20"
          >
            <h2
              className="font-light"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}
            >
              AI Solutions For<br />Modern Businesses
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
            {[
              { icon: MessageSquare, title: "AI Receptionists", desc: "24/7 AI assistants that answer customer questions, qualify leads, and schedule appointments." },
              { icon: Smartphone,    title: "AI Chatbots",       desc: "Smart website assistants that engage visitors and help convert them into customers." },
              { icon: Workflow,      title: "AI Automation",     desc: "Automate repetitive tasks and connect your business workflows." },
              { icon: Globe,         title: "AI Websites & Apps", desc: "Custom websites and applications powered by AI technology." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className={`p-10 border-b border-black/10 group ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <div className="mb-8">
                  <service.icon className="w-5 h-5 text-black/25" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-normal mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#6d6d6d] text-base leading-[1.65]">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio — Black Immersive Frame ── */}
      <section id="portfolio" className="bg-black text-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-20"
          >
            <h2
              className="font-light"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}
            >
              Featured AI Builds
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10">
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
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`p-10 border-b border-white/10 group ${i % 2 === 0 ? "md:border-r" : ""}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/25 font-normal">
                    Demo Project
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:border-white/50 hover:text-white/70 transition-colors"
                  >
                    <Play className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
                <h3
                  className="font-light mb-4 leading-tight"
                  style={{ fontSize: "1.65rem", fontWeight: 300 }}
                >
                  {project.title}
                </h3>
                <p className="text-white/40 text-base leading-[1.65] mb-12">{project.desc}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`button-try-demo-${i}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[75px] border border-white/20 text-white/70 text-[11px] uppercase tracking-[0.15em] hover:border-white hover:text-white transition-colors"
                >
                  Try Demo <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — White Editorial ── */}
      <section className="bg-white text-black py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-20"
          >
            <h2
              className="font-light"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}
            >
              How We Build AI Systems
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
            {[
              { num: "01", title: "Understand", desc: "We analyze your business and identify where AI can create value." },
              { num: "02", title: "Build",       desc: "We design and develop a custom AI solution for your needs." },
              { num: "03", title: "Launch",      desc: "We deploy, optimize, and improve your AI system." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`p-10 border-b border-black/10 ${i < 2 ? "md:border-r" : ""}`}
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#9a9a9a] mb-10 font-normal">
                  {step.num}
                </p>
                <h3
                  className="font-light mb-5"
                  style={{ fontSize: "1.75rem", fontWeight: 300 }}
                >
                  {step.title}
                </h3>
                <p className="text-[#6d6d6d] text-base leading-[1.65]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose AI + Industries — Black Immersive ── */}
      <section className="bg-black text-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2
                className="font-light mb-16"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.12, fontWeight: 300 }}
              >
                Why Businesses<br />Choose AI
              </h2>
              <div className="border-t border-white/10">
                {[
                  { icon: Zap,         title: "Save Time",                  desc: "Automate repetitive tasks and focus on growth." },
                  { icon: Users,       title: "Better Customer Experience", desc: "Provide instant responses anytime." },
                  { icon: Target,      title: "Capture More Leads",         desc: "Never miss a potential customer." },
                  { icon: TrendingUp,  title: "Scale Faster",               desc: "Grow without adding unnecessary workload." }
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="py-6 border-b border-white/10 flex items-start gap-5"
                  >
                    <benefit.icon className="w-4 h-4 text-white/20 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-base font-normal mb-1">{benefit.title}</p>
                      <p className="text-white/35 text-sm leading-[1.6]">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2
                className="font-light mb-16"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.12, fontWeight: 300 }}
              >
                AI Solutions For<br />Every Industry
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Healthcare", "Restaurants", "Real Estate", "Ecommerce", "Fitness", "Education", "Local Businesses"].map((industry, i) => (
                  <motion.span
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.05 }}
                    className="px-5 py-2.5 rounded-[75px] border border-white/15 text-white/50 text-sm font-normal hover:border-white/40 hover:text-white/80 transition-colors cursor-default"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── About — White Editorial ── */}
      <section id="about" className="bg-white text-black py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#9a9a9a] mb-14 font-normal">
              About
            </p>
            <h2
              className="font-light mb-12 max-w-3xl"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.12, fontWeight: 300 }}
            >
              Building The Future<br />With AI
            </h2>
            <p className="text-[#6d6d6d] text-lg leading-[1.65] font-normal max-w-2xl">
              Araxigen creates practical AI systems that help businesses automate
              everyday tasks, improve customer interactions, and operate more
              efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA — Black Immersive ── */}
      <section id="contact" className="bg-black text-white py-[120px]">
        <div className="max-w-[1440px] mx-auto px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="font-light mb-8"
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05, fontWeight: 300 }}
            >
              Ready To Automate<br />Your Business?
            </h2>
            <p className="text-white/40 text-lg font-normal mb-14">
              Start building your AI-powered business today.
            </p>
            <a
              href="mailto:hello@araxigen.com"
              data-testid="button-cta-get-started"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[75px] bg-white text-black text-xs uppercase tracking-[0.15em] font-normal hover:bg-white/90 transition-colors"
            >
              Get Started <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
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
            <a href="#" className="text-white/25 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/25 hover:text-white transition-colors">
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
