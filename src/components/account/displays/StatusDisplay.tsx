
import { Activity } from "lucide-react";
interface StatusDisplayProps {
  status: string;
}
export default function StatusDisplay({
  status
}: StatusDisplayProps) {
  return <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Activity className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Current Status</p>
          <p className="font-medium">{status}</p>
        </div>
      </div>
    </div>;
}
