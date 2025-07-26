
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExperienceItem, MONTHS, YEARS } from "./experienceUtils";

interface ExperienceFormProps {
  initialData?: ExperienceItem;
  onSubmit: (data: Omit<ExperienceItem, "id">) => void;
}

export default function ExperienceForm({ initialData, onSubmit }: ExperienceFormProps) {
  const isEditing = !!initialData;
  const [formData, setFormData] = useState({
    id: initialData?.id || "",
    title: initialData?.title || "",
    company: initialData?.company || "",
    companyUrl: initialData?.companyUrl || "",
    location: initialData?.location || "",
    startMonth: initialData?.startMonth || "January",
    startYear: initialData?.startYear || new Date().getFullYear().toString(),
    endMonth: initialData?.endMonth || "January",
    endYear: initialData?.endYear || new Date().getFullYear().toString(),
    current: initialData?.current || false,
    description: initialData?.description || ""
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // Close modal
    document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
  };
  
  return (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title</Label>
          <Input 
            id="title" 
            placeholder="e.g. Software Engineer" 
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input 
            id="company" 
            placeholder="e.g. Google" 
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyUrl">Company URL (Optional)</Label>
          <Input 
            id="companyUrl" 
            placeholder="e.g. https://google.com" 
            value={formData.companyUrl}
            onChange={(e) => handleChange("companyUrl", e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            placeholder="e.g. Mountain View, CA" 
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Label>Start Date</Label>
              <div className="grid grid-cols-2 gap-2">
                <Select 
                  value={formData.startMonth} 
                  onValueChange={(value) => handleChange("startMonth", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {MONTHS.map(month => (
                      <SelectItem key={month} value={month}>{month}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select 
                  value={formData.startYear} 
                  onValueChange={(value) => handleChange("startYear", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {YEARS.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {!formData.current && (
              <div>
                <Label>End Date</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Select 
                    value={formData.endMonth} 
                    onValueChange={(value) => handleChange("endMonth", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {MONTHS.map(month => (
                        <SelectItem key={month} value={month}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select 
                    value={formData.endYear} 
                    onValueChange={(value) => handleChange("endYear", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {YEARS.map(year => (
                        <SelectItem key={year} value={year}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2 py-2">
            <Checkbox 
              id="current" 
              checked={formData.current} 
              onCheckedChange={(checked) => handleChange("current", Boolean(checked))} 
            />
            <Label htmlFor="current">I currently work here</Label>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description" 
            placeholder="Describe your responsibilities and achievements" 
            rows={4} 
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>
      
      <Button 
        className="primary-gradient w-full text-white hover:opacity-90"
        onClick={handleSubmit}
      >
        {isEditing ? "Update Experience" : "Add Experience"}
      </Button>
    </form>
  );
}
