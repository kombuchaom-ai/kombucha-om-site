import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const modules = [{
  icon: "🧪",
  title: "Fermentação",
  description: "Aprenda todos os processos de cultivo de kombucha, desde a primeira fermentação até os segredos para manter e multiplicar uma cultura saudável e segura"
}, {
  icon: "🧽",
  title: "Higienização",
  description: "Técnicas essenciais de limpeza e esterilização para garantir uma kombucha segura e livre de contaminações"
}, {
  icon: "🍓",
  title: "Saborização",
  description: "Descubra como criar sabores únicos com frutas, ervas, especiarias e combinações que vão surpreender seu paladar"
}, {
  icon: "📦",
  title: "Armazenamento",
  description: "Métodos corretos de conservação, envasamento e tempo de prateleira para manter a qualidade da sua kombucha"
}, {
  icon: "⚗️",
  title: "Análises e controles",
  description: "Como monitorar e ajustar a acidez e controle de açúcar da sua kombucha para garantir sabor perfeito e propriedades probióticas"
}, {
  icon: "🎨",
  title: "Personalização",
  description: "Desenvolva suas próprias receitas exclusivas e torne-se um verdadeiro mestre na arte da kombucha"
}];
const CourseContentSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-6">Nas aulas você vai aprender sobre</h2>
          
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-kombucha-green/20">
              <CardHeader className="text-center pb-4 mx-[9px]">
                <div className="text-5xl mb-4">{module.icon}</div>
                <CardTitle className="text-xl text-kombucha-green">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {module.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-kombucha-light-green/20 to-kombucha-cream/20 border-kombucha-green/30">
            
          </Card>
        </div>
      </div>
    </section>;
};
export default CourseContentSection;