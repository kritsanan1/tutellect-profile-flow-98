
import { z } from "zod";

export const formSchema = z.object({
  label: z.string().min(1, "Label is required"),
  description: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  url: z.string().url().optional().or(z.literal("")),
  icon: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const defaultValues: FormValues = {
  label: "",
  description: "",
  startDate: "",
  endDate: "",
  url: "",
  icon: "file-text",
};
