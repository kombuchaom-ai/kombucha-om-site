import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Marina Silva",
    city: "São Paulo - SP",
    text: "Nunca imaginei que fazer kombucha fosse tão simples! Em 3 semanas já estava produzindo a minha própria. O curso do André é muito didático e o suporte no WhatsApp é incrível.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    city: "Rio de Janeiro - RJ",
    text: "Estava gastando uma fortuna comprando kombucha pronta. Agora faço em casa com muito mais qualidade e sabor. Já economizei mais de R$ 500 em 2 meses!",
    rating: 5
  },
  {
    name: "Ana Beatriz",
    city: "Belo Horizonte - MG",
    text: "O material é excelente e as palestras do evento internacional são um diferencial incrível. Aprendi técnicas que nunca vi em outros cursos. Recomendo muito!",
    rating: 5
  },
  {
    name: "Roberto Santos",
    city: "Porto Alegre - RS",
    text: "Sou completamente leigo na cozinha, mas consegui fazer kombucha deliciosa seguindo o passo a passo. Minha família toda adora! Obrigado André!",
    rating: 5
  },
  {
    name: "Júlia Oliveira",
    city: "Brasília - DF",
    text: "O acesso vitalício é perfeito! Sempre volto para consultar algo ou rever as aulas. A comunidade no WhatsApp também é muito ativa e prestativa.",
    rating: 5
  },
  {
    name: "Fernando Costa",
    city: "Florianópolis - SC",
    text: "Já tentei fazer kombucha antes sem sucesso. Com o método do André, consegui na primeira tentativa! O suporte individual fez toda a diferença.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return "⭐".repeat(rating);
  };

  return (
    <section className="py-20 bg-kombucha-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kombucha-green mb-6">
            O que nossos alunos estão dizendo
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 1000 pessoas já transformaram suas vidas com nosso método
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-2xl mb-4">{renderStars(testimonial.rating)}</div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-kombucha-green">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-kombucha-green/10 border border-kombucha-green rounded-lg p-6 inline-block">
            <p className="text-lg font-semibold text-kombucha-green">
              ⭐⭐⭐⭐⭐ Avaliação média: 4.9/5 (baseado em 847 avaliações)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;