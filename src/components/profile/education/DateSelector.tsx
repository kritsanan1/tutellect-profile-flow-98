
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MONTHS, YEARS } from "./educationFormUtils";

interface DateSelectorProps {
  label: string;
  selectedMonth: string;
  selectedYear: string;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export default function DateSelector({
  label,
  selectedMonth,
  selectedYear,
  onMonthChange,
  onYearChange
}: DateSelectorProps) {
  return (
    <div className="space-y-2 w-full">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Select value={selectedMonth} onValueChange={onMonthChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            {MONTHS.map(month => (
              <SelectItem key={month} value={month}>{month}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedYear} onValueChange={onYearChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {YEARS.map(year => (
              <SelectItem key={year} value={year}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
