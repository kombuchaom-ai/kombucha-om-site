import { Card, CardContent } from "@/components/ui/card";
const AccessibilitySection = () => {
  return <section className="py-20 bg-kombucha-cream/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-kombucha-green/30 shadow-lg">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-8">
                Mesmo que você <span className="text-kombucha-brown">nunca tenha fermentado nada</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-kombucha-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-lg text-kombucha-brown">
                      <strong>Passo a passo simples</strong> - Cada etapa explicada detalhadamente
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-kombucha-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-lg text-kombucha-brown">
                      <strong>Sem experiência necessária</strong> - Começamos do básico absoluto
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-kombucha-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-lg text-kombucha-brown">
                      <strong>Suporte individual</strong> - André França responde suas dúvidas pessoalmente
                    </p>
                  </div>
                  
                  
                </div>
                
                <div className="bg-kombucha-yellow/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-kombucha-green mb-4">
                    "Não precisa ser chef!"
                  </h3>
                  <p className="text-kombucha-brown text-lg leading-relaxed">
                    Se você consegue fazer chá, você consegue fazer kombucha. 
                    É mais simples do que parece e muito mais gostoso do que você imagina.
                  </p>
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AccessibilitySection;