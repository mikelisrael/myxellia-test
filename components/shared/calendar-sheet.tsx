import { X } from "lucide-react";
import React from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { Calendar } from "../ui/calendar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "../ui/sheet";

interface CalendarSheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarSheet: React.FC<CalendarSheetProps> = ({ open, setOpen }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        showCloseButton={false}
        className="border-0 bg-[#0D0D0D] outline-0"
      >
        <SheetHeader className="bg-[#171717] text-white">
          <div className="flex-between">
            <SheetTitle className="grow text-white">Calendar</SheetTitle>
            <SheetClose>
              <X />
            </SheetClose>
          </div>
          <SheetDescription className="sr-only">
            Manage your calendar
          </SheetDescription>
        </SheetHeader>

        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          className="h-full w-full bg-[#0D0D0D] p-6 text-white shadow-sm"
          classNames={{
            month_caption:
              "flex justify-between items-center h-12 mb-4 w-full px-2",
            caption_label: "text-white text-lg font-medium flex-1 text-center",
            nav: "flex items-center justify-between w-full absolute inset-x-0",
            button_previous:
              "h-8 w-8 bg-transparent hover:bg-zinc-800 translate-y-2 text-white border-none rounded-md",
            button_next:
              "h-8 w-8 bg-transparent hover:bg-zinc-800 translate-y-2 text-white border-none rounded-md",

            table: "w-full border-spacing-0 border-collapse",
            weekdays: "grid grid-cols-7",
            weekday:
              "text-zinc-400 text-sm font-medium h-10 w-full flex items-center justify-center border-r border-b first:border-l border-zinc-700 border-t ",

            week: "grid grid-cols-7",
            day: "relative h-20 w-full flex items-center justify-center text-white border-r border-b border-zinc-700 first:border-l",

            today: "bg-zinc-800 text-white rounded-md",
            selected: "bg-blue-600 text-white rounded-md hover:bg-blue-700",
            outside: "text-zinc-600 opacity-60",
            disabled: "text-zinc-700 opacity-40",

            range_start: "bg-blue-600 text-white rounded-md",
            range_end: "bg-blue-600 text-white rounded-md",
            range_middle: "bg-blue-600/30 text-white"
          }}
          components={{
            Chevron: ({ className, orientation, ...props }) => {
              if (orientation === "left") {
                return (
                  <VscTriangleLeft className={className} size={18} {...props} />
                );
              }
              if (orientation === "right") {
                return (
                  <VscTriangleRight
                    className={className}
                    size={18}
                    {...props}
                  />
                );
              }
              return <></>;
            },

            DayButton: ({ day, modifiers, ...props }) => (
              <button
                {...props}
                className={`flex h-20 w-full items-center justify-center border-0 py-6 text-sm font-medium transition-colors duration-150 ${
                  modifiers.selected
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-white hover:bg-zinc-800"
                } ${
                  modifiers.today && !modifiers.selected
                    ? "bg-zinc-800 text-white"
                    : ""
                } ${modifiers.outside ? "text-zinc-600 opacity-60" : ""} ${
                  modifiers.disabled
                    ? "cursor-not-allowed text-zinc-700 opacity-40"
                    : "cursor-pointer"
                } `}
              >
                {"date" in day
                  ? (day as any).date.getDate()
                  : ((day as any).getDate?.() ?? "")}
              </button>
            )
          }}
        />
      </SheetContent>
    </Sheet>
  );
};

export default CalendarSheet;
