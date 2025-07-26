
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CustomFormData } from "./types";
import { formSchema, defaultValues, FormValues } from "./form/formSchema";
import IconSelectField from "./form/IconSelectField";
import LabelField from "./form/LabelField";
import DescriptionField from "./form/DescriptionField";
import DatePickerField from "./form/DatePickerField";
import UrlField from "./form/UrlField";
import TagsField from "./form/TagsField";
import FormButtons from "./form/FormButtons";

interface CustomFormProps {
  onAddCustomItem: (data: CustomFormData) => void;
  onCancel?: () => void;
}

export default function CustomForm({ onAddCustomItem, onCancel }: CustomFormProps) {
  const [tags, setTags] = useState<string[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: FormValues) {
    const formData: CustomFormData = {
      label: values.label,
      description: values.description,
      startDate: values.startDate,
      endDate: values.endDate,
      url: values.url,
      icon: values.icon,
      tags: tags.length > 0 ? tags : undefined,
    };
    
    onAddCustomItem(formData);
    form.reset();
    setTags([]);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-4 mb-2">
          <IconSelectField />
          <LabelField />
        </div>

        <DescriptionField />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DatePickerField name="startDate" label="Start Date" />
          <DatePickerField name="endDate" label="End Date" />
        </div>

        <UrlField />

        <TagsField tags={tags} setTags={setTags} />

        <FormButtons onCancel={onCancel} />
      </form>
    </Form>
  );
}
