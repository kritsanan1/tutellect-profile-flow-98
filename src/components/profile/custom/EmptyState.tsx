
import { FileText } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="rounded-full bg-muted p-3 mb-3">
        <FileText size={24} className="text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-1">No custom items added</h3>
      <p className="text-muted-foreground text-sm max-w-md">
        Add custom sections that are not covered by the default profile categories.
      </p>
    </div>
  );
}
