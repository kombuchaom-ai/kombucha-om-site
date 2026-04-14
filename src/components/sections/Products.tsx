
import { Button } from "@/components/ui/button";
import flavorsMenu from "@/assets/flavors-menu.png";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Products() {
  return (
    <section className="py-24 bg-background" id="produtos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Nossos sabores disponíveis no momento :
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Melhor custo benefício com nosso growler padrão de 1,5 litros por apenas R$20/litro nos sabores tradicionais e R$30/litro nos sabores Hard/alcoólicos. Escolha seus favoritos e peça direto no WhatsApp.
          </p>
          <p className="text-lg font-semibold text-primary max-w-2xl mx-auto mt-4">
            Dica da casa → No clube de assinaturas o custo benefício fica ainda maior, incluindo bônus e vantagens exclusivas.
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
