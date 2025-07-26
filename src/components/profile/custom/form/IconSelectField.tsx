
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";
import { ICON_OPTIONS } from "../types";
import { useFormContext } from "react-hook-form";

export default function IconSelectField() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="icon"
      render={({ field }) => (
        <FormItem className="flex-shrink-0 w-36">
          <FormLabel>Icon</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select icon" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {ICON_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    <FileText size={16} />
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
