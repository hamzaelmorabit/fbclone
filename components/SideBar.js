import SideBarItem from "./SideBarItem";
import React, { useState } from "react";

import {
  SearchIcon,
  FlagIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  MinusCircleIcon,
  ChatIcon,
  ViewGridIcon,
  ChevronDownIcon,
  BellIcon,
  ClockIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
import { CalendarIcon, UsersIcon } from "@heroicons/react/solid";
function SideBar() {
  const [session_, setSesstion] = useSession();
  const [isClickMore, setIsClickMore] = useState(false);

  return (
    <div
      className="sticky 
top-24 z-50"
    >
      <div className="space-y-2">
        <SideBarItem
          src_={session_.user.image}
          // src_={ "https://links.papareact.com/5me"}
          Icon={UserGroupIcon}
          title={session_.user.name}
        />
      </div>
      <div className="space-y-1  ">
        <SideBarItem src_="" Icon={UsersIcon} title={"Friends"} />
        <SideBarItem src_="" Icon={UserGroupIcon} title={"Group"} />
        <SideBarItem src_="" Icon={ShoppingCartIcon} title={"Marketplace"} />
        <SideBarItem src_="" Icon={DesktopComputerIcon} title={"Watch"} />
        <SideBarItem src_="" Icon={CalendarIcon} title={"Events"} />
        <SideBarItem src_="" Icon={ClockIcon} title={"Memories"} />
        <div onClick={() => setIsClickMore((prev) => !prev)}>
          <SideBarItem src_="" Icon={ChevronDownIcon} title={"See more"} />
        </div>
      </div>

      {isClickMore && (
        <div className="space-y-1   hover:scale-105  transition duration-700 ease-in-out transform">
          <SideBarItem src_="" Icon={UsersIcon} title={"Friends"} />

          <SideBarItem src_="" Icon={UserGroupIcon} title={"Group"} />
          <SideBarItem src_="" Icon={ShoppingCartIcon} title={"Marketplace"} />
        </div>
      )}
    </div>
  );
}

export default SideBar;
