
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Users } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Distribution() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden" id="distribuicao">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Enviamos para todo o Brasil
          </h2>
          <p className="text-xl text-white/70">
            De Minas Gerais, direto das terras altas da mantiqueira para a sua casa, em qualquer lugar do país. Nossa kombucha viaja com todo cuidado para chegar cheia de vida e energia até você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-display text-white mb-2">27</h3>
            <p className="text-white/70">Estados atendidos</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <Truck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-display text-white mb-2">48h</h3>
            <p className="text-white/70">Prazo médio de envio (Sudeste)</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold font-display text-white mb-2">3500+</h3>
            <p className="text-white/70">Clientes satisfeitos</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto shadow-2xl">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-bold font-display text-foreground">Quer revender Kombucha Om?</h3>
            <p className="text-muted-foreground">Leve saúde e sabor para o seu estabelecimento.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
               <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Seja um Revendedor</a>
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
