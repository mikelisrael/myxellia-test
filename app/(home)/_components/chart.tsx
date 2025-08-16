import { useState } from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { LazyMotion, domAnimation, AnimatePresence, m } from "framer-motion";
import MonthlyBarChart from "./bar-chart";
import MonthlyAreaChart from "./area-chart";

const chartVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const transition = {
  x: { type: "spring" as const, stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 }
};

export default function Chart() {
  const [currentChart, setCurrentChart] = useState<"bar" | "area">("bar");
  const [direction, setDirection] = useState(0);

  const nextChart = () => {
    setDirection(1);
    setCurrentChart((prev) => (prev === "bar" ? "area" : "bar"));
  };

  const prevChart = () => {
    setDirection(-1);
    setCurrentChart((prev) => (prev === "bar" ? "area" : "bar"));
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative h-52 w-full overflow-hidden">
        <button
          onClick={nextChart}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#f5f5f5] p-2 text-2xl duration-200 hover:bg-gray-300"
        >
          <VscTriangleRight color="#919191" size={12} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <m.div
            key={currentChart}
            custom={direction}
            variants={chartVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0 h-full w-full"
          >
            {currentChart === "bar" ? (
              <MonthlyBarChart />
            ) : (
              <MonthlyAreaChart />
            )}
          </m.div>
        </AnimatePresence>

        <button
          onClick={prevChart}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#f5f5f5] p-2 text-2xl duration-200 hover:bg-gray-300"
        >
          <VscTriangleLeft color="#919191" size={12} />
        </button>
      </div>
    </LazyMotion>
  );
}
