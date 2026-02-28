import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Instant Delivery</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            LEVEL UP YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent neon-text">GAMING</span> ARSENAL
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Premium digital top-ups, game keys, and direct recharges for the world's most popular titles. Delivered instantly to your account.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="glow-btn rounded-full">
              <Button size="lg" className="bg-background text-white hover:bg-background/90 border border-primary/50 rounded-full h-14 px-8 text-lg font-bold font-display tracking-widest group relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
                EXPLORE GAMES
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <Button size="lg" variant="ghost" className="rounded-full h-14 px-8 text-lg font-bold font-display tracking-widest text-white hover:bg-white/10">
              VIEW OFFERS
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute right-[10%] top-[30%] w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute right-[25%] bottom-[20%] w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}