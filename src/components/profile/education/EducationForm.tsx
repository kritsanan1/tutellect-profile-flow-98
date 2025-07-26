
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { EducationItem } from "./types";
import BasicInfoFields from "./BasicInfoFields";
import DateSelector from "./DateSelector";
import MetricSelector from "./MetricSelector";

interface EducationFormProps {
  addEducation: (education: Omit<EducationItem, "id">) => void;
  initialValues?: Omit<EducationItem, "id">;
}

export default function EducationForm({ addEducation, initialValues }: EducationFormProps) {
  // Form state
  const [institution, setInstitution] = useState(initialValues?.institution || "");
  const [degree, setDegree] = useState(initialValues?.degree || "");
  const [field, setField] = useState(initialValues?.field || "");
  const [startMonth, setStartMonth] = useState(initialValues?.startMonth || "September");
  const [startYear, setStartYear] = useState(initialValues?.startYear || "2015");
  const [endMonth, setEndMonth] = useState(initialValues?.endMonth || "June");
  const [endYear, setEndYear] = useState(initialValues?.endYear || "2019");
  const [current, setCurrent] = useState(initialValues?.current || false);
  const [metric, setMetric] = useState(initialValues?.metric || "GPA_4");
  const [score, setScore] = useState(initialValues?.score || "");
  const [description, setDescription] = useState(initialValues?.description || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addEducation({
      institution,
      degree,
      field,
      startMonth,
      startYear,
      endMonth,
      endYear,
      current,
      metric,
      score,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-2 pb-4">
      <div className="grid gap-4">
        <BasicInfoFields 
          institution={institution}
          degree={degree}
          field={field}
          onInstitutionChange={setInstitution}
          onDegreeChange={setDegree}
          onFieldChange={setField}
        />

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-end">
          <DateSelector 
            label="Start Date"
            selectedMonth={startMonth}
            selectedYear={startYear}
            onMonthChange={setStartMonth}
            onYearChange={setStartYear}
          />
          
          {!current && (
            <DateSelector 
              label="End Date"
              selectedMonth={endMonth}
              selectedYear={endYear}
              onMonthChange={setEndMonth}
              onYearChange={setEndYear}
            />
          )}
        </div>

        <div className="flex items-center space-x-2 py-2">
          <Checkbox 
            id="current-student" 
            checked={current} 
            onCheckedChange={(checked) => setCurrent(checked as boolean)} 
          />
          <Label htmlFor="current-student">I am currently studying here</Label>
        </div>
        
        <MetricSelector 
          metric={metric}
          score={score}
          onMetricChange={setMetric}
          onScoreChange={setScore}
        />
        
        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea 
            id="description"
            placeholder="Add details about your education experience, honors, special projects, etc."
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      
      <Button type="submit" className="primary-gradient w-full text-white hover:opacity-90">
        {initialValues ? "Update Education" : "Add Education"}
      </Button>
    </form>
  );
}
