
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section className="py-24 bg-background" id="depoimentos">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-4 fill-current" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-muted-foreground">Histórias reais de pessoas que descobriram o prazer de cuidar da saúde com sabor.</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full border-none shadow-lg bg-white hover:bg-green-50/50 transition-colors duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.text}"</p>
                    <div className="mt-auto">
                      <p className="font-bold font-display text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
