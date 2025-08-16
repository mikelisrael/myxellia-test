"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { PopoverClose } from "@radix-ui/react-popover";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLogOutOutline, IoShieldCheckmark } from "react-icons/io5";
import { RiContactsFill, RiLock2Fill } from "react-icons/ri";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import UserAvatar from "./user-avatar";

const SinglePopoverItem = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <PopoverClose
      className={cn(
        "flex w-full items-center gap-4 rounded-md border-b-2 px-2 py-3 text-[#343330] hover:bg-gray-100",
        className
      )}
    >
      {children}
    </PopoverClose>
  );
};

export function UserNav() {
  const name = "Michael Israel";
  const email = "israelipinkz@gmail.com";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="ml-3 px-0 !ring-0 hover:bg-transparent"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <UserAvatar alt={name} src={""} />
                </div>
              </TooltipTrigger>
              <TooltipContent
                showArrow={false}
                side="bottom"
                className="bg-muted"
                align="end"
              >
                <div className="p-1 text-left">
                  <p className="text-foreground text-base font-medium">
                    {name}
                  </p>
                  <p className="text-muted-foreground text-sm">{email}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 w-full !max-w-lg" align="end">
        <header className="flex-center gap-2 rounded-xl border-2 bg-[#fafafa] p-3">
          <UserAvatar
            alt={name}
            src={""}
            className="size-16"
            fallbackClassName="bg-[#176d58] text-white text-xl font-semibold"
          />
          <div className="grow">
            <h2 className="text-lg font-semibold">{name}</h2>
            <span className="text-sm">{email}</span>
          </div>
        </header>
        <div className="mt-4">
          <SinglePopoverItem>
            <FaPeopleGroup size={23} />
            <span className="text-lg font-medium">Teams</span>
          </SinglePopoverItem>
          <SinglePopoverItem>
            <RiContactsFill size={23} />
            <span className="text-lg font-medium">Contact Persons</span>
          </SinglePopoverItem>
          <SinglePopoverItem>
            <RiLock2Fill size={23} />
            <span className="text-lg font-medium">Change Password</span>
          </SinglePopoverItem>
          <SinglePopoverItem>
            <IoShieldCheckmark size={23} />
            <span className="text-lg font-medium">
              2 - Factor Authentication
            </span>
          </SinglePopoverItem>
          <SinglePopoverItem className="border-0">
            <IoLogOutOutline
              size={23}
              strokeWidth={4}
              className="text-destructive -scale-x-100"
            />
            <span className="text-destructive text-lg font-medium">Logout</span>
          </SinglePopoverItem>
        </div>
      </PopoverContent>
    </Popover>
  );
}
