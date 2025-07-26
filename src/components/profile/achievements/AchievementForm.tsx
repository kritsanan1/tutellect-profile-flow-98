
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AchievementFormData } from "./types";

interface AchievementFormProps {
  onAddAchievement: (achievement: AchievementFormData) => void;
  initialData?: AchievementFormData;
  onCancel?: () => void;
}

export default function AchievementForm({ 
  onAddAchievement, 
  initialData, 
  onCancel 
}: AchievementFormProps) {
  const [formData, setFormData] = useState<AchievementFormData>(
    initialData || {
      title: "",
      date: "",
      description: ""
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAchievement(formData);
    
    // Reset form if not editing
    if (!initialData) {
      setFormData({
        title: "",
        date: "",
        description: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Achievement Title*</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Launched Major Project"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date*</Label>
          <Input
            id="date"
            name="date"
            type="text" 
            value={formData.date}
            onChange={handleChange}
            placeholder="January 2023"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description*</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your achievement..."
            rows={3}
            required
          />
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" className="primary-gradient text-white hover:opacity-90">
          {initialData ? "Update Achievement" : "Add Achievement"}
        </Button>
      </div>
    </form>
  );
}
