
import { useState } from "react";
import { FileText } from "lucide-react";
import SectionCard from "./SectionCard";
import CustomItem from "./custom/CustomItem";
import CustomForm from "./custom/CustomForm";
import EmptyState from "./custom/EmptyState";
import { CustomItemType, CustomFormData } from "./custom/types";

export default function Custom() {
  const [customItems, setCustomItems] = useState<CustomItemType[]>([]);

  const addCustomItem = (newItem: CustomFormData) => {
    const id = Date.now().toString();
    setCustomItems([...customItems, { ...newItem, id }]);
  };

  const removeCustomItem = (id: string) => {
    setCustomItems(customItems.filter(item => item.id !== id));
  };

  return (
    <SectionCard
      title="Custom Sections"
      icon={<FileText size={18} />}
      isEmpty={customItems.length === 0}
      form={<CustomForm onAddCustomItem={addCustomItem} />}
    >
      {customItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customItems.map(item => (
            <CustomItem
              key={item.id}
              item={item}
              onRemove={removeCustomItem}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
