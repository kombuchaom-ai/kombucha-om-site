
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SUBSCRIPTION_DURATIONS, SUBSCRIPTION_PLANS, WHATSAPP_LINK } from "@/lib/constants";
import { Star } from "lucide-react";
import { calcSubscriptionTotal, formatBRL, formatBRLPrecise } from "@/lib/pricing";
import { cn } from "@/lib/utils";

import planEssencial from "@/assets/plan-essencial.png";
import planEquilibrio from "@/assets/plan-equilibrio.png";
import planFamilia from "@/assets/plan-familia.png";
import planIntensivo from "@/assets/plan-intensivo.png";
import plansOverview from "@/assets/plans-overview.png";

const planImageMap: Record<string, string> = {
  "plan-essencial": planEssencial,
  "plan-equilibrio": planEquilibrio,
  "plan-familia": planFamilia,
  "plan-intensivo": planIntensivo,
};

export default function Subscription() {
  const [durationKey, setDurationKey] = useState(SUBSCRIPTION_DURATIONS[0].key);

  const duration = useMemo(
    () => SUBSCRIPTION_DURATIONS.find((d) => d.key === durationKey) ?? SUBSCRIPTION_DURATIONS[0],
    [durationKey]
  );

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white" id="assinatura">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-4">
            Clube de Assinantes
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Assine por 3, 6 ou 12 meses
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha a modalidade e finalize tudo com nosso atendimento no WhatsApp.
          </p>
        </div>


        <Tabs value={durationKey} onValueChange={(v) => setDurationKey(v as any)} className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-3 mb-10">
            <TabsList className="bg-white shadow-md border border-border rounded-full p-1 h-auto flex flex-wrap justify-center">
              {SUBSCRIPTION_DURATIONS.map((d) => (
                <TabsTrigger
                  key={d.key}
                  value={d.key}
                  className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white relative group"
                >
                  {d.isPopular && <Star className="inline-block w-4 h-4 mr-1 text-yellow-500 fill-current" />}
                  {d.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <p className="text-xs md:text-sm text-muted-foreground text-center px-4 leading-relaxed">
              Valores calculados conforme regra: preço mensal da arte × {duration.months} meses.
            </p>

            <div className="h-32 flex items-center justify-center w-full max-w-3xl">
              {duration.bonusTitle ? (
                <div className="bg-primary/5 hover:bg-primary/10 border-2 border-primary/20 rounded-2xl p-4 md:p-6 text-center animate-in zoom-in-95 duration-500 shadow-xl shadow-primary/5 transition-colors">
                  <h4 className="font-display font-bold text-primary text-xl md:text-2xl mb-2 flex items-center justify-center gap-2">
                    {duration.bonusTitle}
                  </h4>
                  <p className="text-foreground/90 md:text-md leading-relaxed font-medium">
                    {duration.bonusText}
                  </p>
                </div>
              ) : (
                <div className="bg-muted/30 border border-dashed border-border rounded-2xl p-4 text-center animate-in fade-in duration-500 max-w-2xl">
                  <p className="text-muted-foreground text-sm">
                     ⭐ Dica: Avance para os planos <span className="font-bold text-primary">Semestral</span> ou <span className="font-bold text-primary">Anual</span> para desbloquear o status VIP e receber nossa Bolsa Térmica Exclusiva, Taças Personalizadas e acesso a degustações inéditas!
                  </p>
                </div>
              )}
            </div>
          </div>

          {SUBSCRIPTION_DURATIONS.map((d) => (
            <TabsContent key={d.key} value={d.key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SUBSCRIPTION_PLANS.map((plan) => {
                  const total = calcSubscriptionTotal(plan.baseMonthlyFromImage, d.months);
                  const img = planImageMap[plan.imageKey] ?? plansOverview;
                  
                  // Lógica de Desconto e Preço Unitário
                  const retailPrice = 30; // Preço fora do clube R$ 30,00
                  const growlersPerMonth = plan.growlersPerWeek * 4; // média de 4 semanas no mês
                  const unitPrice = plan.baseMonthlyFromImage / growlersPerMonth;
                  const discountPercent = Math.round((1 - (unitPrice / retailPrice)) * 100);

                  return (
                    <div
                      key={`${d.key}-${plan.key}`}
                      className={cn(
                        "rounded-3xl overflow-hidden bg-white border shadow-lg transition-transform duration-300 hover:-translate-y-1",
                        plan.key === "equilibrio" ? "border-primary/40 shadow-primary/10" : "border-border"
                      )}
                    >
                      <div className="relative">
                        <img src={img} alt={`Plano ${plan.name}`} className="w-full h-auto object-cover" loading="lazy" />
                        
                        {/* Selo de Desconto com base no varejo */}
                        <div className="absolute top-4 left-4 z-10 animate-bounce-slow">
                          <div className="bg-primary text-white font-extrabold px-3 py-1 rounded-full shadow-lg border-2 border-white/20 flex items-center gap-1">
                            <span className="text-lg leading-none">{discountPercent}%</span>
                            <span className="text-xs leading-none">OFF</span>
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                        <div className="absolute left-4 bottom-4 right-4">
                          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-foreground">
                            {d.label} • {plan.growlersPerWeek} growlers/semana
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-baseline justify-between gap-3">
                          <h3 className="font-display font-bold text-xl">{plan.name}</h3>
                          {plan.key === "equilibrio" && (
                            <span className="text-xs font-bold bg-primary text-white px-3 py-1 rounded-full">Mais escolhido</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{plan.tagline}</p>

                        <div className="mt-5 rounded-2xl bg-muted p-4">
                          <div className="flex justify-between items-end mb-1">
                            <span className="text-xs text-muted-foreground">Total do período</span>
                            <span className="text-xs font-bold text-primary">({formatBRLPrecise(unitPrice)} a unidade)</span>
                          </div>
                          <div className="text-3xl font-bold text-foreground font-display leading-tight">{formatBRL(total)}</div>
                        </div>

                        <div className="mt-5">
                          <Button asChild className="w-full rounded-full h-12 text-lg">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                              Assinar via WhatsApp
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
