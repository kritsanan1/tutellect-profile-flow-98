
// Constants for the education form
export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Generate years from 1950 to current year
export const YEARS = Array.from(
  { length: new Date().getFullYear() - 1949 }, 
  (_, i) => `${1950 + i}`
);

export const METRIC_TYPES = [
  { value: "GPA_4", label: "GPA (4.0 Scale)" },
  { value: "GPA_10", label: "GPA (10.0 Scale)" },
  { value: "Percentage", label: "Percentage (%)" },
  { value: "CGPA", label: "CGPA" },
  { value: "Other", label: "Other" },
];
