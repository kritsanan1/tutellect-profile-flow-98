
export interface AwardType {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface AwardFormData {
  title: string;
  organization: string;
  date: string;
  description?: string;
}
