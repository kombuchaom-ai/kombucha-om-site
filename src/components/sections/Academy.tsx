
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, BookOpen, FlaskConical, Award } from "lucide-react";
import academyImg from "@/assets/academy-scoby.jpg";

export default function Academy() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="academy">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              Educação & Fermentação
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Aprenda a fermentar com a gente na <span className="text-primary">KOMBUCHA OM ACADEMY</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Domine a arte da fermentação natural e transforme sua saúde com o nosso método exclusivo. Da cultura do SCOBY ao envase perfeito, ensinamos tudo para que você crie sua própria bebida viva em casa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teoria Completa</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Prática Guiada</h4>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Certificado</h4>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl hover:scale-105 transition-all w-full sm:w-auto">
                <Link href="/academy-lp01">Entrar na Kombucha Om Academy</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5] group">
              <img
                src={academyImg}
                alt="Workshop Kombucha Om Academy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
