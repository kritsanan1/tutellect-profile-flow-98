
import { CalendarIcon, Trophy, X } from "lucide-react";
import { AwardType } from "./types";
import { Button } from "@/components/ui/button";

interface AwardItemProps {
  award: AwardType;
  onRemove: (id: string) => void;
}

export default function AwardItem({ award, onRemove }: AwardItemProps) {
  return (
    <div className="bg-card border rounded-md p-4 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-7 w-7"
        onClick={() => onRemove(award.id)}
      >
        <X size={14} />
      </Button>
      
      <div className="flex items-start gap-3">
        <div className="bg-background rounded-full p-2 mt-0.5">
          <Trophy size={18} className="text-primary" />
        </div>
        
        <div className="space-y-1 flex-1">
          <h4 className="font-medium">{award.title}</h4>
          <p className="text-sm text-muted-foreground">{award.organization}</p>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarIcon size={12} />
            <span>{award.date}</span>
          </div>
          
          {award.description && (
            <p className="text-sm mt-2">{award.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
