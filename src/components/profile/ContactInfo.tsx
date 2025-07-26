
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ContactInfoData {
  email: string;
  phone: string;
}

export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState<ContactInfoData>({
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  });

  const ContactInfoForm = () => (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" defaultValue={contactInfo.email} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" defaultValue={contactInfo.phone} />
        </div>
      </div>
      
      <Button className="primary-gradient w-full text-white hover:opacity-90">
        Save Changes
      </Button>
    </form>
  );

  return (
    <SectionCard
      title="Contact Information"
      icon={<Mail size={18} />}
      isEmpty={false}
      form={<ContactInfoForm />}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{contactInfo.email}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">{contactInfo.phone}</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
