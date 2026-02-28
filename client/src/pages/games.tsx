import Navbar from "@/components/navbar";
import GameSlider from "@/components/game-slider";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Games() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="container max-w-7xl mx-auto px-4 md:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-2">ALL GAMES</h1>
            <p className="text-muted-foreground">Browse our full catalog of digital top-ups and game keys.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search games..." className="bg-white/5 border-white/10 pl-10 rounded-xl" />
            </div>
            <Button variant="outline" className="glass-panel border-white/10 rounded-xl">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>
        </motion.div>

        <GameSlider title="FEATURED TITLES" />
        <div className="mt-12">
          <GameSlider title="BEST SELLERS" subtitle="Top Picks" />
        </div>
      </div>
    </main>
  );
}
