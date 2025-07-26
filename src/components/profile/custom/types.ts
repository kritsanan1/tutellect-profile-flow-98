
export type CustomItemType = {
  id: string;
  label: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  tags?: string[];
  icon?: string;
};

export type CustomFormData = {
  label: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  tags?: string[];
  icon?: string;
};

export const ICON_OPTIONS = [
  { value: "file-text", label: "Document" },
  { value: "link", label: "Link" },
  { value: "calendar", label: "Calendar" },
  { value: "award", label: "Award" },
  { value: "bookmark", label: "Bookmark" },
  { value: "briefcase", label: "Work" },
  { value: "book", label: "Book" },
  { value: "globe", label: "Website" },
  { value: "star", label: "Star" }
];
