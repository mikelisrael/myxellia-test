import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiCaretLeftBold } from "react-icons/pi";

interface StatItem {
  label: string;
  value: string;
}

interface OverviewCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  stats: StatItem[];
  onViewAll?: () => void;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  icon: Icon,
  title,
  stats,
  onViewAll
}) => {
  return (
    <Card className={`flex w-full flex-col overflow-hidden pt-0 xl:h-full`}>
      <CardHeader className="flex-center gap-2 border-b-2 bg-[#F9FAFB] py-2">
        <Icon />
        <CardTitle className="grow text-sm font-medium">{title}</CardTitle>
        <Button
          variant="link"
          className="text-cta-blue group"
          onClick={onViewAll}
        >
          View all
          <PiCaretLeftBold className="rotate-180 duration-200 group-hover:translate-x-1" />
        </Button>
      </CardHeader>

      <CardContent className="grid h-full grow grid-cols-3 items-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <span className="text-sm text-[#3D3D3D]">{stat.label}</span>
            <span className="mt-2 block text-2xl font-semibold">
              {stat.value}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
