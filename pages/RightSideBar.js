
import {
  SearchIcon,
  FlagIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  MinusCircleIcon,
  ThumbUpIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import RightSideBarItem from "../components/RightSideBarItem";
export default function RightSideBar() {
  return (
    <div
      className=" flex-col  mx-auto hidden lg:flex w-60
"
    >
      <div className="flex justify-between ">
        <h1 className="text-xl text-black">Contacts</h1>
        <div className="flex space-x-2">
          <VideoCameraIcon className="relative w-6 h-8 mr-2 text-gray-500 " />
          <SearchIcon className="relative w-6 h-8 mr-2 text-gray-500 " />
          <DotsHorizontalIcon className="relative w-6 h-8 mr-2 text-gray-500 " />
        </div>
      </div>
      <div className="space-y-3 mt-5 ">
        {STORIES.map(({ name, src, profile }) => (
          <RightSideBarItem key={src} name={name} src={src} profile={profile} />
        ))}
      </div>
    </div>
  );
}

const STORIES = [
  {
    name: "Hamza EL MORABIT",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jaff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberh",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Hamza EL MORABIT",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
];