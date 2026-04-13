
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="py-32 bg-gradient-to-r from-primary to-secondary text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 drop-shadow-md">
          Pronto para vibrar vida e saúde?
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
          Junte-se a milhares de pessoas que já transformaram seus hábitos. Assine nosso clube ou peça seu kit degustação agora.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 text-lg px-10 h-14 shadow-xl">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Ver Produtos</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-10 h-14">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Assinar Clube</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
