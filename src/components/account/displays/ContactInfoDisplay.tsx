
import { Mail, Phone } from "lucide-react";

interface ContactInfoDisplayProps {
  email: string;
  email2?: string;
  phone: string;
  phone2?: string;
}

export default function ContactInfoDisplay({ email, email2 = "", phone, phone2 = "" }: ContactInfoDisplayProps) {
  // Format phone numbers to display with comma if there are two
  const displayPhone = phone2 ? `${phone}, ${phone2}` : phone;
  
  // Format email addresses to display with comma if there are two
  const displayEmail = email2 ? `${email}, ${email2}` : email;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-medium">{displayEmail}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Phone className="text-muted-foreground" size={18} />
        <div>
          <p className="text-sm text-muted-foreground">Phone</p>
          <p className="font-medium">{displayPhone}</p>
        </div>
      </div>
    </div>
  );
}
