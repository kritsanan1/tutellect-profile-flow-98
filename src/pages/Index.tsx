
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
