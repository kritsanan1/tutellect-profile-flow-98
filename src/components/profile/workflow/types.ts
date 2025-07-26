
export interface WorkFlowItemType {
  id: string;
  label: string;
  value: number;
  color?: string;
}

export interface WorkFlowFormData {
  label: string;
  value: number;
}

export interface EditWorkFlowFormData extends WorkFlowFormData {
  id: string;
}
