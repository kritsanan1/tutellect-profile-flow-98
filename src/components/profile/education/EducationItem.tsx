
import { Calendar, School, Trash2, Edit } from "lucide-react";
import { EducationItem } from "./types";
import { Button } from "@/components/ui/button";
import ProfileSectionModal from "@/components/common/ProfileSectionModal";
import EducationForm from "./EducationForm";

interface EducationItemProps {
  education: EducationItem;
  onRemove: (id: string) => void;
}

export default function EducationItemComponent({ education, onRemove }: EducationItemProps) {
  const formatDate = (month: string, year: string) => {
    return `${month} ${year}`;
  };
  
  const getMetricLabel = (metricValue: string) => {
    const metrics = {
      "GPA_4": "GPA (4.0 Scale)",
      "GPA_10": "GPA (10.0 Scale)",
      "Percentage": "Percentage",
      "CGPA": "CGPA"
    };
    return metrics[metricValue as keyof typeof metrics] || metricValue;
  };
  
  return (
    <div className="border-b border-border last:border-0 pb-4 last:pb-0">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{education.degree}</h4>
          <p className="text-muted-foreground flex items-center gap-2">
            <School size={14} />
            {education.institution}
          </p>
          <p className="text-sm text-muted-foreground">{education.field}</p>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Calendar size={14} />
            {formatDate(education.startMonth, education.startYear)} - 
            {education.current ? "Present" : formatDate(education.endMonth, education.endYear)}
          </div>
          {education.score && (
            <p className="mt-1 text-sm">
              {getMetricLabel(education.metric)}: {education.score}
            </p>
          )}
          {education.description && (
            <p className="mt-2 text-sm">{education.description}</p>
          )}
        </div>
        
        <div className="flex gap-2">
          <ProfileSectionModal
            title="Edit Education"
            triggerText=""
            icon={<Edit size={16} />}
          >
            <EducationForm 
              addEducation={(updatedEducation) => {
                // This is just placeholder since we don't have update functionality
                console.log("Would update education:", updatedEducation);
              }} 
              initialValues={{
                institution: education.institution,
                degree: education.degree,
                field: education.field,
                startMonth: education.startMonth,
                startYear: education.startYear,
                endMonth: education.endMonth,
                endYear: education.endYear,
                current: education.current,
                metric: education.metric,
                score: education.score,
                description: education.description
              }}
            />
          </ProfileSectionModal>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-destructive" 
            onClick={() => onRemove(education.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
