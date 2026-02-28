import { useRoute } from "wouter";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Shield, ChevronRight, Star, ShoppingCart } from "lucide-react";
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

export default function ProductDetails() {
  const [, params] = useRoute("/product/:slug");
  const product = products.find(p => p.slug === params?.slug);

  if (!product) return <div>Product not found</div>;

  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden glass-panel border-white/10 aspect-[3/4] lg:aspect-auto h-[600px]"
          >
            <img 
              src={imageMap[product.image]} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4 text-primary font-bold tracking-widest text-sm uppercase">
              <Zap className="w-4 h-4" />
              {product.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase leading-none">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-secondary">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-secondary" />)}
              </div>
              <span className="text-muted-foreground font-medium">500+ Reviews</span>
            </div>

            <p className="text-xl text-muted-foreground mb-10 font-light leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mb-10">
              <div className="text-4xl font-display font-bold text-white neon-text">{product.price}</div>
              <div className="glow-btn flex-1 rounded-full">
                <Button size="lg" className="w-full h-16 rounded-full bg-primary text-background hover:bg-primary/90 font-black text-xl tracking-widest uppercase">
                  <ShoppingCart className="w-6 h-6 mr-2" /> ADD TO CART
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
