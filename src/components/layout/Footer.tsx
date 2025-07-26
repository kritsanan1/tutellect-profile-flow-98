
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link 
              to="/" 
              className="flex items-center gap-2"
            >
              <span className="font-display font-bold text-xl primary-text-gradient">
                Tutellect
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Elevate your personal brand with our comprehensive profile management platform. Showcase your skills, experience, and achievements in one beautiful, professional profile.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Tutellect. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
