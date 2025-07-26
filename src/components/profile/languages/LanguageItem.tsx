
import { Globe, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageItemType } from "./types";

interface LanguageItemProps {
  language: LanguageItemType;
  onRemove: (id: string) => void;
}

export default function LanguageItem({ language, onRemove }: LanguageItemProps) {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Beginner": return "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermediate": return "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advanced": return "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Proficient": return "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Native": return "bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border group">
      <span>{language.name}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full ${getProficiencyColor(language.proficiency)}`}>
        {language.proficiency}
      </span>
      <Button 
        variant="ghost" 
        size="icon"
        className="h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => onRemove(language.id)}
      >
        <Trash2 size={12} />
      </Button>
    </div>
  );
}
