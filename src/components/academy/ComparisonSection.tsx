import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const ComparisonSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-6">
            Fazer em Casa × Comprar Pronta
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja a diferença que faz produzir sua própria kombucha
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fazer em Casa */}
          <Card className="border-kombucha-green border-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-kombucha-green text-white px-4 py-2 text-sm font-bold">
              RECOMENDADO ⭐
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-kombucha-green text-center">
                🏠 Fazer em Casa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-kombucha-light-green/30 p-4 rounded-lg">
                <p className="text-lg font-bold text-kombucha-green mb-2">Custo por litro:</p>
                <p className="text-3xl font-bold text-kombucha-green">R$ 2,50</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-kombucha-green text-xl">✅</span>
                  <span className="text-kombucha-brown">Ingredientes 100% naturais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kombucha-green text-xl">✅</span>
                  <span className="text-kombucha-brown">Sabores personalizados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kombucha-green text-xl">✅</span>
                  <span className="text-kombucha-brown">Sem conservantes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kombucha-green text-xl">✅</span>
                  <span className="text-kombucha-brown">Quantidade ilimitada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kombucha-green text-xl">✅</span>
                  <span className="text-kombucha-brown">Menos lixo e mais reaproveitamento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-kombucha-green text-xl">✅</span>
                  <span className="text-kombucha-brown">Controle total do processo</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Comprar Pronta */}
          <Card className="border-muted">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-muted-foreground text-center">
                🛒 Comprar Pronta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <p className="text-lg font-bold text-red-600 mb-2">Custo por litro:</p>
                <p className="text-3xl font-bold text-red-600">R$ 25,00+</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-muted-foreground">Ingredientes questionáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-muted-foreground">Sabores limitados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-muted-foreground">Conservantes e aditivos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-muted-foreground">Preço alto</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-muted-foreground">Muito lixo plástico</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-muted-foreground">Dependência do fornecedor</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-kombucha-yellow/20 border-2 border-kombucha-yellow rounded-lg p-6 inline-block">
            <p className="text-2xl font-bold text-kombucha-brown">
              💡 Economia de até <span className="text-kombucha-green">80%</span> fazendo em casa!
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ComparisonSection;