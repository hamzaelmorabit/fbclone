import SideBarItem from "./SideBarItem";
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
} from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
function SideBar() {
  const [session_, setSesstion] = useSession();
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
      <div className="space-y-5 ">
        <SideBarItem src_="" Icon={UserGroupIcon} title={"Friends"} />
        <SideBarItem src_="" Icon={MinusCircleIcon} title={"MinusCircleIcon"} />
        <SideBarItem src_="" Icon={ChatIcon} title={"ChatIcon"} />
        <SideBarItem src_="" Icon={ViewGridIcon} title={"Friends"} />
        <SideBarItem src_="" Icon={BellIcon} title={"ChevronDownIcon"} />
        <SideBarItem src_="" Icon={SearchIcon} title={"SearchIcon"} />
        <SideBarItem src_="" Icon={ChevronDownIcon} title={"BellIcon"} />
      </div>
    </div>
  );
}

export default SideBar;
