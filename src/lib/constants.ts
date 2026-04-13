
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
    "Kombucha artesanal mineira, feita com ingredientes naturais e muito carinho. Probióticos vivos para o seu bem-estar diário. Entregamos em todo o Brasil.",
  ctaPrimary: "Quero escolher meus sabores",
  ctaSecondary: "Quero assinar o clube",
};

export const EDUCATION_ITEMS = [
  {
    iconName: "RefreshCw",
    title: "Fermentação Natural",
    description:
      "Processo artesanal de fermentação que preserva probióticos vivos e enzimas benéficas.",
  },
  {
    iconName: "ShieldCheck",
    title: "Probióticos Vivos",
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

export const SUBSCRIPTION_DURATIONS: Array<{ key: SubscriptionDuration; label: string; months: number }> = [
  { key: "trimestral", label: "Trimestral", months: 3 },
  { key: "semestral", label: "Semestral", months: 6 },
  { key: "anual", label: "Anual", months: 12 },
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
    text: "A Kombucha Om mudou minha rotina! Troquei o refrigerante e me sinto muito melhor. O sabor de maracujá é viciante!",
    rating: 5,
  },
  {
    name: "Rafael Santos",
    location: "Curitiba, PR",
    text: "Parar de beber cerveja nos happy hours e descobrir a kombucha. Meus amigos já estão todos convertidos!",
    rating: 5,
  },
  {
    name: "Bela Horizonte, MG",
    location: "Belo Horizonte, MG",
    text: "Assinante há 6 meses e não troco por nada. A qualidade é impecável e o atendimento é sempre muito carinhoso.",
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
