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
import CalendarSheet from "./calendar-sheet";
import Logo from "./logo";
import Navigation from "./navigation";
import ResponsiveDialog from "./responsive-dialog";
import { UserNav } from "./user-nav";

const TopNav = () => {
  const [openBudgetDialog, setOpenBudgetDialog] = useState(false);
  const [openCalendarSheet, setOpenCalendarSheet] = useState(false);

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
      onClick: () => setOpenCalendarSheet(true)
    },
    {
      id: "messages",
      icon: Message,
      tooltip: "Messages",
      onClick: () => console.log("Messages clicked")
    }
  ];

  return (
    <nav className="sticky top-0 z-30 duration-1000">
      <section className="bg-[#191919] py-3 md:py-5">
        <div className="universal-x flex h-full items-center justify-between gap-2 sm:gap-5">
          <Logo className="w-32 sm:w-[154px]" />

          <section className="flex items-center gap-1 sm:gap-2">
            <TooltipProvider>
              <div className="hidden items-center sm:flex">
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
                          <IconComponent className="size-6 md:size-7" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  )
                )}
              </div>

              <div className="flex items-center sm:hidden">
                {navButtons
                  .slice(0, 3)
                  .map(({ id, icon: IconComponent, tooltip, onClick }) => (
                    <Tooltip key={id}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="hover:bg-accent/10 p-2"
                          onClick={onClick}
                        >
                          <IconComponent className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
              </div>
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

      <CalendarSheet open={openCalendarSheet} setOpen={setOpenCalendarSheet} />
    </nav>
  );
};

export default TopNav;
