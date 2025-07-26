
import { Star, Trash2 } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Proficient" | "Expert";

interface SkillItem {
  id: string;
  name: string;
  proficiency: ProficiencyLevel;
}

export default function Skills() {
  const [skillsList, setSkillsList] = useState<SkillItem[]>([
    {
      id: "1",
      name: "JavaScript",
      proficiency: "Expert"
    },
    {
      id: "2",
      name: "React",
      proficiency: "Advanced"
    },
    {
      id: "3",
      name: "Node.js",
      proficiency: "Proficient"
    },
    {
      id: "4",
      name: "Python",
      proficiency: "Intermediate"
    },
    {
      id: "5",
      name: "Docker",
      proficiency: "Beginner"
    }
  ]);

  const addSkill = (newSkill: Omit<SkillItem, "id">) => {
    const id = Date.now().toString();
    setSkillsList([...skillsList, { ...newSkill, id }]);
  };

  const removeSkill = (id: string) => {
    setSkillsList(skillsList.filter(item => item.id !== id));
  };

  const getProficiencyColor = (proficiency: ProficiencyLevel) => {
    switch (proficiency) {
      case "Beginner": return "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermediate": return "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advanced": return "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Proficient": return "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "Expert": return "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const SkillForm = () => {
    const [proficiency, setProficiency] = useState<ProficiencyLevel>("Intermediate");
    
    return (
      <form className="space-y-6 pt-4">
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Skill Name</Label>
            <Input id="name" placeholder="e.g. JavaScript" />
          </div>
          
          <div className="space-y-3">
            <Label>Proficiency Level</Label>
            <RadioGroup value={proficiency} onValueChange={(value) => setProficiency(value as ProficiencyLevel)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Beginner" id="beginner" />
                <Label htmlFor="beginner">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Intermediate" id="intermediate" />
                <Label htmlFor="intermediate">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Advanced" id="advanced" />
                <Label htmlFor="advanced">Advanced</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Proficient" id="proficient" />
                <Label htmlFor="proficient">Proficient</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Expert" id="expert" />
                <Label htmlFor="expert">Expert</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        <Button className="primary-gradient w-full text-white hover:opacity-90">
          Add Skill
        </Button>
      </form>
    );
  };

  return (
    <SectionCard
      title="Skills"
      icon={<Star size={18} />}
      isEmpty={skillsList.length === 0}
      form={<SkillForm />}
    >
      {skillsList.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {skillsList.map(skill => (
            <div 
              key={skill.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border group"
            >
              <span>{skill.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getProficiencyColor(skill.proficiency)}`}>
                {skill.proficiency}
              </span>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-5 w-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeSkill(skill.id)}
              >
                <Trash2 size={12} />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <Star size={48} className="text-muted-foreground/50 mb-4" />
          <h4 className="text-lg font-medium mb-1">No Skills Added</h4>
          <p className="text-muted-foreground mb-4">Add your skills with proficiency levels</p>
        </div>
      )}
    </SectionCard>
  );
}
