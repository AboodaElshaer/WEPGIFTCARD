import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import products from "@/lib/products.json";

// Image mapping
import game1 from "@/assets/images/game-1.png";
const imageMap: Record<string, string> = { "@/assets/images/game-1.png": game1 };

export default function Cart() {
  const cartItem = products[0]; // Mock single item in cart

  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-12 uppercase">YOUR CART</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-6 rounded-3xl border-white/10 flex items-center gap-6"
            >
              <div className="w-24 h-32 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                <img src={imageMap[cartItem.image] || game1} alt={cartItem.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-white uppercase">{cartItem.title}</h3>
                <p className="text-primary font-bold text-sm uppercase mb-4">{cartItem.category}</p>
                <div className="text-white font-bold">{cartItem.price}</div>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
                <Trash2 className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-3xl border-white/10 bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-2xl font-display font-bold text-white mb-8 uppercase">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-white">$39.99</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-primary neon-text">$39.99</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full h-14 rounded-full bg-primary text-background hover:bg-primary/90 font-black tracking-widest uppercase">
                  CHECKOUT <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
