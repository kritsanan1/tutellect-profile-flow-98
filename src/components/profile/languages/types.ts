
export type ProficiencyLevel = "Beginner" | "Intermediate" | "Advanced" | "Proficient" | "Native";

export interface LanguageItemType {
  id: string;
  name: string;
  proficiency: ProficiencyLevel;
}
