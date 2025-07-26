
import { useState } from "react";
import { Bell } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function PreferencesSection() {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false
  });

  const handleToggleChange = (type: "emailNotifications" | "smsNotifications") => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSavePreferences = () => {
    // Here you would normally save to backend
    toast({
      title: "Preferences updated",
      description: "Your notification preferences have been saved.",
    });
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-md dark:hover:shadow-none hover:border-primary/30">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Bell size={18} />
          Notification Preferences
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications" className="text-base">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive updates and notifications via email
              </p>
            </div>
            <Switch 
              id="email-notifications" 
              checked={preferences.emailNotifications}
              onCheckedChange={() => handleToggleChange("emailNotifications")}
              className="primary-gradient data-[state=checked]:primary-gradient"
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sms-notifications" className="text-base">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive important alerts via text message
              </p>
            </div>
            <Switch 
              id="sms-notifications" 
              checked={preferences.smsNotifications} 
              onCheckedChange={() => handleToggleChange("smsNotifications")}
              className="primary-gradient data-[state=checked]:primary-gradient"
            />
          </div>
        </div>
        
        <div className="pt-2">
          <Button onClick={handleSavePreferences} className="primary-gradient text-white hover:opacity-90">
            Save Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
