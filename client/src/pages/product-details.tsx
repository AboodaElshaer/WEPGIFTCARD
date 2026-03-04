import { useRoute, useLocation } from "wouter";
import { useState } from "react";
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Shield, Star, ShoppingCart, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import products from "@/lib/products.json";

// Image mapping
import game1 from "@/assets/images/game-1.png";
import game2 from "@/assets/images/game-2.png";
import game3 from "@/assets/images/game-3.png";
import game4 from "@/assets/images/game-4.png";
import game5 from "@/assets/images/game-5.png";

const imageMap: Record<string, string> = {
  "@/assets/images/game-1.png": game1,
  "@/assets/images/game-2.png": game2,
  "@/assets/images/game-3.png": game3,
  "@/assets/images/game-4.png": game4,
  "@/assets/images/game-5.png": game5,
};

const PACKAGES = [
  { id: "p1", name: "Starter Pack", amount: "325 Diamonds", price: "$4.99" },
  { id: "p2", name: "Pro Bundle", amount: "720 Diamonds", price: "$9.99", popular: true },
  { id: "p3", name: "Elite Crate", amount: "1550 Diamonds", price: "$19.99" },
  { id: "p4", name: "Champion Vault", amount: "4000 Diamonds", price: "$49.99" },
];

const SERVERS = ["Global", "North America", "Europe", "Asia", "South America"];

import { useCart } from "@/lib/cart-store";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:slug");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { addItem } = useCart();
  const product = products.find(p => p.slug === params?.slug);

  const [playerId, setPlayerId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1].id);
  const [server, setServer] = useState(SERVERS[0]);
  const [error, setError] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  if (!product) return <div className="min-h-screen flex items-center justify-center text-white font-display">Product not found</div>;

  const handleAddToCart = () => {
    setError("");
    if (!playerId || playerId.length < 5) {
      setError("Please enter a valid Player ID (min 5 characters)");
      return;
    }
    
    setIsAdding(true);
    const pkg = PACKAGES.find(p => p.id === selectedPackage);
    
    // Simulate slight delay for effect
    setTimeout(() => {
      addItem({
        id: Math.random().toString(36).substr(2, 9),
        productSlug: product.slug,
        productTitle: product.title,
        productImage: product.image,
        packageName: pkg?.name || "",
        packageAmount: pkg?.amount || "",
        price: pkg?.price || "$0",
        playerId,
        server,
      });

      setIsAdding(false);
      toast({
        title: "Added to Cart",
        description: `${product.title} - ${pkg?.amount} added successfully.`,
        duration: 3000,
      });
      setLocation("/cart");
    }, 600);
  };

  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Game Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden glass-panel border-white/10 aspect-[3/4] group">
              <img 
                src={imageMap[product.image]} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-3xl border-white/20 bg-black/40 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-4 h-4 fill-primary" />
                    <span className="font-bold">4.9</span>
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Official Partner</div>
                </div>
                <h3 className="text-white font-display font-bold text-lg">GUARANTEED DELIVERY</h3>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Selection Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest">
                  {product.category}
                </div>
                <div className="flex items-center gap-1 text-secondary text-xs font-bold uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-secondary" />
                  Trending #1
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-4 uppercase leading-none tracking-tight">
                {product.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
                Direct top-up for {product.title}. Select your package, enter your player ID, and get your items delivered instantly.
              </p>
            </div>

            {/* Step 1: Player Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-3 uppercase">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">1</div>
                Player Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Player ID</label>
                  <div className="relative">
                    <Input 
                      placeholder="Enter ID (e.g. 5238129)" 
                      className={`bg-white/5 border-white/10 rounded-2xl h-14 focus:ring-primary focus:border-primary/50 text-white font-bold tracking-wider ${error ? 'border-destructive/50' : ''}`}
                      value={playerId}
                      onChange={(e) => setPlayerId(e.target.value)}
                    />
                    {playerId.length >= 5 && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />}
                  </div>
                  <AnimatePresence>
                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0 }}
                        className="text-destructive text-xs font-bold flex items-center gap-1 mt-2 ml-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Server Region</label>
                  <Select value={server} onValueChange={setServer}>
                    <SelectTrigger className="bg-white/5 border-white/10 rounded-2xl h-14 text-white font-bold">
                      <SelectValue placeholder="Select Server" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10 rounded-2xl overflow-hidden">
                      {SERVERS.map(s => (
                        <SelectItem key={s} value={s} className="hover:bg-primary/10 focus:bg-primary/10 text-white font-medium">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Step 2: Package Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-3 uppercase">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary text-sm">2</div>
                Select Package
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PACKAGES.map((pkg) => (
                  <div 
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative p-6 rounded-3xl border-2 transition-all duration-300 cursor-pointer group ${
                      selectedPackage === pkg.id 
                        ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(0,255,255,0.15)]' 
                        : 'border-white/5 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-secondary text-background text-[10px] font-black uppercase tracking-tighter">
                        Most Popular
                      </div>
                    )}
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm font-bold uppercase tracking-widest ${selectedPackage === pkg.id ? 'text-primary' : 'text-muted-foreground'}`}>
                        {pkg.name}
                      </span>
                      {selectedPackage === pkg.id && <Zap className="w-4 h-4 text-primary animate-pulse" />}
                    </div>
                    <div className="text-2xl font-display font-black text-white mb-4">{pkg.amount}</div>
                    <div className="text-xl font-bold text-white/90">{pkg.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Summary & CTA */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1 w-full">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Price</div>
                  <div className="text-4xl font-display font-black text-white neon-text">
                    {PACKAGES.find(p => p.id === selectedPackage)?.price}
                  </div>
                </div>
                <div className="glow-btn flex-[2] w-full rounded-full">
                  <Button 
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className="w-full h-20 rounded-full bg-primary text-background hover:bg-primary/90 font-black text-2xl tracking-widest uppercase transition-transform active:scale-95 disabled:opacity-50"
                  >
                    <ShoppingCart className={`w-7 h-7 mr-3 ${isAdding ? 'animate-bounce' : ''}`} />
                    {isAdding ? 'ADDING...' : 'ADD TO CART'}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                  <Shield className="w-3 h-3 text-primary" /> Instant Delivery
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                  <Shield className="w-3 h-3 text-primary" /> Verified Safe
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                  <Shield className="w-3 h-3 text-primary" /> 24/7 Support
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
