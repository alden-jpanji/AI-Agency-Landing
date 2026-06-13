import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ChevronRight, MessageSquare, Workflow, Globe, Smartphone, Play, Zap, Users, Target, TrendingUp, Linkedin, Mail } from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function LandingPage() {
  // Ensure dark mode on load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/50">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">Araxigen</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                ENTERPRISE AI SOLUTIONS
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                Build Smarter Businesses <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">With AI</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                We build AI-powered receptionists, automation systems, websites and custom applications that help businesses save time, capture more leads, and deliver better customer experiences.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all">
                  Book a Free Consultation
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-semibold flex items-center justify-center transition-all">
                  View Our Work
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 h-full w-full pointer-events-none"></div>
            <div className="glass-card rounded-2xl p-2 overflow-hidden border-white/10 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
              <img src="/hero-dashboard.png" alt="Araxigen AI Dashboard" className="w-full h-auto rounded-xl object-cover aspect-[16/9] opacity-90" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions For Modern Businesses</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: MessageSquare, title: "AI Receptionists", desc: "24/7 AI assistants that answer customer questions, qualify leads, and schedule appointments." },
              { icon: Smartphone, title: "AI Chatbots", desc: "Smart website assistants that engage visitors and help convert them into customers." },
              { icon: Workflow, title: "AI Automation", desc: "Automate repetitive tasks and connect your business workflows." },
              { icon: Globe, title: "AI Websites & Apps", desc: "Custom websites and applications powered by AI technology." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured AI Builds</h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            <p className="text-muted-foreground max-w-md">Systems actively operating in production environments for our clients.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10 text-muted-foreground">Demo Project</span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    <Play className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-8">{project.desc}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`button-try-demo-${i}`}
                  className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Try Demo <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Build AI Systems</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
            {[
              { num: "01", title: "Understand", desc: "We analyze your business and identify where AI can create value." },
              { num: "02", title: "Build", desc: "We design and develop a custom AI solution for your needs." },
              { num: "03", title: "Launch", desc: "We deploy, optimize, and improve your AI system." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-background border-2 border-white/10 flex items-center justify-center text-2xl font-mono text-muted-foreground mb-6 shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AI & Industries */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Why Choose AI */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Businesses Choose AI</h2>
              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Save Time", desc: "Automate repetitive tasks and focus on growth." },
                  { icon: Users, title: "Better Customer Experience", desc: "Provide instant responses anytime." },
                  { icon: Target, title: "Capture More Leads", desc: "Never miss a potential customer." },
                  { icon: TrendingUp, title: "Scale Faster", desc: "Grow without adding unnecessary workload." }
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-3xl font-bold mb-8">AI Solutions For Every Industry</h2>
              <div className="flex flex-wrap gap-3">
                {["Healthcare", "Restaurants", "Real Estate", "Ecommerce", "Fitness", "Education", "Local Businesses"].map((industry, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 cursor-default transition-colors"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Building The Future With AI</h2>
            <p className="text-xl text-muted-foreground leading-relaxed md:leading-loose">
              "Araxigen creates practical AI systems that help businesses automate everyday tasks, improve customer interactions, and operate more efficiently."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Automate Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-10">Start building your AI-powered business today.</p>
              <button className="px-10 py-5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-background mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/50">
              <Zap className="w-3 h-3 text-primary" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground/80">Araxigen</span>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-8 text-center text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Araxigen. All rights reserved.
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
