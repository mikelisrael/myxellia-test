"use client";

import Budgeting from "@/public/svg/Budgeting.svg";
import Calendar from "@/public/svg/Calendar.svg";
import Message from "@/public/svg/message-notif.svg";
import NotificationBell from "@/public/svg/notification.svg";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";
import BudgetDialogContent from "./budget-dialog-content";
import Logo from "./logo";
import Navigation from "./navigation";
import ResponsiveDialog from "./responsive-dialog";
import { UserNav } from "./user-nav";

const TopNav = () => {
  const [openBudgetDialog, setOpenBudgetDialog] = useState(true);

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
      onClick: () => setOpenBudgetDialog(true)
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
    <nav className="sticky top-0 z-30">
      <section className="navbar-height bg-[#191919]">
        <div className="universal-x flex-between h-full gap-5">
          <Logo />

          <section className="flex-center">
            <TooltipProvider>
              {navButtons.map(
                ({ id, icon: IconComponent, tooltip, onClick }) => (
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
                )
              )}
            </TooltipProvider>

            <UserNav />
          </section>
        </div>
      </section>

      <Navigation />

      <ResponsiveDialog
        open={openBudgetDialog}
        onOpenChange={setOpenBudgetDialog}
        content={<BudgetDialogContent />}
      />
    </nav>
  );
};

export default TopNav;
