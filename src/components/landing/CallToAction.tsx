
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl primary-gradient p-12 md:p-16 lg:p-20">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Elevate Your Professional Profile?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-white/90">
              Join thousands of professionals who are showcasing their skills and experience through Tutellect's comprehensive profile platform.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
                <Link to="/profile">
                  Get Started for Free
                </Link>
              </Button>
              
              <Button asChild variant="link" className="text-white hover:text-white/80">
                <Link to="/" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
