import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAVIGATION_LINKS, BRAND_NAME, WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/#" className="flex items-center gap-2 group">
          <div
            className={cn(
              "relative w-14 h-14 md:w-16 md:h-16 transition-transform group-hover:scale-105",
            )}
          >
            <img
              src={logo}
              alt={BRAND_NAME}
              className="w-full h-full object-contain"
            />
          </div>
          <span
            className={cn(
              "font-display font-bold text-2xl md:text-3xl tracking-tight transition-colors pt-1",
              isScrolled ? "text-foreground" : "text-foreground md:text-white",
            )}
          >
            {BRAND_NAME}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled
                  ? "text-foreground"
                  : "text-foreground md:text-white/90 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className={cn(
              "rounded-full font-bold shadow-md transition-transform hover:scale-105",
              !isScrolled && "bg-white text-primary hover:bg-white/90",
            )}
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Assinar Agora
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2",
            isScrolled ? "text-foreground" : "text-foreground md:text-white",
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium py-2 px-4 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-border my-2" />
          <Button
            asChild
            className="w-full rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Assinar Agora
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
