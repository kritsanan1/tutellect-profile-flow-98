
import { Award } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="bg-background rounded-full p-4 mb-4">
        <Award size={32} className="text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-1">No achievements yet</h3>
      <p className="text-muted-foreground">
        Add your notable achievements and milestones
      </p>
    </div>
  );
}
