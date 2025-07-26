
import { useState } from "react";
import { PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionCard from "../SectionCard";
import EmptyState from "./EmptyState";
import WorkFlowForm from "./WorkFlowForm";
import WorkFlowChart from "./WorkFlowChart";
import { WorkFlowItemType, WorkFlowFormData, EditWorkFlowFormData } from "./types";
import { toast } from "@/components/ui/use-toast";

export default function WorkFlow() {
  const [workFlowItems, setWorkFlowItems] = useState<WorkFlowItemType[]>([
    { id: "1", label: "Designing", value: 3 },
    { id: "2", label: "Drawing", value: 2 },
    { id: "3", label: "Brainstorming brand identities", value: 4 },
    { id: "4", label: "Lunch & beer mode", value: 2 },
    { id: "5", label: "Discussing ideas", value: 3 },
    { id: "6", label: "Relaxing", value: 1 }
  ]);
  
  const [editingItem, setEditingItem] = useState<WorkFlowItemType | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const addWorkFlowItem = (newItem: WorkFlowFormData) => {
    const id = Date.now().toString();
    setWorkFlowItems([...workFlowItems, { ...newItem, id }]);
    toast({
      title: "Activity Added",
      description: `${newItem.label} activity added successfully.`,
    });
    setIsFormModalOpen(false);
  };

  const editWorkFlowItem = (updatedItem: EditWorkFlowFormData) => {
    setWorkFlowItems(workFlowItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
    toast({
      title: "Activity Updated",
      description: `${updatedItem.label} activity updated successfully.`,
    });
    setEditingItem(null);
    setIsFormModalOpen(false);
  };

  const removeWorkFlowItem = (id: string) => {
    setWorkFlowItems(workFlowItems.filter(item => item.id !== id));
    toast({
      title: "Activity Removed",
      description: "Activity has been removed from your workflow.",
    });
  };

  const handleEditClick = (item: WorkFlowItemType) => {
    setEditingItem(item);
    setIsFormModalOpen(true);
  };

  const handleAddClick = () => {
    setEditingItem(null);
    setIsFormModalOpen(true);
  };

  const formContent = (
    <WorkFlowForm
      onAddWorkFlowItem={addWorkFlowItem}
      onEditWorkFlowItem={editWorkFlowItem}
      editingItem={editingItem}
    />
  );

  return (
    <SectionCard
      title="Work Flow"
      icon={<PieChart size={18} />}
      isEmpty={workFlowItems.length === 0}
      form={formContent}
      isFormModalOpen={isFormModalOpen}
      setIsFormModalOpen={setIsFormModalOpen}
      onAddClick={handleAddClick}
    >
      {workFlowItems.length > 0 ? (
        <div className="flex flex-col w-full">
          <h3 className="text-xl font-bold mb-4">MY TIME</h3>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <WorkFlowChart data={workFlowItems} />
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-3">
                {workFlowItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color || "#000000" }}
                      />
                      <span className="font-medium">{item.label}</span>
                      <span className="text-muted-foreground">{item.value} hours</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-destructive" 
                        onClick={() => removeWorkFlowItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
    </SectionCard>
  );
}
