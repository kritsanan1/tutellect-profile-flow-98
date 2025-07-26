
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content: "Tutellect has completely transformed how I present my professional experience. The profile layout is clean, modern, and really highlights my strengths.",
    author: "Sarah Johnson",
    position: "UX Designer",
    avatar: "https://placehold.co/100x100/EEE/31343C?text=SJ"
  },
  {
    content: "As a freelancer, having a well-organized portfolio is essential. Tutellect makes it simple to showcase my projects and skills in a visually appealing way.",
    author: "Michael Chen",
    position: "Software Developer",
    avatar: "https://placehold.co/100x100/EEE/31343C?text=MC"
  },
  {
    content: "The dashboard gives me great insights into how to improve my profile. I've received more interview requests since optimizing my profile with Tutellect's recommendations.",
    author: "Priya Patel",
    position: "Marketing Specialist",
    avatar: "https://placehold.co/100x100/EEE/31343C?text=PP"
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            What Our <span className="primary-text-gradient">Users Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of professionals who have elevated their online presence with Tutellect
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 -left-6 opacity-50">
            <Quote className="h-16 w-16 text-tutellect-primary-from/20" />
          </div>
          
          <div className="overflow-hidden relative rounded-2xl dark:bg-card bg-white shadow-lg dark:shadow-none border border-border">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full p-8 md:p-12">
                  <blockquote className="text-lg md:text-xl mb-8 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                className="h-8 w-8 rounded-full"
              >
                <ChevronLeft size={16} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                className="h-8 w-8 rounded-full"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
