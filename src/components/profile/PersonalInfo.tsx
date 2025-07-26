
import { User, Calendar, Users, Building, Flag, MapPin } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonalInfoData {
  name: string;
  birthDate: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

export default function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoData>({
    name: "John Doe",
    birthDate: "1990-01-01",
    gender: "Male",
    city: "Anytown",
    state: "CA",
    country: "USA",
    status: "Available for work"
  });

  const PersonalInfoForm = () => (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
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

  return (
    <SectionCard
      title="Personal Information"
      icon={<User size={18} />}
      isEmpty={false}
      form={<PersonalInfoForm />}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <User className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">{personalInfo.name}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Calendar className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Birth Date</p>
            <p className="font-medium">
              {new Date(personalInfo.birthDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Users className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Gender</p>
            <p className="font-medium">{personalInfo.gender}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Building className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">City</p>
            <p className="font-medium">{personalInfo.city}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">State</p>
            <p className="font-medium">{personalInfo.state}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Flag className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Country</p>
            <p className="font-medium">{personalInfo.country}</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
