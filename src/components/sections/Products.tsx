
import { Button } from "@/components/ui/button";
import flavorsMenu from "@/assets/flavors-menu.png";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Products() {
  return (
    <section className="py-24 bg-background" id="produtos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-bold tracking-wide uppercase text-sm">
            Sabores
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">
            Confira nossos sabores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tradicionais e Hard Kombucha. Escolha seus favoritos e peça direto no WhatsApp.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-white">
            <img
              src={flavorsMenu}
              alt="Menu de sabores Kombucha Om"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full px-10 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Quero pedir no WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
