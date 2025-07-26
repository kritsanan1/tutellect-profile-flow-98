
import { useState } from "react";
import { Award } from "lucide-react";
import SectionCard from "./SectionCard";
import EmptyState from "./achievements/EmptyState";
import AchievementItem from "./achievements/AchievementItem";
import AchievementForm from "./achievements/AchievementForm";
import { AchievementType, AchievementFormData } from "./achievements/types";

export default function Achievements() {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);

  const addAchievement = (newAchievement: AchievementFormData) => {
    const id = Date.now().toString();
    setAchievements([...achievements, { ...newAchievement, id }]);
  };

  const removeAchievement = (id: string) => {
    setAchievements(achievements.filter(achievement => achievement.id !== id));
  };

  return (
    <SectionCard
      title="Achievements"
      icon={<Award size={18} />}
      isEmpty={achievements.length === 0}
      form={<AchievementForm onAddAchievement={addAchievement} />}
    >
      {achievements.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {achievements.map(achievement => (
            <AchievementItem
              key={achievement.id}
              achievement={achievement}
              onRemove={removeAchievement}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
