
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
        <div className="flex justify-center mt-4">
          <div className="relative inline-flex group">
            {/* Efeito Glow Pulsante Oculto Atrás do Botão */}
            <div className="absolute transition-all duration-1000 opacity-60 -inset-2 bg-white rounded-full blur-xl group-hover:opacity-100 group-hover:-inset-3 animate-pulse"></div>
            
            <Button asChild size="lg" className="relative rounded-full bg-white text-primary hover:bg-white/95 text-lg font-bold px-12 h-16 shadow-2xl hover:scale-105 transition-transform duration-300">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">FALE CONOSCO</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
