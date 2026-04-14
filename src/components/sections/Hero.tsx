import { Button } from "@/components/ui/button";
import { HERO_CONTENT, WHATSAPP_LINK } from "@/lib/constants";
import heroImg from "@/assets/hero-collage.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-green-50 to-orange-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vh] h-[50vh] rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[60vh] h-[60vh] rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left animate-in slide-in-from-left duration-700">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-2">
              Kombucha Premium Mineira
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground">
              {HERO_CONTENT.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              {HERO_CONTENT.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full text-lg px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                <a href="#produtos">{HERO_CONTENT.ctaPrimary}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full text-lg px-8 hover:bg-white/50"
              >
                <a href="#assinatura">{HERO_CONTENT.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-700 delay-200 pt-6">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroImg}
                alt="Kombucha Om Garrafa"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
            {/* Decorative elements behind image */}
            <div className="absolute inset-0 bg-primary rounded-2xl transform -rotate-2 scale-105 z-0 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
