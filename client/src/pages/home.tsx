import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import GameSlider from "@/components/game-slider";
import { Shield, Zap, Clock, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30">
      <Navbar />
      
      <Hero />

      {/* Stats/Trust Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm relative z-20 -mt-10">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Instant Delivery", desc: "Automated via API" },
              { icon: Shield, title: "100% Secure", desc: "Official retail partner" },
              { icon: CreditCard, title: "Multiple Payments", desc: "Crypto & Fiat accepted" },
              { icon: Clock, title: "24/7 Support", desc: "Always here for you" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm md:text-base">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GameSlider title="TRENDING NOW" subtitle="Most Popular" />
      
      {/* Categories Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-secondary/5 skew-y-[-2deg] z-0"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10">BROWSE CATEGORIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Direct Top-Up", color: "from-primary/20", border: "border-primary/30" },
              { title: "Game Vouchers", color: "from-secondary/20", border: "border-secondary/30" },
              { title: "Subscriptions", color: "from-accent/20", border: "border-accent/30" },
            ].map((cat, idx) => (
              <div key={idx} className={`glass-panel p-8 rounded-3xl border-t border-l ${cat.border} bg-gradient-to-br ${cat.color} to-transparent cursor-pointer group hover:-translate-y-2 transition-all duration-300`}>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{cat.title}</h3>
                <p className="text-muted-foreground mb-6">Instantly deliver credit directly to your game account ID.</p>
                <div className="flex items-center text-white font-bold text-sm tracking-wider uppercase group-hover:text-primary transition-colors">
                  Explore <Zap className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GameSlider title="NEW RELEASES" />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background py-12 mt-20 relative z-10">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-display font-bold text-3xl tracking-wider text-white neon-text mb-6 block">
              NEXUS
            </span>
            <p className="text-muted-foreground text-sm mb-6">
              The premium destination for digital gaming top-ups. Secure, fast, and reliable.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Games</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Mobile Legends</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">PUBG Mobile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Valorant</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Free Fire</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}