
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { WorkFlowItemType } from "./types";

interface WorkFlowChartProps {
  data: WorkFlowItemType[];
}

// Define a consistent color palette
const COLORS = [
  '#4285F4', // Google Blue
  '#34A853', // Google Green
  '#FBBC05', // Google Yellow
  '#EA4335', // Google Red
  '#8E24AA', // Purple
  '#00ACC1', // Cyan
  '#FB8C00', // Orange
  '#607D8B', // Blue Grey
];

export default function WorkFlowChart({ data }: WorkFlowChartProps) {
  // Assign colors to data items
  const chartData = data.map((item, index) => ({
    ...item,
    color: item.color || COLORS[index % COLORS.length]
  }));

  return (
    <div className="w-full h-[300px] max-w-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color || COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
