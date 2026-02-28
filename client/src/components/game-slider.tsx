import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import products from "@/lib/products.json";

// Image mapping since JSON can't hold imported variables
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

export default function GameSlider({ title, subtitle }: { title: string, subtitle?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };
    
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-16 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            {subtitle && (
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-secondary fill-secondary" />
                <span className="text-sm font-bold uppercase tracking-widest text-secondary">{subtitle}</span>
              </div>
            )}
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{title}</h2>
          </div>
          
          <div className="hidden md:flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/10 hover:bg-white/10 hover:text-white glass-panel w-12 h-12"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/10 hover:bg-white/10 hover:text-white glass-panel w-12 h-12"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pb-8 pt-4">
            {products.map((game, idx) => (
              <motion.div 
                key={game.id}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/product/${game.slug}`}>
                  <a className="group block relative rounded-2xl overflow-hidden glass-panel border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,255,255,0.2)] hover:border-primary/50">
                    {game.hot && (
                      <div className="absolute top-4 left-4 z-20 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                        <Zap className="w-3 h-3" />
                        HOT
                      </div>
                    )}
                    
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
                      <img 
                        src={imageMap[game.image]} 
                        alt={game.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-xs text-primary font-bold tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{game.category}</div>
                        <h3 className="text-xl font-bold text-white font-display mb-2">{game.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white/90">{game.price}</span>
                          <Button size="sm" className="rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-background h-8 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                            TOP UP
                          </Button>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
