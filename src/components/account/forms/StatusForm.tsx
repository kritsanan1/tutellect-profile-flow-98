
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface StatusFormProps {
  initialStatus: string;
}

const STATUS_OPTIONS = [
  "I am in High School",
  "I am in PU/12th/Others",
  "I am in College/University",
  "I am a Researcher/PHD",
  "I am a Working Professional", 
  "I am a Business Professional",
  "I am Open to Work"
];

export default function StatusForm({ initialStatus }: StatusFormProps) {
  const [status, setStatus] = useState(initialStatus);
  const { toast } = useToast();

  const handleSave = () => {
    // Here you would normally save to backend
    toast({
      title: "Status updated",
      description: "Your status has been successfully updated."
    });
  };

  return (
    <form className="space-y-6 pt-4">
      <div className="space-y-2">
        <Label htmlFor="status">Current Status</Label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger id="status" className="w-full">
            <SelectValue placeholder="Select your status" />
          </SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        onClick={handleSave} 
        type="button"
        className="primary-gradient w-full text-white hover:opacity-90"
      >
        Save Status
      </Button>
    </form>
  );
}
