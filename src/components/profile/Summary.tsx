
import { useState } from "react";
import { FileText, Edit } from "lucide-react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Summary() {
  const [summary, setSummary] = useState<string>(
    "Experienced software engineer with a passion for creating elegant solutions to complex problems. Specializing in web development and AI integration, I've helped companies improve their digital presence and streamline operations. I thrive in collaborative environments and am always seeking to expand my knowledge and skills."
  );

  const SummaryForm = () => {
    const [formSummary, setFormSummary] = useState(summary);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSummary(formSummary);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 pt-4">
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea 
            id="summary" 
            value={formSummary}
            onChange={(e) => setFormSummary(e.target.value)}
            placeholder="Write a brief professional summary..."
            className="h-32"
          />
          <p className="text-xs text-muted-foreground">
            Keep it concise and highlight your key strengths and career goals.
          </p>
        </div>
        
        <Button 
          type="submit" 
          className="primary-gradient w-full text-white hover:opacity-90" 
        >
          Save Summary
        </Button>
      </form>
    );
  };

  return (
    <SectionCard
      title="Professional Summary"
      icon={<FileText size={18} className="animate-pulse-subtle transition-all duration-300 hover:rotate-12" />}
      isEmpty={!summary}
      form={<SummaryForm />}
      editIcon={<Edit size={16} className="transition-all duration-300 hover:scale-110" />}
    >
      {summary ? (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed">{summary}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <FileText size={48} className="text-muted-foreground/50 mb-4" />
          <h4 className="text-lg font-medium mb-1">No Summary Added</h4>
          <p className="text-muted-foreground mb-4">Add a professional summary to highlight your experience</p>
        </div>
      )}
    </SectionCard>
  );
}
