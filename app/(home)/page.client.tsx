"use client";

import SplitText from "@/components/shared/split-text";
import Messages from "@/public/svg/messages-3.svg";
import CarouselSection from "./_components/carousel-section";
import MetricSection from "./_components/metric-section";

const HomePageClient = () => {
  return (
    <main className="bg-muted py-5">
      <div className="universal-x space-y-6">
        <header>
          <SplitText
            text="Welcome, Michael"
            className="text-xl font-semibold"
          />
        </header>
        <MetricSection />
        <CarouselSection />

        <button className="flex-center fixed right-10 bottom-20 z-[30] cursor-pointer rounded-full border bg-[#242526] p-4 transition-transform duration-300 hover:-translate-y-1">
          <Messages />
        </button>
      </div>
    </main>
  );
};

export default HomePageClient;
