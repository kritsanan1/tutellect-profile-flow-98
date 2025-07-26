
import { Trophy } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="bg-background rounded-full p-4 mb-4">
        <Trophy size={32} className="text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-1">No awards yet</h3>
      <p className="text-muted-foreground">
        Add your professional awards and achievements
      </p>
    </div>
  );
}
