import { useState } from "react";
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CreditCard, Wallet, ArrowLeft, CheckCircle2, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { useCart } from "@/lib/cart-store";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const cartTotal = total();
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleConfirmOrder = () => {
    // Basic UI simulation
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <Navbar />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-[3rem] border-primary/20 max-w-xl w-full text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 neon-border shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">MISSION SUCCESS!</h1>
            <p className="text-muted-foreground mb-10 text-lg">Your top-up has been authorized and is being deployed to your player ID as we speak.</p>
            
            <div className="space-y-4">
              <Link href="/">
                <Button className="w-full h-14 rounded-full bg-primary text-background font-black uppercase tracking-widest">
                  RETURN TO BASE
                </Button>
              </Link>
              <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">A confirmation receipt has been sent to your email.</p>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-12">
          <Link href="/cart">
            <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 uppercase text-xs font-black tracking-widest cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to Cargo
            </span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter">FINAL <span className="text-primary neon-text">AUTHORIZATION</span></h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 rounded-[2.5rem] border-white/10"
            >
              <h3 className="text-xl font-display font-bold text-white mb-8 uppercase flex items-center gap-3">
                <Smartphone className="w-6 h-6 text-primary" /> 1. Operational Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
                  <Input placeholder="John 'Ghost' Doe" className="bg-white/5 border-white/10 rounded-2xl h-14 text-white font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Secure Email</label>
                  <Input placeholder="ghost@nexus.io" className="bg-white/5 border-white/10 rounded-2xl h-14 text-white font-bold" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-[2.5rem] border-white/10"
            >
              <h3 className="text-xl font-display font-bold text-white mb-8 uppercase flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-secondary" /> 2. Payment Protocol
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { id: "card", icon: CreditCard, label: "Credit Card" },
                  { id: "crypto", icon: Wallet, label: "Crypto" },
                  { id: "wallet", icon: Smartphone, label: "E-Wallet" },
                ].map((method) => (
                  <div 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 group ${
                      paymentMethod === method.id 
                        ? 'border-primary bg-primary/10' 
                        : 'border-white/5 bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <method.icon className={`w-8 h-8 ${paymentMethod === method.id ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={`text-[10px] font-black uppercase tracking-tighter ${paymentMethod === method.id ? 'text-white' : 'text-muted-foreground'}`}>
                      {method.label}
                    </span>
                  </div>
                ))}
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <Input placeholder="Card Number" className="bg-white/5 border-white/10 rounded-2xl h-14 text-white font-bold tracking-[0.2em]" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="MM / YY" className="bg-white/5 border-white/10 rounded-2xl h-14 text-white font-bold" />
                    <Input placeholder="CVV" className="bg-white/5 border-white/10 rounded-2xl h-14 text-white font-bold" />
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-[2.5rem] border-white/10 bg-gradient-to-br from-secondary/5 to-transparent relative overflow-hidden"
            >
              <h3 className="text-xl font-display font-bold text-white mb-8 uppercase">PAYLOAD REVIEW</h3>
              
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-white font-bold text-sm uppercase">{item.productTitle}</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{item.packageName}</div>
                    </div>
                    <span className="text-white font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="py-6 space-y-4 border-t border-white/10">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Total Due</span>
                  <span className="text-4xl font-display font-black text-primary neon-text">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleConfirmOrder}
                className="w-full h-16 rounded-full bg-primary text-background hover:bg-primary/90 font-black text-xl tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-95"
              >
                CONFIRM DEPLOYMENT
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase font-black tracking-tighter">
                <ShieldCheck className="w-4 h-4 text-green-500" /> MILITARY-GRADE ENCRYPTION ACTIVE
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
