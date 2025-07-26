
// Helper arrays for month and year options
export const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Generate years (from current year back to 1950)
export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1950; year--) {
    years.push(year.toString());
  }
  return years;
};

export const YEARS = generateYears();

// Metric options
export const METRIC_SUGGESTIONS = [
  "Percentage", "GPA_10", "GPA_4", "Grade", "CGPA", "Other"
];

// Function to format date display
export const formatDate = (month: string, year: string) => {
  return month && year ? `${month} ${year}` : "";
};
