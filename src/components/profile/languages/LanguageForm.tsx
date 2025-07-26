
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LanguageItemType, ProficiencyLevel } from "./types";

interface LanguageFormProps {
  onAddLanguage: (language: Omit<LanguageItemType, "id">) => void;
}

export default function LanguageForm({ onAddLanguage }: LanguageFormProps) {
  const [name, setName] = useState("");
  const [proficiency, setProficiency] = useState<ProficiencyLevel>("Intermediate");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddLanguage({
        name: name.trim(),
        proficiency
      });
      setName("");
      setProficiency("Intermediate");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Language</Label>
          <Input 
            id="name" 
            placeholder="e.g. English, Spanish, French" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="proficiency">Proficiency Level</Label>
          <Select 
            value={proficiency} 
            onValueChange={(value) => setProficiency(value as ProficiencyLevel)}
          >
            <SelectTrigger id="proficiency">
              <SelectValue placeholder="Select proficiency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Proficient">Proficient</SelectItem>
              <SelectItem value="Native">Native</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="primary-gradient w-full text-white hover:opacity-90"
        disabled={!name.trim()}
      >
        Add Language
      </Button>
    </form>
  );
}
