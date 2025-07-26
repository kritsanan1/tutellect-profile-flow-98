
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function LabelField() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="label"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormLabel>Label</FormLabel>
          <FormControl>
            <Input placeholder="Enter a label" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
