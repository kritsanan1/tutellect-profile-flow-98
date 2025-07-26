
import { School, Plus } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import EducationForm from "./education/EducationForm";
import EducationItemComponent from "./education/EducationItem";
import EmptyState from "./education/EmptyState";
import { EducationItem } from "./education/types";

export default function Education() {
  const [educationList, setEducationList] = useState<EducationItem[]>([
    {
      id: "1",
      institution: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science",
      startMonth: "September",
      startYear: "2015",
      endMonth: "June",
      endYear: "2017",
      current: false,
      metric: "GPA_4",
      score: "3.8"
    },
    {
      id: "2",
      institution: "University of California",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      startMonth: "September",
      startYear: "2011",
      endMonth: "June",
      endYear: "2015",
      current: false,
      metric: "Percentage",
      score: "92"
    }
  ]);

  const addEducation = (newEducation: Omit<EducationItem, "id">) => {
    const id = Date.now().toString();
    setEducationList([...educationList, { ...newEducation, id }]);
  };

  const removeEducation = (id: string) => {
    setEducationList(educationList.filter(item => item.id !== id));
  };

  return (
    <SectionCard
      title="Education"
      icon={<School size={18} />}
      isEmpty={educationList.length === 0}
      form={<EducationForm addEducation={addEducation} />}
    >
      {educationList.length > 0 ? (
        <div className="space-y-6">
          {educationList.map(education => (
            <EducationItemComponent 
              key={education.id} 
              education={education} 
              onRemove={removeEducation} 
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
