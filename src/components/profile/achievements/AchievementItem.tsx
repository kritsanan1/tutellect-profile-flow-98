
import { Award, CalendarIcon, X } from "lucide-react";
import { AchievementType } from "./types";
import { Button } from "@/components/ui/button";

interface AchievementItemProps {
  achievement: AchievementType;
  onRemove: (id: string) => void;
}

export default function AchievementItem({ achievement, onRemove }: AchievementItemProps) {
  return (
    <div className="bg-card border rounded-md p-4 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-7 w-7"
        onClick={() => onRemove(achievement.id)}
      >
        <X size={14} />
      </Button>
      
      <div className="flex items-start gap-3">
        <div className="bg-background rounded-full p-2 mt-0.5">
          <Award size={18} className="text-primary" />
        </div>
        
        <div className="space-y-1 flex-1">
          <h4 className="font-medium">{achievement.title}</h4>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <CalendarIcon size={12} />
            <span>{achievement.date}</span>
          </div>
          
          <p className="text-sm mt-2">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
