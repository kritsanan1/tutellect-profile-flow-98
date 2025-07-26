
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProfileSectionModalProps {
  title: string;
  triggerText: string;
  children: ReactNode;
  icon?: ReactNode;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  onOpenChange?: (open: boolean) => void;
  onTriggerClick?: () => void;
}

export default function ProfileSectionModal({
  title,
  triggerText,
  children,
  icon,
  isOpen,
  setIsOpen,
  onOpenChange,
  onTriggerClick
}: ProfileSectionModalProps) {
  // Handle controlled and uncontrolled modes
  const handleOpenChange = (open: boolean) => {
    if (setIsOpen) {
      setIsOpen(open);
    }
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  const handleTriggerClick = () => {
    if (onTriggerClick) {
      onTriggerClick();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className={`flex items-center gap-2 ${!triggerText ? 'px-2 h-9 w-9 group' : ''}`} 
          aria-label={title}
          onClick={handleTriggerClick}
        >
          <span>
            {icon}
          </span>
          {triggerText && <span>
              {triggerText}
            </span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto pb-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
