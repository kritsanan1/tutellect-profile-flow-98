
import { Briefcase } from "lucide-react";
import { useState } from "react";
import SectionCard from "./SectionCard";
import ProfileSectionModal from "../common/ProfileSectionModal";
import ExperienceForm from "./experience/ExperienceForm";
import ExperienceItem from "./experience/ExperienceItem";
import EmptyState from "./experience/EmptyState";
import { ExperienceItem as ExperienceItemType, initialExperienceData } from "./experience/experienceUtils";

export default function Experience() {
  const [experienceList, setExperienceList] = useState<ExperienceItemType[]>(initialExperienceData);

  const addExperience = (newExperience: Omit<ExperienceItemType, "id">) => {
    const id = Date.now().toString();
    setExperienceList([...experienceList, { ...newExperience, id }]);
  };

  const updateExperience = (updatedExperience: ExperienceItemType) => {
    setExperienceList(experienceList.map(item => 
      item.id === updatedExperience.id ? updatedExperience : item
    ));
  };

  const removeExperience = (id: string) => {
    setExperienceList(experienceList.filter(item => item.id !== id));
  };

  return (
    <SectionCard
      title="Experience"
      icon={<Briefcase size={18} />}
      isEmpty={experienceList.length === 0}
      form={<ExperienceForm onSubmit={addExperience} />}
    >
      {experienceList.length > 0 ? (
        <div className="space-y-6">
          {experienceList.map(experience => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              onUpdate={updateExperience}
              onRemove={removeExperience}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
