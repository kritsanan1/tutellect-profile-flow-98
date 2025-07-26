
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { METRIC_TYPES } from "./educationFormUtils";
import { useState, useEffect } from "react";

interface MetricSelectorProps {
  metric: string;
  score: string;
  onMetricChange: (value: string) => void;
  onScoreChange: (value: string) => void;
}

export default function MetricSelector({
  metric,
  score,
  onMetricChange,
  onScoreChange
}: MetricSelectorProps) {
  const [customMetric, setCustomMetric] = useState("");
  const isOtherMetric = metric === "Other";
  
  // Update customMetric when metric changes
  useEffect(() => {
    if (!isOtherMetric) {
      setCustomMetric("");
    }
  }, [metric, isOtherMetric]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="metric">Metric</Label>
        <Select value={metric} onValueChange={onMetricChange}>
          <SelectTrigger id="metric">
            <SelectValue placeholder="Select metric" />
          </SelectTrigger>
          <SelectContent>
            {METRIC_TYPES.map(type => (
              <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {isOtherMetric && (
          <div className="mt-2">
            <Input
              placeholder="Specify metric type"
              value={customMetric}
              onChange={(e) => setCustomMetric(e.target.value)}
              className="w-full"
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="score">Score</Label>
        <Input 
          id="score" 
          placeholder="e.g. 3.8 or 85%" 
          value={score}
          onChange={(e) => onScoreChange(e.target.value)}
        />
      </div>
    </div>
  );
}
