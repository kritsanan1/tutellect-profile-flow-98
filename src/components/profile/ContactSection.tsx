
import { useState } from "react";
import { Mail, Phone, MapPin, Edit } from "lucide-react";
import SectionCard from "./SectionCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ContactInfo {
  phone: string;
  phone2: string;
  email: string;
  email2: string;
  location: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
  handleContactUpdate: (data: ContactInfo) => void;
}

export default function ContactSection({ contactInfo, handleContactUpdate }: ContactSectionProps) {
  const ContactForm = () => {
    const [formData, setFormData] = useState(contactInfo);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleContactUpdate(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6 pt-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Primary Phone Number</Label>
            <Input 
              id="phone" 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone2">Secondary Phone Number (Optional)</Label>
            <Input 
              id="phone2" 
              value={formData.phone2}
              onChange={handleChange}
              placeholder="Add second phone number"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Primary Email Address</Label>
            <Input 
              id="email" 
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email2">Secondary Email Address (Optional)</Label>
            <Input 
              id="email2" 
              type="email"
              value={formData.email2}
              onChange={handleChange}
              placeholder="Add second email address"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <Button type="submit" className="primary-gradient w-full text-white hover:opacity-90">
          Save Contact Info
        </Button>
      </form>
    );
  };

  // Format phone numbers to display with comma if there are two
  const displayPhone = contactInfo.phone2 
    ? `${contactInfo.phone}, ${contactInfo.phone2}` 
    : contactInfo.phone;
  
  // Format email addresses to display with comma if there are two
  const displayEmail = contactInfo.email2 
    ? `${contactInfo.email}, ${contactInfo.email2}` 
    : contactInfo.email;

  return (
    <SectionCard
      title="Contact Information"
      icon={<Mail size={18} />}
      isEmpty={false}
      form={<ContactForm />}
      editIcon={<Edit size={16} />}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">{displayPhone}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{displayEmail}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <MapPin className="text-muted-foreground" size={18} />
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
