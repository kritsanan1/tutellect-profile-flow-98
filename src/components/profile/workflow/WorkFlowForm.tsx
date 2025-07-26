
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WorkFlowFormData, WorkFlowItemType, EditWorkFlowFormData } from "./types";

interface WorkFlowFormProps {
  onAddWorkFlowItem: (data: WorkFlowFormData) => void;
  onEditWorkFlowItem?: (data: EditWorkFlowFormData) => void;
  editingItem?: WorkFlowItemType | null;
}

export default function WorkFlowForm({ 
  onAddWorkFlowItem, 
  onEditWorkFlowItem,
  editingItem 
}: WorkFlowFormProps) {
  const [formData, setFormData] = useState<WorkFlowFormData>({
    label: "",
    value: 1
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        label: editingItem.label,
        value: editingItem.value
      });
    } else {
      setFormData({
        label: "",
        value: 1
      });
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.label.trim()) {
      if (editingItem && onEditWorkFlowItem) {
        onEditWorkFlowItem({
          ...formData,
          id: editingItem.id
        });
      } else {
        onAddWorkFlowItem(formData);
      }
      setFormData({ label: "", value: 1 });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "value" ? Number(value) : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="label">Activity</Label>
        <Input 
          id="label"
          name="label"
          value={formData.label}
          onChange={handleChange}
          placeholder="Activity name (e.g. Designing)"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="value">Time Allocation (hours)</Label>
        <Input 
          id="value"
          name="value"
          type="number"
          min="1"
          max="24"
          value={formData.value}
          onChange={handleChange}
          required
        />
      </div>
      
      <Button type="submit" className="w-full">
        {editingItem ? "Update Activity" : "Add Activity"}
      </Button>
    </form>
  );
}
