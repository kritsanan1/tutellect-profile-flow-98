
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ContactInfoFormProps {
  email: string;
  email2?: string;
  phone: string;
  phone2?: string;
}

export default function ContactInfoForm({ email, email2 = "", phone, phone2 = "" }: ContactInfoFormProps) {
  return (
    <form className="space-y-6 pt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Primary Email Address</Label>
          <Input id="email" type="email" defaultValue={email} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email2">Secondary Email Address (Optional)</Label>
          <Input id="email2" type="email" defaultValue={email2} placeholder="Add second email address" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Primary Phone Number</Label>
          <Input id="phone" defaultValue={phone} />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone2">Secondary Phone Number (Optional)</Label>
          <Input id="phone2" defaultValue={phone2} placeholder="Add second phone number" />
        </div>
      </div>
      
      <Button className="primary-gradient w-full text-white hover:opacity-90">
        Save Changes
      </Button>
    </form>
  );
}
