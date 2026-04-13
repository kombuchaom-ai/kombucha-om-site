
export const BRAND_NAME = "Kombucha Om";
export const BRAND_TAGLINE = "Vibrando vida e saúde com amor!";

export const WHATSAPP_LINK = "https://wa.me/553591586167";

export const NAVIGATION_LINKS = [
  { label: "Sabores", href: "/#produtos" },
  { label: "Assinatura", href: "/#assinatura" },
  { label: "Filosofia", href: "/#filosofia" },
  { label: "Onde Encontrar", href: "/#distribuicao" },
];

export const HERO_CONTENT = {
  headline: "Vibrando vida e saúde, com amor!",
  subheadline:
    "Kombucha mineira pioneira no Brasil, produzida desde 2017 com ingredientes naturais, excelência e muito carinho. Probióticos de montão e inúmeros compostos benéficos para o seu bem-estar diário. Enviamos para todo o Brasil.",
  ctaPrimary: "Escolher meus sabores",
  ctaSecondary: "Quero assinar o clube",
};

export const EDUCATION_ITEMS = [
  {
    iconName: "RefreshCw",
    title: "Fermentação Natural",
    description:
      "Processo artesanal de fermentação que preserva probióticos e enzimas benéficas.",
  },
  {
    iconName: "ShieldCheck",
    title: "Probióticos",
    description:
      "Microrganismos do bem que auxiliam na saúde intestinal e imunidade.",
  },
  {
    iconName: "Leaf",
    title: "Ingredientes Reais",
    description:
      "Frutas, chás selecionados e açúcar orgânico. Sem conservantes ou aditivos.",
  },
  {
    iconName: "Zap",
    title: "Energia Natural",
    description:
      "Fonte natural de vitaminas do complexo B e antioxidantes para o seu dia a dia.",
  },
] as const;

export const PHILOSOPHY_CONTENT = {
  title: "Mais que uma bebida, um ritual de bem-estar",
  text1:
    "Na Kombucha Om, acreditamos que cuidar de si mesmo é um ato de amor. Cada garrafa que produzimos carrega a intenção de nutrir não apenas o corpo, mas também a alma.",
  text2:
    "O nome Om representa a vibração universal, a energia que conecta todas as coisas. Assim como o mantra, nossa kombucha é feita para trazer equilíbrio, presença e consciência ao seu dia a dia.",
  text3:
    "Nascida nas montanhas de Minas Gerais, nossa kombucha é produzida com ingredientes locais, tempo e muito carinho. Cada sabor é uma celebração das frutas brasileiras e da riqueza da nossa terra.",
};

export type SubscriptionDuration = "trimestral" | "semestral" | "anual";

export const SUBSCRIPTION_DURATIONS: Array<{ 
  key: SubscriptionDuration; 
  label: string; 
  months: number; 
  bonusTitle?: string; 
  bonusText?: string; 
  isPopular?: boolean 
}> = [
  { 
    key: "trimestral", 
    label: "Trimestral", 
    months: 3 
  },
  { 
    key: "semestral", 
    label: "Semestral", 
    months: 6,
    bonusTitle: "🎁 Kit Boas-Vindas Om",
    bonusText: "Ganha 1 Bolsa Térmica Om Exclusiva + Taça de vidro Personalizada Kombucha Om + brindes surpresas."
  },
  { 
    key: "anual", 
    label: "Anual", 
    months: 12,
    isPopular: true,
    bonusTitle: "👑 Benefícios do Clube VIP Om",
    bonusText: "Kit Completo (Bolsa Térmica + Taça) + Vaga de membro na curadoria de novos sabores + Kit Degustação de lançamentos em 1ª mão + Status de Cliente VIP com direito a bônus exclusivos, convites e cupons em festas/eventos apoiados pela Om."
  },
];

export const SUBSCRIPTION_PLANS = [
  {
    key: "essencial",
    name: "Essencial",
    growlersPerWeek: 2,
    // Valor da arte: R$ 220/mês
    baseMonthlyFromImage: 220,
    imageKey: "plan-essencial",
    tagline: "Para começar e manter a saúde em dia",
  },
  {
    key: "equilibrio",
    name: "Equilíbrio",
    growlersPerWeek: 3,
    // Valor da arte: R$ 300/mês
    baseMonthlyFromImage: 300,
    imageKey: "plan-equilibrio",
    tagline: "Para quem já consome kombucha regularmente",
  },
  {
    key: "familia",
    name: "Família",
    growlersPerWeek: 4,
    // Valor da arte: R$ 387/mês
    baseMonthlyFromImage: 387,
    imageKey: "plan-familia",
    tagline: "Ideal para compartilhar e aproveitar juntos",
  },
  {
    key: "intensivo",
    name: "Intensivo",
    growlersPerWeek: 6,
    // Valor da arte: R$ 540/mês
    baseMonthlyFromImage: 540,
    imageKey: "plan-intensivo",
    tagline: "Para os verdadeiros amantes de kombucha",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Seleção dos Ingredientes",
    description:
      "Escolhemos chás, frutas e ingredientes de qualidade. Cada lote começa com cuidado e atenção ao detalhe.",
  },
  {
    number: "02",
    title: "Primeira Fermentação",
    description:
      "O chá adoçado fermenta com nossa cultura (SCOBY). Nesse processo, os probióticos e ácidos orgânicos se desenvolvem naturalmente.",
  },
  {
    number: "03",
    title: "Segunda Fermentação",
    description:
      "Entram frutas e ervas: é aqui que nascem os sabores e a gaseificação natural.",
  },
  {
    number: "04",
    title: "Envase e Envio",
    description:
      "Envasamos com carinho e enviamos para todo o Brasil, preservando a qualidade e o frescor.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mariana Costa",
    location: "São Paulo, SP",
    text: "Confesso que tinha preconceito com o sabor avinagrado de outras marcas. Mas a de maracujá da Om é surreal de boa! Sinto meu intestino muito mais leve depois que comecei a tomar.",
    rating: 5,
  },
  {
    name: "Rafael Barros",
    location: "São Lourenço, MG",
    text: "Passei a substituir a cerveja do happy hour de quarta-feira pela Kombucha Om. Meus amigos acharam graça no início, mas hoje quase todo mundo do escritório entrou pro clube de assinaturas.",
    rating: 5,
  },
  {
    name: "Helena Nogueira",
    location: "Belo Horizonte, MG",
    text: "Sou assinante desde o primeiro ano! Além do sabor, a embalagem é impecável. É visível o cuidado artesanal, diferente daquelas marcas muito industriais.",
    rating: 5,
  },
  {
    name: "Thiago Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Sempre pedia pelo delivery quando ia pra serra, fiquei numa felicidade absurda quando vi que enviavam pro RJ inteiro. A de hibisco gelada num sábado de praia é perfeita.",
    rating: 5,
  },
  {
    name: "Aline Faria",
    location: "Campinas, SP",
    text: "A garrafa até já virou decoração aqui em casa depois que a gente bebe! A Kombucha é sempre fresca, super gaseificada e me tira a vontade de comer doce no meio da tarde.",
    rating: 5,
  },
  {
    name: "Luiz Carlos Silva",
    location: "Vitória, ES",
    text: "Custo benefício excelente para um produto com tanta qualidade. Já mandei mensagem no WhatsApp tirando umas dúvidas sobre fermentação e o atendimento foi sensacional, nota dez.",
    rating: 4, // 4 stars for realism
  },
  {
    name: "Camila Ribeiro",
    location: "Uberlândia, MG",
    text: "Recomendação da minha nutri pra imunidade, e foi a melhor coisa. Sabor suave, nada agressivo no paladar. Tem sido minha rotina matinal energética!",
    rating: 5,
  },
];

export const FOOTER_LINKS = [
  { label: "Início", href: "/#" },
  { label: "Filosofia", href: "/#filosofia" },
  { label: "Sabores", href: "/#produtos" },
  { label: "Assinatura", href: "/#assinatura" },
  { label: "Processo", href: "/#processo" },
  { label: "Contato", href: "/#footer" },
];
