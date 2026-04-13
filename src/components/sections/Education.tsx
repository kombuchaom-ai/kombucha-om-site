
import { RefreshCw, ShieldCheck, Leaf, Zap } from "lucide-react";
import { EDUCATION_ITEMS } from "@/lib/constants";

const iconMap = {
  RefreshCw,
  ShieldCheck,
  Leaf,
  Zap,
} as const;

export default function Education() {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom duration-700 fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            O que é Kombucha?
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma bebida fermentada, naturalmente gaseificada e cheia de vida.
            Conheça os pilares que fazem da Kombucha Om um elixir de bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EDUCATION_ITEMS.map((item, index) => {
            const Icon = iconMap[item.iconName];

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
