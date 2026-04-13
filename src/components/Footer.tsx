
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { BRAND_NAME, BRAND_TAGLINE, FOOTER_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/logo.png";

export default function Footer() {
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
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
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
                  <Link href={link.href}>
                    <a className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </Link>
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
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Falar no WhatsApp</a>
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
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
