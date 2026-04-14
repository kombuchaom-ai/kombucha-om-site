import { PHILOSOPHY_CONTENT } from "@/lib/constants";
import lifestyleImg from "@/assets/lifestyle-woman.png";

export default function Philosophy() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="filosofia">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-t-full rounded-b-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto">
              <img
                src={lifestyleImg}
                alt="Estilo de vida Kombucha Om"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Zen decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-50" />
            <div className="absolute top-10 -left-10 w-24 h-24 bg-primary rounded-full blur-2xl opacity-50" />
          </div>

          <div className="order-1 lg:order-2 space-y-8 animate-in slide-in-from-right duration-700">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              {PHILOSOPHY_CONTENT.title}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="border-l-4 border-primary pl-4 italic text-foreground font-medium">
                {PHILOSOPHY_CONTENT.text1}
              </p>
              <p>{PHILOSOPHY_CONTENT.text2}</p>
              <p>{PHILOSOPHY_CONTENT.text3}</p>
            </div>
            <div className="pt-4">
              <span className="font-display text-8xl text-primary/10 absolute -z-10 -mt-20 ml-20 select-none">
                Om
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
