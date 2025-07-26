
import { MONTHS, YEARS } from '../education/educationFormUtils';

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  url?: string;
  startMonth: string;
  startYear: string;
  endMonth?: string;
  endYear?: string;
  current: boolean;
}

// Re-export the months and years from education utils
export { MONTHS, YEARS };

export const formatDate = (month: string, year: string) => {
  if (!month || !year) return "";
  return `${month} ${year}`;
};
