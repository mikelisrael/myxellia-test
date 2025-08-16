import Chart from "@/public/svg/align-bottom.svg";
import Calculator from "@/public/svg/calculator.svg";
import Settings4 from "@/public/svg/setting-4.svg";
import TrendUp from "@/public/svg/trend-up.svg";
import ImageLoader from "./image-loader";

const budget_items = [
  {
    icon: <Settings4 className="shrink-0" />,
    title: "Set up annual budgets by account category",
    desc: "Allocate funds across income and expense lines with full visibility."
  },
  {
    icon: <TrendUp className="shrink-0" />,
    title: "Track actuals vs budget in real time",
    desc: "See how your community is performing against plan, month by month."
  },
  {
    icon: <Chart className="shrink-0" />,
    title: "Adjust figures and forecast with ease",
    desc: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place."
  }
];

const ListItem = ({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <li className="flex-center gap-3">
      {icon}
      <div className="grow">
        <h3 className="mb-1 text-base font-semibold">{title}</h3>
        <p className="text-xs text-[#606060]">{desc}</p>
      </div>
    </li>
  );
};

const BudgetDialogContent = () => {
  return (
    <div className="-mt-4">
      <header className="flex-center relative isolate h-[213px] overflow-hidden bg-[#0C2841]">
        <Calculator className="translate-y-4" />

        <ImageLoader
          src="/images/overlay.png"
          alt="overlay"
          className="absolute -z-10 w-[90%] translate-y-[13%] rounded-2xl"
          fill={false}
          width={386}
          height={264}
          showLoader={false}
        />
      </header>

      <ul className="my-5 space-y-4 px-10">
        {budget_items.map((item, index) => (
          <ListItem
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </div>
  );
};

export default BudgetDialogContent;
