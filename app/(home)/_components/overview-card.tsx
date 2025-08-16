import CountUp from "@/components/shared/count-up";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
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
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    new Array(stats.length).fill(true)
  );

  const parseValue = (value: string) => {
    const cleanValue = value.replace(/[^0-9.km]/gi, "");

    const hasK = /k$/i.test(cleanValue);
    const hasM = /m$/i.test(cleanValue);

    const numericPart = parseFloat(cleanValue.replace(/[km]/gi, ""));

    let finalNumber = numericPart;
    let suffix = "";

    if (hasK) {
      finalNumber = numericPart * 1000;
      suffix = "k";
    } else if (hasM) {
      finalNumber = numericPart * 1000000;
      suffix = "m";
    }

    return {
      number: finalNumber,
      suffix,
      originalSuffix: hasK ? "k" : hasM ? "m" : ""
    };
  };

  const handleCountUpEnd = (index: number) => {
    setLoadingStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

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
        {stats.map((stat, index) => {
          const { number, originalSuffix } = parseValue(stat.value);
          const isLoading = loadingStates[index];

          return (
            <div key={index}>
              <span className="text-sm text-[#3D3D3D]">{stat.label}</span>
              <div className="mt-2 block text-2xl font-semibold">
                {isLoading ? (
                  <div className="h-8 w-16 animate-pulse rounded bg-gray-200" />
                ) : (
                  <div className="flex items-baseline">
                    {originalSuffix ? (
                      <>
                        <CountUp
                          to={parseFloat(stat.value.replace(/[^0-9.]/g, ""))}
                          duration={1.5}
                          className="inline"
                        />
                        <span>{originalSuffix}</span>
                      </>
                    ) : (
                      <CountUp to={number} duration={1.5} separator="," />
                    )}
                  </div>
                )}

                {isLoading && (
                  <div className="sr-only">
                    <CountUp
                      to={1}
                      duration={0.1}
                      delay={index * 0.2}
                      onEnd={() => handleCountUpEnd(index)}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
