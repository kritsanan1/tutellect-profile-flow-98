
import { useState } from "react";
import { Globe, Trash2 } from "lucide-react";
import SectionCard from "./SectionCard";
import LanguageItem from "./languages/LanguageItem";
import LanguageForm from "./languages/LanguageForm";
import EmptyState from "./languages/EmptyState";
import { LanguageItemType, ProficiencyLevel } from "./languages/types";
import { Button } from "@/components/ui/button";

export default function Languages() {
  const [languagesList, setLanguagesList] = useState<LanguageItemType[]>([
    {
      id: "1",
      name: "English",
      proficiency: "Native"
    },
    {
      id: "2",
      name: "Spanish",
      proficiency: "Intermediate"
    },
    {
      id: "3",
      name: "French",
      proficiency: "Beginner"
    }
  ]);

  const addLanguage = (newLanguage: Omit<LanguageItemType, "id">) => {
    const id = Date.now().toString();
    setLanguagesList([...languagesList, { ...newLanguage, id }]);
  };

  const removeLanguage = (id: string) => {
    setLanguagesList(languagesList.filter(item => item.id !== id));
  };

  const getProficiencyColor = (proficiency: ProficiencyLevel) => {
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
    <SectionCard
      title="Languages"
      icon={<Globe size={18} />}
      isEmpty={languagesList.length === 0}
      form={<LanguageForm onAddLanguage={addLanguage} />}
    >
      {languagesList.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {languagesList.map(language => (
            <div 
              key={language.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border group"
            >
              <span>{language.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getProficiencyColor(language.proficiency)}`}>
                {language.proficiency}
              </span>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeLanguage(language.id)}
              >
                <Trash2 size={12} />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
