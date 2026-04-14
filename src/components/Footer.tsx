
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { BRAND_NAME, BRAND_TAGLINE, FOOTER_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [openDialog, setOpenDialog] = useState<"privacidade" | "termos" | null>(null);

  return (
    <footer className="bg-foreground text-background pt-16 pb-8" id="footer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full p-1">
                <img src={logo} alt={BRAND_NAME} className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl">{BRAND_NAME}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {BRAND_TAGLINE}
              <br />
              Feito com amor nas montanhas de Minas Gerais para todo o Brasil.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/kombuchaomoficial/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/kombuchaom/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>Soledade de Minas, MG<br />Serra da Mantiqueira</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <a href="mailto:kombuchaom@gmail.com" className="hover:text-white transition-colors">kombuchaom@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">(35) 91586-6167</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Novidades</h3>
            <p className="text-white/70 text-sm mb-4">
              Receba dicas de saúde e ofertas exclusivas do nosso clube.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-3 py-2 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Dialog open={openDialog === "termos"} onOpenChange={(open) => setOpenDialog(open ? "termos" : null)}>
              <DialogTrigger asChild>
                <button className="hover:text-white transition-colors text-xs">Termos de Uso</button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Termos de Uso</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-4 mt-4">
                  <h3 className="font-bold text-foreground">1. Aceitação dos Termos</h3>
                  <p>Ao acessar e usar o site da {BRAND_NAME}, você aceita e concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nosso site.</p>

                  <h3 className="font-bold text-foreground">2. Uso do Site</h3>
                  <p>Você concorda em usar este site apenas para fins legais e de maneira que não infrinja os direitos de outros usuários. Você não deve usar este site de qualquer forma que cause, ou possa causar, danos ao site ou prejuízo em termos de disponibilidade ou acessibilidade.</p>

                  <h3 className="font-bold text-foreground">3. Produtos e Serviços</h3>
                  <p>As informações sobre nossos produtos e serviços são fornecidas de boa fé e para fins informativos. A {BRAND_NAME} se reserva o direito de modificar preços, disponibilidade e especificações dos produtos a qualquer momento, sem aviso prévio.</p>

                  <h3 className="font-bold text-foreground">4. Pedidos e Pagamentos</h3>
                  <p>Todos os pedidos estão sujeitos à disponibilidade dos produtos. Os preços são exibidos em Reais (R$) e incluem impostos aplicáveis. O pagamento deve ser efetuado conforme as opções disponíveis no ato da compra.</p>

                  <h3 className="font-bold text-foreground">5. Propriedade Intelectual</h3>
                  <p>Todo o conteúdo deste site, incluindo textos, imagens, logotipos, marcas registradas e materiais, é de propriedade da {BRAND_NAME} ou de seus licenciadores e está protegido pelas leis de propriedade intelectual.</p>

                  <h3 className="font-bold text-foreground">6. Limitação de Responsabilidade</h3>
                  <p>A {BRAND_NAME} não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar este site ou seus produtos.</p>

                  <h3 className="font-bold text-foreground">7. Modificações dos Termos</h3>
                  <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.</p>

                  <h3 className="font-bold text-foreground">8. Contato</h3>
                  <p>Para dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail kombuchaom@gmail.com ou WhatsApp (35) 91586-6167.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={() => setOpenDialog(null)}>Fechar</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={openDialog === "privacidade"} onOpenChange={(open) => setOpenDialog(open ? "privacidade" : null)}>
              <DialogTrigger asChild>
                <button className="hover:text-white transition-colors text-xs">Política de Privacidade</button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Política de Privacidade</DialogTitle>
                </DialogHeader>
                <div className="text-sm text-muted-foreground space-y-4 mt-4">
                  <h3 className="font-bold text-foreground">1. Introdução</h3>
                  <p>A {BRAND_NAME} está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais quando você visita nosso site ou faz compras.</p>

                  <h3 className="font-bold text-foreground">2. Informações que Coletamos</h3>
                  <p>Podemos coletar as seguintes informações pessoais:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Nome, endereço, e-mail e telefone quando você faz um pedido</li>
                    <li>Informações de pagamento processadas de forma segura</li>
                    <li>Dados de navegação através de cookies e tecnologias similares</li>
                  </ul>

                  <h3 className="font-bold text-foreground">3. Como Usamos suas Informações</h3>
                  <p>Usamos suas informações para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Processar e entregar seus pedidos</li>
                    <li>Comunicar-se sobre pedidos, produtos e promoções</li>
                    <li>Melhorar nossos produtos e serviços</li>
                    <li>Cumprir obrigações legais e fiscais</li>
                  </ul>

                  <h3 className="font-bold text-foreground">4. Compartilhamento de Informações</h3>
                  <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Processar pagamentos e entregas</li>
                    <li>Cumprir exigências legais</li>
                    <li>Proteger nossos direitos e propriedade</li>
                  </ul>

                  <h3 className="font-bold text-foreground">5. Cookies</h3>
                  <p>Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar sua capacidade de usar certas funcionalidades do site.</p>

                  <h3 className="font-bold text-foreground">6. Segurança</h3>
                  <p>Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.</p>

                  <h3 className="font-bold text-foreground">7. Seus Direitos</h3>
                  <p>Você tem o direito de:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Acessar suas informações pessoais</li>
                    <li>Corrigir dados incorretos</li>
                    <li>Solicitar a exclusão de seus dados</li>
                    <li>Opor-se ao processamento de seus dados</li>
                    <li>Solicitar a portabilidade de dados</li>
                  </ul>

                  <h3 className="font-bold text-foreground">8. Retenção de Dados</h3>
                  <p>Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política ou conforme exigido por lei.</p>

                  <h3 className="font-bold text-foreground">9. Alterações nesta Política</h3>
                  <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através do site ou por e-mail.</p>

                  <h3 className="font-bold text-foreground">10. Contato</h3>
                  <p>Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>E-mail: kombuchaom@gmail.com</li>
                    <li>WhatsApp: (35) 91586-6167</li>
                    <li>Endereço: Soledade de Minas, MG - Serra da Mantiqueira</li>
                  </ul>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={() => setOpenDialog(null)}>Fechar</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
