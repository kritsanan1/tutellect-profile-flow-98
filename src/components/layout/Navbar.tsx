
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/80 backdrop-blur-lg shadow-sm" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <span className="font-display font-bold text-2xl primary-text-gradient">
            Tutellect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-medium hover:primary-text-gradient hover:animate-text-gradient transition-all">
              Home
            </Link>
            <Link to="/profile" className="font-medium hover:primary-text-gradient hover:animate-text-gradient transition-all">
              Profile
            </Link>
            <Link to="/dashboard" className="font-medium hover:primary-text-gradient hover:animate-text-gradient transition-all">
              Dashboard
            </Link>
            <Link to="/account" className="font-medium hover:primary-text-gradient hover:animate-text-gradient transition-all">
              Account
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="primary-gradient hover:opacity-90 transition-opacity">
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border py-4 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link to="/" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/profile" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Profile
            </Link>
            <Link to="/dashboard" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Dashboard
            </Link>
            <Link to="/account" className="font-medium p-2 hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Account
            </Link>
            <Button className="primary-gradient hover:opacity-90 transition-opacity w-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
