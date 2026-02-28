import { Link } from "wouter";
import { Search, ShoppingCart, User, Menu, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl flex items-center justify-between px-6 py-3 border-white/5 bg-background/40 backdrop-blur-xl">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary/20 p-2 rounded-xl border border-primary/30 group-hover:border-primary transition-colors">
              <Gamepad2 className="w-6 h-6 text-primary neon-text" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-white">
              NEXUS
            </span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/"><a className="text-white hover:text-primary transition-colors neon-text-hover">Games</a></Link>
          <Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Gift Cards</a></Link>
          <Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Trending</a></Link>
          <Link href="/"><a className="text-muted-foreground hover:text-primary transition-colors">Support</a></Link>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-primary rounded-full hover:bg-white/5 hidden sm:flex">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary rounded-full hover:bg-white/5 relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full neon-border"></span>
          </Button>
          <div className="w-px h-6 bg-white/10 hidden sm:block mx-1"></div>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary rounded-full hover:bg-white/5 hidden sm:flex">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="default" className="hidden lg:flex bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground font-bold tracking-wide rounded-full px-6 transition-all duration-300">
            SIGN IN
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}