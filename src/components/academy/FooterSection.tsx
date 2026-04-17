const FooterSection = () => {
  return <footer className="bg-kombucha-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Kombucha para Todos</h3>
            <p className="text-kombucha-cream max-w-2xl mx-auto">
              Transformando vidas através da arte da fermentação. 
              Aprenda a fazer kombucha de verdade com quem entende do assunto.
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-kombucha-cream">
                © 2025 André França - Kombucha para Todos. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span className="text-kombucha-cream">Suporte: kombuchaom@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📱</span>
                  <span className="text-kombucha-cream">WhatsApp: (35) 991586167</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-kombucha-cream/70">
            Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
            Consulte sempre um profissional de saúde antes de fazer mudanças significativas em sua dieta.
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;