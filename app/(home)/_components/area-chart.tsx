import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

interface ChartDataItem {
  month: string;
  blue: number;
  green: number;
  red: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color: string;
    name: string;
  }>;
  label?: string;
}

const data: ChartDataItem[] = [
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

const ChartLoader = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-20 w-40">
        <svg viewBox="0 0 160 80" className="h-full w-full">
          <path
            d="M0,60 Q40,20 80,40 T160,30"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            className="animate-pulse"
            opacity="0.6"
          />
          <path
            d="M0,50 Q40,30 80,35 T160,40"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: "0.2s" }}
            opacity="0.6"
          />
          <path
            d="M0,65 Q40,45 80,50 T160,55"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: "0.4s" }}
            opacity="0.6"
          />
        </svg>
      </div>
      <p className="animate-pulse text-sm text-gray-500">Loading chart...</p>
    </div>
  </div>
);

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
        <p className="mb-2 text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm text-gray-600">
            <span
              className="mr-2 inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}: <span className="font-semibold">{entry.value}m</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MonthlyAreaChart: React.FC = () => {
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
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#888" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#888" }}
            tickFormatter={(value) => `${value}m`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="blue"
            stackId="1"
            stroke="#3b82f6"
            fill="url(#colorBlue)"
            strokeWidth={2}
            name="Blue Series"
          />
          <Area
            type="monotone"
            dataKey="green"
            stackId="1"
            stroke="#10b981"
            fill="url(#colorGreen)"
            strokeWidth={2}
            name="Green Series"
          />
          <Area
            type="monotone"
            dataKey="red"
            stackId="1"
            stroke="#ef4444"
            fill="url(#colorRed)"
            strokeWidth={2}
            name="Red Series"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyAreaChart;
