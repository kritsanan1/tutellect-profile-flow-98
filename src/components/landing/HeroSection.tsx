
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-48 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 -left-36 w-72 h-72 bg-tutellect-primary-from/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-36 w-72 h-72 bg-tutellect-accent-from/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Showcase Your Professional Journey with{" "}
            <span className="primary-text-gradient animate-text-gradient">
              Tutellect
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Create a stunning professional profile that highlights your skills, experience, and achievements. Stand out in a competitive job market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="primary-gradient hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6 text-lg">
              <Link to="/profile">Create Your Profile</Link>
            </Button>
            
            <Button asChild variant="outline" className="group rounded-full px-8 py-6 text-lg">
              <Link to="/" className="flex items-center gap-2">
                See Examples
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
            <img 
              src="https://placehold.co/1200x800/EEE/31343C?text=Tutellect+Dashboard+Preview" 
              alt="Tutellect Dashboard" 
              className="rounded-t-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
