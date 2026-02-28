import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Checkout() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-12 uppercase">CHECKOUT</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl border-white/10">
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" /> Payment Method
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 border border-primary/50 p-6 rounded-2xl flex flex-col items-center gap-3 cursor-pointer">
                  <CreditCard className="w-8 h-8 text-primary" />
                  <span className="text-white font-bold uppercase text-xs">Credit Card</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center gap-3 cursor-pointer hover:bg-white/10">
                  <Wallet className="w-8 h-8 text-muted-foreground" />
                  <span className="text-muted-foreground font-bold uppercase text-xs">Crypto</span>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border-white/10 space-y-4">
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">Billing Details</h3>
              <Input placeholder="Email Address" className="bg-white/5 border-white/10 rounded-xl h-12" />
              <Input placeholder="Card Number" className="bg-white/5 border-white/10 rounded-xl h-12" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="MM/YY" className="bg-white/5 border-white/10 rounded-xl h-12" />
                <Input placeholder="CVV" className="bg-white/5 border-white/10 rounded-xl h-12" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl border-white/10 bg-gradient-to-br from-secondary/5 to-transparent">
              <h3 className="text-xl font-display font-bold text-white mb-6 uppercase">Order Review</h3>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-white font-bold">Elden Ring: Shadow</span>
                <span className="text-white">$39.99</span>
              </div>
              <div className="py-6 space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-white">$39.99</span>
                </div>
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-primary neon-text">$39.99</span>
                </div>
              </div>
              <Button className="w-full h-16 rounded-full bg-primary text-background hover:bg-primary/90 font-black text-xl tracking-widest uppercase mb-6">
                PAY NOW
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground uppercase font-bold tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-500" /> SSL SECURE TRANSACTION
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
