
import { Briefcase } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <Briefcase size={48} className="text-muted-foreground/50 mb-4" />
      <h4 className="text-lg font-medium mb-1">No Experience Added</h4>
      <p className="text-muted-foreground mb-4">Add your work experience</p>
    </div>
  );
}
