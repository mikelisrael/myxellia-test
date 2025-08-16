"use client";

import Budgeting from "@/public/svg/Budgeting.svg";
import Calendar from "@/public/svg/Calendar.svg";
import Message from "@/public/svg/message-notif.svg";
import NotificationBell from "@/public/svg/notification.svg";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";
import Logo from "./logo";
import { UserNav } from "./user-nav";

const TopNav = () => {
  const navButtons = [
    {
      id: "notifications",
      icon: NotificationBell,
      tooltip: "Notifications",
      onClick: () => console.log("Notifications clicked")
    },
    {
      id: "budget",
      icon: Budgeting,
      tooltip: "Budget",
      onClick: () => console.log("Budget clicked")
    },
    {
      id: "calendar",
      icon: Calendar,
      tooltip: "Calendar",
      onClick: () => console.log("Calendar clicked")
    },
    {
      id: "messages",
      icon: Message,
      tooltip: "Messages",
      onClick: () => console.log("Messages clicked")
    }
  ];

  return (
    <nav className="navbar-height sticky top-0 z-[999] bg-[#191919]">
      <div className="universal-x flex-between h-full gap-5">
        <Logo />

        <section className="flex-center">
          <TooltipProvider>
            {navButtons.map(({ id, icon: IconComponent, tooltip, onClick }) => (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="hover:bg-accent/10"
                    onClick={onClick}
                  >
                    <IconComponent className="size-7" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

          <UserNav />
        </section>
      </div>
    </nav>
  );
};

export default TopNav;
