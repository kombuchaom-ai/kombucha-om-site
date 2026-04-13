
import { PROCESS_STEPS } from "@/lib/constants";
import processImg from "@/assets/infographic-what-is.png"; // Usar como placeholder se não tiver img específica de processo

export default function Process() {
  return (
    <section className="py-24 bg-white" id="processo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-bold tracking-wide uppercase text-sm">Nosso Processo</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">Feita com tempo, carinho e tradição</h2>
              <p className="text-lg text-muted-foreground">
                Nossa kombucha é produzida de forma artesanal, respeitando o tempo natural de fermentação. Não usamos atalhos, conservantes ou processos industriais.
              </p>
            </div>

            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/20 text-primary font-bold font-display text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted aspect-[4/5]">
               {/* Usando uma imagem genérica de processo ou a imagem de 'o que é' como placeholder visual */}
                <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
                   <p className="text-muted-foreground">Imagem do Processo de Produção / Fermentação</p>
                   {/* Em produção real, substituiria por uma foto real da fábrica/tanques */}
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block animate-bounce-slow">
                  <p className="font-display font-bold text-primary text-4xl mb-1">100%</p>
                  <p className="text-sm font-medium text-foreground">Artesanal e Natural</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
