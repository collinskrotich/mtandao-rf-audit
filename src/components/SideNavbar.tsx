/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  LayoutDashboard,
  ChevronRight,
  RadioTower,
  BringToFront,
  BellRing 
} from "lucide-react";

import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[160px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
            <img
        src="saf-logo.png"
        alt="Image"
        className="absolute top-10 left-4 w-1/2"
      />

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Readings",
            href: "/readings",
            icon: RadioTower,
            variant: "ghost"
          },
          {
            title: "Prioritization",
            href: "/prioritization",
            icon: BringToFront,
            variant: "ghost"
          },
          // {
          //   title: "Alarms",
          //   href: "/alarms",
          //   icon: BellRing,
          //   variant: "ghost"
          // }
        ]}
      />
    </div>
  );
}
