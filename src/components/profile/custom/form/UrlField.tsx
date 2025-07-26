
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function UrlField() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="url"
      render={({ field }) => (
        <FormItem>
          <FormLabel>URL</FormLabel>
          <FormControl>
            <Input placeholder="https://example.com" {...field} />
          </FormControl>
          <FormDescription>
            Optional link to additional information
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
