"use client";

import { PlaceholdersAndVanishInput } from "@/components/shared/animated-search";
import IndicatorPillLinks from "@/components/shared/indicator-pill-links";
import Article from "@/public/svg/article.svg";
import Briefcase from "@/public/svg/briefcase.svg";
import Home from "@/public/svg/home.svg";
import Profile from "@/public/svg/profile.svg";
import Scroll from "@/public/svg/scroll.svg";
import { usePathname } from "next/navigation";
import React from "react";

const placeholders = [
  "Search for listings, users here...",
  "Search for requests",
  "Search for applications"
];

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    path: "/"
  },
  {
    id: "listings",
    label: "Listings",
    icon: Briefcase,
    path: "/listings"
  },
  {
    id: "users",
    label: "Users",
    icon: Profile,
    path: "/users"
  },
  {
    id: "requests",
    label: "Request",
    icon: Article,
    path: "/requests"
  },
  {
    id: "applications",
    label: "Applications",
    icon: Scroll,
    path: "/applications"
  }
];

const HomeTopNav = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  const handleNavClick = (item: { path: string }) => {
    console.log(`Navigate to ${item.path}`);
  };

  return (
    <nav className="bg-background z-[100] border-2 py-4">
      <div className="universal-x flex-between gap-10">
        <IndicatorPillLinks
          items={navItems}
          activePath={pathname}
          onItemClick={handleNavClick}
        />

        <PlaceholdersAndVanishInput
          query={searchQuery}
          setQuery={setSearchQuery}
          placeholders={placeholders}
        />
      </div>
    </nav>
  );
};

export default HomeTopNav;
