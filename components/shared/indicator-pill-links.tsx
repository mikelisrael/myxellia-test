import { Button } from "@/components/ui/button";
import React from "react";

interface LinkItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  path: string;
}

interface IndicatorPillLinksProps {
  items: LinkItem[];
  activePath: string;
  onItemClick?: (item: LinkItem) => void;
  className?: string;
  buttonVariant?:
    | "ghost"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "link";
  activeClassName?: string;
  inactiveClassName?: string;
  indicatorClassName?: string;
}

const IndicatorPillLinks: React.FC<IndicatorPillLinksProps> = ({
  items,
  activePath,
  onItemClick,
  className = "",
  buttonVariant = "ghost",
  activeClassName = "text-foreground font-semibold",
  inactiveClassName = "text-muted-foreground hover:text-foreground",
  indicatorClassName = "bg-accent"
}) => {
  const [indicatorStyle, setIndicatorStyle] =
    React.useState<React.CSSProperties>({
      opacity: 0,
      width: 0,
      left: 0
    });
  const buttonsRef = React.useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const activeIndex = items.findIndex((item) => item.path === activePath);

  const updateIndicatorPosition = React.useCallback((index: number) => {
    const button = buttonsRef.current[index];
    const container = containerRef.current;

    if (button && container) {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorStyle({
        opacity: 1,
        width: buttonRect.width,
        height: buttonRect.height,
        left: buttonRect.left - containerRect.left,
        top: buttonRect.top - containerRect.top,
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
      });
    }
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (activeIndex !== -1) {
        updateIndicatorPosition(activeIndex);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [activeIndex, updateIndicatorPosition]);

  React.useEffect(() => {
    const handleResize = () => {
      if (activeIndex !== -1) {
        updateIndicatorPosition(activeIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, updateIndicatorPosition]);

  const handleMouseEnter = (index: number) => {
    updateIndicatorPosition(index);
  };

  const handleMouseLeave = () => {
    if (activeIndex !== -1) {
      updateIndicatorPosition(activeIndex);
    } else {
      setIndicatorStyle((prev) => ({
        ...prev,
        opacity: 0,
        transition: "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
      }));
    }
  };

  const handleItemClick = (item: LinkItem) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      console.log(`Navigate to ${item.path}`);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`flex-between relative flex grow ${className}`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex-between pointer-events-none absolute z-0 rounded-md ${indicatorClassName}`}
        style={indicatorStyle}
      />

      {items.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = activePath === item.path;

        return (
          <Button
            key={item.id}
            ref={(el) => {
              buttonsRef.current[index] = el;
            }}
            variant={buttonVariant}
            className={`relative z-10 gap-2 !px-6 transition-none hover:bg-transparent ${
              isActive ? activeClassName : inactiveClassName
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onClick={() => handleItemClick(item)}
          >
            {IconComponent && <IconComponent className="size-6" />}
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default IndicatorPillLinks;
