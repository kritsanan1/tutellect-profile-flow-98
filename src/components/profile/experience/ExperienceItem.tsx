
import { Building, Calendar, LinkIcon, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileSectionModal from "@/components/common/ProfileSectionModal";
import ExperienceForm from "./ExperienceForm";
import { ExperienceItem as ExperienceItemType, formatDate } from "./experienceUtils";

interface ExperienceItemProps {
  experience: ExperienceItemType;
  onUpdate: (updatedExperience: ExperienceItemType) => void;
  onRemove: (id: string) => void;
}

export default function ExperienceItem({ experience, onUpdate, onRemove }: ExperienceItemProps) {
  return (
    <div className="border-b border-border last:border-0 pb-4 last:pb-0">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{experience.title}</h4>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building size={14} />
            {experience.companyUrl ? (
              <div className="flex items-center gap-1">
                <a 
                  href={experience.companyUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline transition-colors flex items-center gap-1"
                >
                  {experience.company}
                  <LinkIcon size={12} />
                </a>
              </div>
            ) : experience.company} • {experience.location}
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            {formatDate(experience.startMonth, experience.startYear)} - 
            {experience.current ? "Present" : formatDate(experience.endMonth, experience.endYear)}
          </div>
          <p className="mt-2 text-sm">{experience.description}</p>
        </div>
        <div className="flex space-x-1">
          <ProfileSectionModal
            title="Edit Experience"
            triggerText=""
            icon={<Pencil size={16} />}
          >
            <ExperienceForm 
              initialData={experience}
              onSubmit={(data) => onUpdate({...data, id: experience.id})}
            />
          </ProfileSectionModal>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-destructive" 
            onClick={() => onRemove(experience.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
