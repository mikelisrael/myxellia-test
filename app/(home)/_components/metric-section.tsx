import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import House from "@/public/svg/house.svg";
import Profile2 from "@/public/svg/profile2.svg";
import MetricCard from "./metric-card";
import OverviewCard from "./overview-card";

const salesMetrics = [
  {
    id: "total-inflow",
    value: "$200,000,000.00",
    label: "Total Inflow",
    change: "2.5%",
    trend: "up" as const,
    color: "#4545FE"
  },
  {
    id: "mrr",
    value: "$200,000,000.00",
    label: "MRR",
    change: "2.5%",
    trend: "up" as const,
    color: "#12B76A"
  },
  {
    id: "commission-revenue",
    value: "$200,000,000.00",
    label: "Commission Revenue",
    change: "2.5%",
    trend: "up" as const,
    color: "#14B8A6"
  },
  {
    id: "total-outflow",
    value: "$200,000,000.00",
    label: "Total Outflow",
    change: "2.5%",
    trend: "down" as const,
    color: "#F04438"
  }
];

const overviewCards = [
  {
    id: "listings",
    icon: House,
    title: "Listings Overview",
    stats: [
      { label: "Total", value: "1.8k" },
      { label: "Active", value: "80" },
      { label: "Archived", value: "1k" }
    ],
    onViewAll: () => console.log("View all listings")
  },
  {
    id: "users",
    icon: Profile2,
    title: "Users Overview",
    stats: [
      { label: "Total", value: "20.7k" },
      { label: "Riders", value: "8.5k" },
      { label: "Subscribers", value: "7.5k" }
    ],
    onViewAll: () => console.log("View all users")
  }
];
const MetricSection = () => {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader className="flex-between">
          <div>
            <CardTitle className="mb-1 text-xl">Sales Overview</CardTitle>
            <CardDescription>
              Showing overview Jan 2022 - Sep 2022
            </CardDescription>
          </div>

          <button className="hover:bg-accent/50 w-full max-w-[15rem] rounded-full border-2 p-4 font-medium">
            View Transactions
          </button>
        </CardHeader>

        <div className="!mb-0">
          <div className="flex items-center justify-end px-6">
            <Button variant="ghost" className="hover:bg-transparent">
              1 Week
            </Button>
            <Button variant="ghost" className="hover:bg-transparent">
              1 Month
            </Button>
            <Button variant="secondary">1 Year</Button>
          </div>

          <hr className="mt-4" />
        </div>

        <CardContent className="grid gap-2 xl:grid-cols-2">
          <div className="bg-gray-500"></div>
          <section className="grid grid-cols-2 gap-3">
            {salesMetrics.map((metric) => (
              <MetricCard key={metric.id} {...metric} />
            ))}
          </section>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        {overviewCards.map((card) => (
          <OverviewCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            stats={card.stats}
            onViewAll={card.onViewAll}
          />
        ))}
      </div>
    </section>
  );
};

export default MetricSection;
