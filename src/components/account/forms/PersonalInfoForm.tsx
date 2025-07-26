
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonalInfoFormProps {
  personalInfo: {
    name: string;
    birthDate: string;
    gender: string;
    city: string;
    state: string;
    country: string;
    status: string;
  };
}

export default function PersonalInfoForm({ personalInfo }: PersonalInfoFormProps) {
  return (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Legal Name</Label>
          <Input id="name" defaultValue={personalInfo.name} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="birthDate">Birth Date</Label>
          <Input id="birthDate" type="date" defaultValue={personalInfo.birthDate} />
        </div>
        
        <div className="space-y-2">
          <Label>Gender</Label>
          <RadioGroup defaultValue={personalInfo.gender} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Input id="status" defaultValue={personalInfo.status} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" defaultValue={personalInfo.city} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" defaultValue={personalInfo.state} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" defaultValue={personalInfo.country} />
        </div>
      </div>
      
      <Button className="primary-gradient w-full text-white hover:opacity-90">
        Save Changes
      </Button>
    </form>
  );
}
