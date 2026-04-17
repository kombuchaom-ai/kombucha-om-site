import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const PricingSection = () => {
  return <section className="py-20 bg-[#f2f617]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-6">
            Oferta Especial
          </h2>
          <p className="text-xl text-muted-foreground">
            Invista no seu conhecimento e transforme sua saúde
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-kombucha-green border-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-kombucha-yellow text-kombucha-brown px-6 py-2 font-bold transform -rotate-45 -translate-x-4 translate-y-6">
              MELHOR OFERTA
            </div>
            
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-kombucha-green mb-8">
                Kombucha para Todos - Acesso Vitalício
              </h3>
              
              <div className="mb-8">
                <div className="text-muted-foreground text-lg mb-2 line-through">
                  De R$ 497
                </div>
                <div className="text-6xl font-bold text-kombucha-green mb-4">
                  R$ 250
                </div>
                <div className="text-kombucha-brown text-lg">
                  ou 12x de R$ 20,83 sem juros
                </div>
              </div>
              
              <div className="bg-kombucha-light-green/20 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-kombucha-green mb-4 text-lg">
                  ✅ Tudo que você vai receber:
                </h4>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-2">
                    <span className="text-kombucha-green">✓</span>
                    <span className="text-kombucha-brown">Curso completo com acesso vitalício</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-kombucha-green">✓</span>
                    <span className="text-kombucha-brown">Apostila digital completa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-kombucha-green">✓</span>
                    <span className="text-kombucha-brown">Palestras do evento internacional</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    
                    
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-kombucha-green">✓</span>
                    <span className="text-kombucha-brown">Suporte individual com André França</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-kombucha-green">✓</span>
                    <span className="text-kombucha-brown">Receitas culinárias bônus</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <Button size="lg" variant="cta" className="w-full text-base md:text-xl py-6 h-auto animate-pulse hover:animate-none" onClick={() => window.open('https://checkout4.xgrow.com/pt/5be9d4cf-7da3-4b18-afbb-8dbc782cba5d/MzQ5NTU=', '_blank')}>
                  Quero me inscrever agora!
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  💳 Cartão de crédito • 🏦 Pix • 📄 Boleto bancário
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="bg-kombucha-yellow/20 border border-kombucha-yellow rounded-lg p-4">
                  <p className="text-kombucha-brown font-semibold">
                    🛡️ <strong>Garantia de 7 dias</strong> - Se não gostar, devolvemos 100% do seu dinheiro
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default PricingSection;