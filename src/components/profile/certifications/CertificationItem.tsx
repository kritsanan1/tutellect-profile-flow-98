
import { Button } from "@/components/ui/button";
import { Calendar, Edit2, Link2, Trash2 } from "lucide-react";
import { CertificationItem } from "./types";

interface CertificationItemProps {
  certification: CertificationItem;
  onEdit: (certification: CertificationItem) => void;
  onDelete: (id: string) => void;
}

export default function CertificationItemDisplay({
  certification,
  onEdit,
  onDelete
}: CertificationItemProps) {
  return (
    <div className="border-b border-border last:border-0 pb-4 last:pb-0">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{certification.name}</h4>
          <p className="text-muted-foreground">{certification.organization}</p>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            {certification.issueMonth} {certification.issueYear}
            {!certification.neverExpires && certification.expiryMonth && certification.expiryYear && 
              ` - ${certification.expiryMonth} ${certification.expiryYear}`
            }
            {certification.neverExpires && " (No Expiration)"}
          </div>
          
          {certification.description && (
            <p className="mt-2 text-sm">{certification.description}</p>
          )}
          
          {certification.credentialId && (
            <p className="mt-1 text-sm">Credential ID: {certification.credentialId}</p>
          )}
          
          {certification.credentialUrl && (
            <a 
              href={certification.credentialUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-1 text-sm flex items-center gap-1 text-primary hover:underline"
            >
              <Link2 size={14} />
              Verify Credential
            </a>
          )}
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-primary" 
            onClick={() => onEdit(certification)}
          >
            <Edit2 size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-destructive" 
            onClick={() => onDelete(certification.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
