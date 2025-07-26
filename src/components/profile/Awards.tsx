
import { useState } from "react";
import { Trophy } from "lucide-react";
import SectionCard from "./SectionCard";
import EmptyState from "./awards/EmptyState";
import AwardItem from "./awards/AwardItem";
import AwardForm from "./awards/AwardForm";
import { AwardType, AwardFormData } from "./awards/types";

export default function Awards() {
  const [awards, setAwards] = useState<AwardType[]>([]);

  const addAward = (newAward: AwardFormData) => {
    const id = Date.now().toString();
    setAwards([...awards, { ...newAward, id }]);
  };

  const removeAward = (id: string) => {
    setAwards(awards.filter(award => award.id !== id));
  };

  return (
    <SectionCard
      title="Awards"
      icon={<Trophy size={18} />}
      isEmpty={awards.length === 0}
      form={<AwardForm onAddAward={addAward} />}
    >
      {awards.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {awards.map(award => (
            <AwardItem
              key={award.id}
              award={award}
              onRemove={removeAward}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
