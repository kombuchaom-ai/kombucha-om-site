import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Preciso de Scoby para começar?",
  answer: "Não se preocupe! No curso, eu ensino como conseguir seu primeiro Scoby e também como cultivar um a partir do zero. Você terá várias opções para começar sua jornada na kombucha."
}, {
  question: "Posso fazer o curso sem experiência na cozinha?",
  answer: "Claro! O curso foi pensado para iniciantes completos. Se você consegue fazer chá, você consegue fazer kombucha. Explico cada passo de forma simples e detalhada, sem termos complicados."
}, {
  question: "Em quanto tempo terei minha primeira kombucha pronta?",
  answer: "Sua primeira kombucha estará pronta em aproximadamente 7-10 dias após começar o processo. É mais rápido do que você imagina! E com o tempo, você pode acelerar ainda mais o processo."
}, {
  question: "O curso tem garantia?",
  answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
}, {
  question: "Como funciona o suporte individual?",
  answer: "Você terá acesso direto ao André França através do grupo no WhatsApp e também pode enviar dúvidas específicas que serão respondidas pessoalmente. O suporte é ilimitado e vitalício."
}, {
  question: "Preciso de equipamentos especiais?",
  answer: "Não! Você provavelmente já tem tudo em casa: potes de vidro, panos limpos e ingredientes básicos como chá e açúcar. No curso, mostro exatamente o que usar e onde encontrar."
}, {
  question: "A kombucha caseira é segura?",
  answer: "Absolutamente! Seguindo as técnicas de higienização e fermentação que ensino no curso, sua kombucha será totalmente segura. A fermentação natural da kombucha inibe o crescimento de bactérias nocivas."
}, {
  question: "Quanto tempo de acesso ao curso tenho?",
  answer: "O acesso é VITALÍCIO! Você pode assistir às aulas quantas vezes quiser, para sempre. O curso é seu e ficará disponível em sua conta permanentemente."
}, {
  question: "Consigo fazer sabores diferentes?",
  answer: "Sim! Uma das partes mais divertidas do curso é aprender a criar sabores únicos. Ensino dezenas de combinações com frutas, ervas e especiarias. As possibilidades são infinitas!"
}, {
  question: "Vale a pena financeiramente?",
  answer: "Definitivamente! Uma kombucha de 500ml no mercado custa entre R$ 6-12. Fazendo em casa, o mesmo volume sai por menos de R$ 1,50. O curso se paga rapidamente e você economiza para sempre."
}];
const FAQSection = () => {
  return <section className="py-20 bg-kombucha-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-6">
            Dúvidas Frequentes
          </h2>
          
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-kombucha-green/20 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-kombucha-green hover:text-kombucha-brown">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-kombucha-green/10 border border-kombucha-green rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-kombucha-green mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-4">
              Entre no nosso grupo no WhatsApp e fale diretamente com André França e outros alunos!
            </p>
            <a
              href="https://wa.me/message/MFHUNPD3MFI6G1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;