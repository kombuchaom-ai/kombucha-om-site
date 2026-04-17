import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bonuses = [
  {
    icon: "📖",
    title: "Apostila Digital Completa",
    description: "Material de apoio em PDF com todas as receitas, dicas e técnicas para consultar offline",
    value: "R$ 49,70"
  },
  {
    icon: "🎥",
    title: "Acervo técnico/científico exclusivo",
    description: "Acesso ao drive com palestras únicas de um evento internacional de kombucha com grandes especialistas",
    value: "R$ 700"
  },
  {
    icon: "🎯",
    title: "Suporte Individual",
    description: "Atendimento direto com André França para suas dúvidas específicas",
    value: "R$ 297"
  },
  {
    icon: "👨‍🍳",
    title: "Receitas Culinárias",
    description: "Módulo extra com receitas para usar kombucha na culinária além da bebida",
    value: "R$ 127"
  }
];

const BonusSection = () => {
  const totalBonusValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-20 bg-kombucha-green text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjBjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBoLTIwdjIweiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🎁 Bônus Exclusivos
          </h2>
          <p className="text-xl text-kombucha-cream max-w-3xl mx-auto">
            Além do curso completo, você vai receber estes materiais extras sem custo adicional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{bonus.icon}</div>
                <CardTitle className="text-lg">
                  {bonus.title}
                </CardTitle>
                <div className="bg-kombucha-yellow text-kombucha-brown font-bold px-3 py-1 rounded-full text-sm inline-block">
                  Valor: {bonus.value}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-kombucha-cream text-center leading-relaxed text-sm">
                  {bonus.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="bg-kombucha-yellow text-kombucha-brown max-w-md mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                💰 Valor Total dos Bônus
              </h3>
              <div className="text-4xl font-bold mb-2">
                R$ {totalBonusValue.toLocaleString('pt-BR')}
              </div>
              <p className="text-sm">
                Mas você leva tudo isso <strong>GRÁTIS</strong> junto com o curso!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;