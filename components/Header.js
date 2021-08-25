import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  ShoppingCartIcon,
  MinusCircleIcon,
  ChatIcon,
  ViewGridIcon,
  ChevronDownIcon,
  BellIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
function Header() {
  const [sesstion, setSesstion] = useSession();
  return (
    <div className="flex justify-between bg-white p-4   shadow-md top-0 z-50">
      {/* Left*/}

      <div className="flex space-x-2">
        <div className="relative w-10 h-10 ">
          <Image
            // src="https://links.papareact.com/qd3"
            src="https://links.papareact.com/5me"
            // layout="fill"
            layout="fixed"
            className="relative"
            width={40}
            height={40}
          />
        </div>
        <div
          className="items-center border-2 border-gray-100 rounded-full bg-gray-100
            h-10
        hidden sm:inline-flex 
        "
        >
          <SearchIcon className=" w-7 h-7 mx-2" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-gray-100 outline-none rounded-full
             md:inline-flex hidden
            "
          />
        </div>
      </div>

      {/* Center */}
      <div
        className="flex items-center  justify-center
                    flex-grow
                    space-x-4
                    sm:space-x-10
                    xl:space-x-17
                    cursor-pointer
                    md:px-15

      "
      >
        <HomeIcon
          className={`
      hover:bg-gray-200 rounded-md  py-1
         w-10 h-10 ${true && "text-blue-500"}`}
        />
        <FlagIcon className="Icon" />
        <MinusCircleIcon className="Icon" />
        <ShoppingCartIcon className="Icon" />

        <UserGroupIcon className="Icon" />
      </div>

      {/* Right */}
      <div className="flex space-x-3  items-center">
        <div className=" flex space-x-1 ml-5">
          <div className="relative w-9 h-9">
            <Image
              // src="https://links.papareact.com/qd3"
              src={sesstion.user.image}
              layout="fill"
              className="relative rounded-full"
            />
          </div>
          <p className="whitespace-nowrap  text-sm items-center  md:inline-flex hidden mr-3">
            {sesstion.user.name}
          </p>
        </div>
        <div className=" space-x-3 hidden lg:inline-flex ">
          <ChatIcon className="hover:bg-gray-300  bg-gray-100 rounded-full p-1 w-8 h-8" />
          <ViewGridIcon className="hover:bg-gray-300  bg-gray-100 rounded-full p-1 w-8 h-8" />
          <BellIcon className="hover:bg-gray-300  bg-gray-100 rounded-full p-1 w-8 h-8" />
          <ChevronDownIcon className="cursor-pointer hover:bg-gray-300 bg-gray-100  rounded-full p-1 w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Header;
