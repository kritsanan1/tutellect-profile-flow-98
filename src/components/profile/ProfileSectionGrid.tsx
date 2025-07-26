
import { ReactNode } from "react";

interface ProfileSectionGridProps {
  children: ReactNode;
  columns?: 1 | 2;
  className?: string;
}

export default function ProfileSectionGrid({ 
  children, 
  columns = 1, 
  className = "mb-6" 
}: ProfileSectionGridProps) {
  const gridClass = columns === 2 ? "grid-cols-1 lg:grid-cols-2 gap-8" : "grid-cols-1 gap-8";
  
  return (
    <div className={`grid ${gridClass} ${className}`}>
      {children}
    </div>
  );
}
