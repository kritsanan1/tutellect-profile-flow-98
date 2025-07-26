
export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  current: boolean;
  metric: string;
  score: string;
  description?: string;
}
