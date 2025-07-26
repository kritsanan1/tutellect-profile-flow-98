
import { Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function SecuritySection() {
  const handleResetPassword = () => {
    toast.success("Password reset link sent to your email", {
      description: "Please check your inbox for further instructions"
    });
  };

  return (
    <Card className="overflow-hidden border border-border">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-full primary-gradient flex items-center justify-center">
            <Key size={18} className="text-white" />
          </div>
          <h3 className="font-display font-semibold text-xl">Security</h3>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Need to reset your password? Click the button below and we'll send you a reset link to your email address.
          </p>
          
          <Button onClick={handleResetPassword} className="primary-gradient w-full text-white hover:opacity-90">
            Send Password Reset Link
          </Button>
        </div>
      </div>
    </Card>
  );
}
