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
    <Card className={`h-full overflow-hidden pt-0`}>
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

      <CardContent className="grid grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index}>
            <span className="text-sm text-[#525252]">{stat.label}</span>
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
