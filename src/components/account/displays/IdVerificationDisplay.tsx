
import { Shield, IdCard, User } from "lucide-react";

interface IdVerificationDisplayProps {
  photoId: File | null;
  accountStatus: string;
  legalName: string;
}

export default function IdVerificationDisplay({ photoId, accountStatus, legalName }: IdVerificationDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <User className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Legal Name</p>
          <p className="font-medium">{legalName}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Shield className="text-muted-foreground" size={18} />
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Government ID:</p>
          <p className="font-medium">••••••••••</p>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs px-2 py-0.5 rounded-full">Protected</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <IdCard className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Photo ID</p>
          <p className="font-medium">{photoId ? "Uploaded" : "Not uploaded"}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-green-500"></div>
        <div>
          <p className="text-sm text-muted-foreground">Account Status</p>
          <p className="font-medium">{accountStatus}</p>
        </div>
      </div>
    </div>
  );
}
