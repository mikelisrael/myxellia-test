import { cn } from "@/lib/utils";
import { RiArrowLeftFill } from "react-icons/ri";

interface MetricCardProps {
  value: string;
  label: string;
  change: string;
  trend: "up" | "down";
  color: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  change,
  trend,
  color,
  className = ""
}) => {
  const isPositive = trend === "up";
  const bgColor = isPositive ? "bg-green-500" : "bg-red-500";
  const textColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div
      className={`flex flex-col justify-center rounded-xl border-2 p-4 ${className}`}
    >
      <h4 className="text-[19px] font-semibold" style={{ color }}>
        {value}
      </h4>

      <div className="flex items-center gap-2 text-[10px]">
        <span className="font-medium whitespace-nowrap">{label}</span>
        <div
          className={cn(
            `flex-center rotate-90 rounded-full ${bgColor} p-1 text-white`,
            trend === "down" && "-rotate-90"
          )}
        >
          <RiArrowLeftFill size={10} strokeWidth={2} />
        </div>
        <span className={textColor}>{change}</span>
      </div>
    </div>
  );
};

export default MetricCard;
