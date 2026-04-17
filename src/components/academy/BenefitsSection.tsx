import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🦠",
    title: "Saúde Intestinal",
    description: "Probióticos naturais que fortalecem sua microbiota e melhoram a digestão"
  },
  {
    icon: "🔍",
    title: "Controle Total",
    description: "Você escolhe os ingredientes, sem conservantes ou aditivos artificiais"
  },
  {
    icon: "💰",
    title: "Super Economia",
    description: "Até 80% mais barato que comprar kombucha pronta no mercado"
  },
  {
    icon: "🌈",
    title: "Sabores Infinitos",
    description: "Crie combinações únicas com frutas, ervas e especiarias naturais"
  },
  {
    icon: "🌱",
    title: "Sustentabilidade",
    description: "Menos embalagens, menos resíduos, mais cuidado com o planeta"
  },
  {
    icon: "⚡",
    title: "Energia Natural",
    description: "Vitaminas do complexo B e antioxidantes para mais disposição no dia a dia"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-6">
            Por que fazer sua própria Kombucha?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra os benefícios incríveis de produzir sua kombucha em casa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-kombucha-green/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-kombucha-green mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;