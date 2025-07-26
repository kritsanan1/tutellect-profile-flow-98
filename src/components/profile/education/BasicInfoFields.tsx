
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface BasicInfoFieldsProps {
  institution: string;
  degree: string;
  field: string;
  onInstitutionChange: (value: string) => void;
  onDegreeChange: (value: string) => void;
  onFieldChange: (value: string) => void;
}

export default function BasicInfoFields({
  institution,
  degree,
  field,
  onInstitutionChange,
  onDegreeChange,
  onFieldChange
}: BasicInfoFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="institution">Institution Name</Label>
        <Input 
          id="institution" 
          placeholder="e.g. Stanford University" 
          value={institution}
          onChange={(e) => onInstitutionChange(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="degree">Degree</Label>
        <Input 
          id="degree" 
          placeholder="e.g. Bachelor of Science" 
          value={degree}
          onChange={(e) => onDegreeChange(e.target.value)}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="field">Field of Study</Label>
        <Input 
          id="field" 
          placeholder="e.g. Computer Science" 
          value={field}
          onChange={(e) => onFieldChange(e.target.value)}
          required
        />
      </div>
    </>
  );
}
