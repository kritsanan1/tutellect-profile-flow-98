
import { ReactNode, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileSectionModal from "@/components/common/ProfileSectionModal";
import { Pencil } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  form: ReactNode;
  isEmpty?: boolean;
  onAddClick?: () => void;
  editIcon?: ReactNode;
  addText?: string;
  isFormModalOpen?: boolean;
  setIsFormModalOpen?: (open: boolean) => void;
}

export default function SectionCard({
  title,
  icon,
  children,
  form,
  isEmpty = false,
  onAddClick,
  editIcon = <Pencil size={16} />,
  addText = "Add",
  isFormModalOpen,
  setIsFormModalOpen
}: SectionCardProps) {
  const [internalIsModalOpen, setInternalIsModalOpen] = useState(false);
  
  // Use either controlled or internal state
  const modalOpen = isFormModalOpen !== undefined ? isFormModalOpen : internalIsModalOpen;
  const setModalOpen = setIsFormModalOpen || setInternalIsModalOpen;

  const handleAddClick = () => {
    if (onAddClick) {
      onAddClick();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <Card className="border border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-xl">
          {icon}
          {title}
        </CardTitle>
        
        <ProfileSectionModal
          title={isEmpty ? `Add ${title}` : `Edit ${title}`}
          triggerText={isEmpty ? addText : "Edit"}
          icon={isEmpty ? null : editIcon}
          isOpen={modalOpen}
          setIsOpen={setModalOpen}
          onTriggerClick={handleAddClick}
        >
          {form}
        </ProfileSectionModal>
      </CardHeader>
      
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
