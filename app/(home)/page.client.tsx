"use client";

import CarouselSection from "./_components/carousel-section";
import MetricSection from "./_components/metric-section";

const HomePageClient = () => {
  return (
    <main className="py-5">
      <div className="universal-x space-y-6">
        <header>
          <h1 className="text-xl font-semibold">Welcome, Michael</h1>
        </header>
        <MetricSection />
        <CarouselSection />
      </div>
    </main>
  );
};

export default HomePageClient;
