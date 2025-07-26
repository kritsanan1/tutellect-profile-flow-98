
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AwardFormData } from "./types";

interface AwardFormProps {
  onAddAward: (award: AwardFormData) => void;
  initialData?: AwardFormData;
  onCancel?: () => void;
}

export default function AwardForm({ onAddAward, initialData, onCancel }: AwardFormProps) {
  const [formData, setFormData] = useState<AwardFormData>(
    initialData || {
      title: "",
      organization: "",
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
    onAddAward(formData);
    
    // Reset form if not editing
    if (!initialData) {
      setFormData({
        title: "",
        organization: "",
        date: "",
        description: ""
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Award Title*</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Best Developer Award"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organization*</Label>
          <Input
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Tech Conference"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Date Received*</Label>
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
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Briefly describe this award and why it's significant..."
            rows={3}
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
          {initialData ? "Update Award" : "Add Award"}
        </Button>
      </div>
    </form>
  );
}
