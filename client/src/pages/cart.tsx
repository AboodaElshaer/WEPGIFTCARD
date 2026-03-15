import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ArrowRight, Trash2, Zap, User, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useCart } from "@/lib/cart-store";

// Image mapping
import game1 from "@/assets/images/game-1.png";
import game2 from "@/assets/images/game-2.png";
import game3 from "@/assets/images/game-3.png";
import game4 from "@/assets/images/game-4.png";
import game5 from "@/assets/images/game-5.png";
import pubg from "@/assets/images/Gemini_Generated_Image_4ixlet4ixlet4ixl.png";

const imageMap: Record<string, string> = {
  "@/assets/images/game-1.png": game1,
  "@/assets/images/game-2.png": game2,
  "@/assets/images/game-3.png": game3,
  "@/assets/images/game-4.png": game4,
  "@/assets/images/game-5.png": game5,
  "@/assets/images/Gemini_Generated_Image_4ixlet4ixlet4ixl.png": pubg,
};

export default function Cart() {
  const { items, removeItem, total } = useCart();
  const cartTotal = total();

  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-12 uppercase tracking-tighter">
          YOUR <span className="text-primary neon-text">CARGO</span>
        </h1>
        
        {items.length === 0 ? (
          <div className="glass-panel p-20 rounded-[2.5rem] border-white/5 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-6 opacity-20" />
            <h2 className="text-2xl font-display font-bold text-white mb-4 uppercase">Cart is Empty</h2>
            <p className="text-muted-foreground mb-8 max-w-xs">Looks like you haven't added any power-ups to your arsenal yet.</p>
            <Link href="/games">
              <Button size="lg" className="rounded-full bg-primary text-background font-black uppercase tracking-widest px-8">
                BROWSE GAMES
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="glass-panel p-6 rounded-[2rem] border-white/10 flex flex-col sm:flex-row items-center gap-6 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-50"></div>
                    
                    <div className="w-24 h-32 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                      <img src={imageMap[item.productImage]} alt={item.productTitle} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="flex-1 space-y-2 text-center sm:text-left">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <h3 className="text-xl font-display font-bold text-white uppercase">{item.productTitle}</h3>
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-black text-primary border border-primary/20 uppercase">
                          {item.packageName}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <User className="w-3 h-3 text-primary" />
                          ID: <span className="text-white">{item.playerId}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Server className="w-3 h-3 text-secondary" />
                          <span className="text-white">{item.server}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Zap className="w-3 h-3 text-accent" />
                          <span className="text-white">{item.packageAmount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-2 pr-4">
                      <div className="text-2xl font-display font-bold text-white">{item.price}</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full h-8 px-3 uppercase text-[10px] font-black"
                      >
                        <Trash2 className="w-4 h-4 mr-1.5" /> Remove
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="space-y-6 sticky top-32">
              <div className="glass-panel p-8 rounded-[2.5rem] border-white/10 bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-primary" /> MISSION SUMMARY
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="text-white">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span>Service Fee</span>
                    <span className="text-white">$0.00</span>
                  </div>
                  <div className="h-px bg-white/10 my-4"></div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Total Payload</span>
                    <span className="text-4xl font-display font-black text-primary neon-text">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link href="/checkout">
                  <Button className="w-full h-16 rounded-full bg-primary text-background hover:bg-primary/90 font-black text-lg tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer">
                    PROCEED TO DEPLOY <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <p className="mt-6 text-[10px] font-bold text-muted-foreground text-center uppercase tracking-tighter flex items-center justify-center gap-2">
                  <Zap className="w-3 h-3 text-primary animate-pulse" /> Instant Account Recharge after payment
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
