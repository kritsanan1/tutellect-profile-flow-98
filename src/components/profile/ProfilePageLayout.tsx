
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ProfilePageLayoutProps {
  children: ReactNode;
}

export default function ProfilePageLayout({ children }: ProfilePageLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
      <Footer />
    </div>
  );
}
