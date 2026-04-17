import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e45a9c88-d657-4620-bf71-912f96cf6d40.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight bg-black/60 backdrop-blur-sm rounded-2xl p-4 inline-block">
            Kombucha para <span className="text-kombucha-yellow">Todos</span>
          </h1>
          
          <div className="bg-white/90 backdrop-blur-sm border-2 border-kombucha-yellow rounded-lg p-4 mb-8 inline-block">
            <p className="text-xl md:text-2xl font-semibold text-kombucha-brown">
              🎯 Acesso Vitalício • Aprenda no Seu Ritmo
            </p>
          </div>
          
          <p className="text-xl md:text-2xl text-kombucha-brown mb-8 max-w-3xl mx-auto leading-relaxed bg-white/90 backdrop-blur-sm rounded-2xl p-4 inline-block">
            Descubra como fermentar sua própria Kombucha de forma <strong>simples, saudável e econômica</strong>. 
            Mesmo sem experiência na cozinha, você vai dominar esta arte milenar em poucas semanas.
          </p>
          
          <div className="space-y-4 mb-10">
            <p className="text-lg text-kombucha-green font-medium bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block">
              ✨ Aprenda com André França, fundador da Kombucha Om desde 2017
            </p>
            <p className="text-lg text-kombucha-green font-medium bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block">🌱 Método testado e aprovado </p>
          </div>
          
          <Button size="lg" variant="cta" className="text-sm md:text-xl px-3 md:px-12 py-3 md:py-6 h-auto max-w-full animate-pulse hover:animate-none" onClick={() => window.open('https://checkout4.xgrow.com/pt/5be9d4cf-7da3-4b18-afbb-8dbc782cba5d/MzQ5NTU=', '_blank')}>
            Quero aprender a fazer Kombucha de Verdade
          </Button>
          
          <p className="text-sm text-kombucha-brown mt-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block">
            🔒 Compra 100% segura • 💳 12x sem juros no cartão
          </p>
        </div>
      </div>
    </section>;
};
export default HeroSection;