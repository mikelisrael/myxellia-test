"use client";

import ImageLoader from "@/components/shared/image-loader";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface Item {
  image: string;
  title?: string;
  subtitle?: string;
}

interface CarouselImageProps {
  items?: Item[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const CarouselImage = ({
  items = [],
  className,
  autoPlay = true,
  autoPlayInterval = 5000
}: CarouselImageProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  const images = items.map((it) => it.image);
  const slides = images.length;

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides);
    window.setTimeout(() => setIsTransitioning(false), 300);
  };

  useEffect(() => {
    if (autoPlay && slides > 1) {
      autoPlayRef.current = window.setInterval(goToNext, autoPlayInterval);
      return () => {
        if (autoPlayRef.current) {
          window.clearInterval(autoPlayRef.current);
        }
      };
    }
    return;
  }, [autoPlay, autoPlayInterval, slides]);

  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && slides > 1 && !autoPlayRef.current) {
      autoPlayRef.current = window.setInterval(goToNext, autoPlayInterval);
    }
  };

  if (!slides) {
    return (
      <div className={cn("flex-center bg-muted h-64 rounded-xl", className)}>
        <p className="text-muted-foreground">No images to display</p>
      </div>
    );
  }

  const slidePercent = 100 / slides;
  const trackWidthPercent = slides * 100;

  const currentItem = items[currentIndex];

  return (
    <div
      className={cn("group relative mx-auto w-full max-w-3xl", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/12] w-full overflow-hidden rounded-xl">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${currentIndex * slidePercent}%)`,
            willChange: "transform"
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-full flex-shrink-0 overflow-hidden"
              style={{ width: `${slidePercent}%` }}
            >
              <div
                className={cn(
                  "relative h-full w-full transition-transform duration-[5000ms]",
                  currentIndex === index && "animate-zoomSoft"
                )}
              >
                <ImageLoader
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

        {currentItem && (currentItem.title || currentItem.subtitle) && (
          <div className="pointer-events-none absolute bottom-16 left-4 z-30">
            <div>
              {currentItem.title && (
                <h3 className="text-sm leading-tight font-medium text-white transition-opacity duration-300">
                  {currentItem.title}
                </h3>
              )}
              {currentItem.subtitle && (
                <p className="mt-1 text-sm text-[18px] font-semibold text-white opacity-90 transition-opacity duration-300">
                  {currentItem.subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {slides > 1 && (
          <div className="pointer-events-auto absolute right-0 bottom-4 left-0 z-20 flex justify-center">
            <div className="flex items-center space-x-2 px-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-200",
                    currentIndex === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/60 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes zoomSoft {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-zoomSoft {
          animation: zoomSoft 5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CarouselImage;
