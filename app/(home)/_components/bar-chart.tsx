import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

const data = [
  { month: "Jan", blue: 35, green: 27, red: 9 },
  { month: "Feb", blue: 5, green: 27, red: 9 },
  { month: "Mar", blue: 14, green: 6, red: 3 },
  { month: "Apr", blue: 14, green: 25, red: 9 },
  { month: "May", blue: 9, green: 2, red: 6 },
  { month: "Jun", blue: 36, green: 48, red: 6 },
  { month: "Jul", blue: 23, green: 36, red: 17 },
  { month: "Aug", blue: 23, green: 6, red: 17 },
  { month: "Sep", blue: 36, green: 33, red: 6 }
];

const ChartLoader = () => {
  const barHeights = [35, 28, 42, 38, 25, 45, 32, 48, 36];

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-end gap-1">
          {barHeights.map((height, i) => (
            <div
              key={i}
              className="animate-pulse rounded-t bg-gray-200"
              style={{
                width: "12px",
                height: `${height}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
        <p className="animate-pulse text-sm text-gray-500">Loading chart...</p>
      </div>
    </div>
  );
};

export default function MonthlyBarChart() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ChartLoader />;
  }

  return (
    <div className="h-full w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#888" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#888" }}
            tickFormatter={(value) => `${value}m`}
            domain={[0, 50]}
          />
          <Bar
            dataKey="blue"
            fill="#3b82f6"
            radius={[2, 2, 0, 0]}
            maxBarSize={30}
          />
          <Bar
            dataKey="green"
            fill="#10b981"
            radius={[2, 2, 0, 0]}
            maxBarSize={30}
          />
          <Bar
            dataKey="red"
            fill="#ef4444"
            radius={[2, 2, 0, 0]}
            maxBarSize={30}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
