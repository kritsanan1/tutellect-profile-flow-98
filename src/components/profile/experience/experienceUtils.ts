
import { MONTHS, YEARS } from '../education/educationFormUtils';

export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  title: string;
  location: string;
  description: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  current: boolean;
}

// Re-export the months and years from education utils
export { MONTHS, YEARS };

export const formatDate = (month: string, year: string) => {
  if (!month || !year) return "";
  return `${month} ${year}`;
};

export const initialExperienceData: ExperienceItem[] = [
  {
    id: "1",
    company: "Google",
    companyUrl: "https://google.com",
    title: "Senior Software Engineer",
    location: "Mountain View, CA",
    description: "Led development of cloud infrastructure systems and mentored junior engineers.",
    startMonth: "March",
    startYear: "2019",
    endMonth: "",
    endYear: "",
    current: true
  },
  {
    id: "2",
    company: "Facebook",
    companyUrl: "https://facebook.com",
    title: "Software Engineer",
    location: "Menlo Park, CA",
    description: "Worked on the newsfeed algorithm and mobile application performance improvements.",
    startMonth: "June",
    startYear: "2017",
    endMonth: "February",
    endYear: "2019",
    current: false
  }
];
