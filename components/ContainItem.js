import Image from 'next/image'
import {
  SearchIcon,
  FlagIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  MinusCircleIcon,
  ThumbUpIcon,
  ChatAltIcon,
  ShareIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
export default function ContainItem({ name, src, profile }) {
  return (
    <div className="relative bg-white mb-10  rounded-xl shadow-md">
      <div className="flex mb-2 items-center p-2">
        <div className="relative w-10 h-10 mr-2">
          <Image
            src={src}
            layout="fill"
            objectFit="cover"
            className="relative rounded-full"
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold">Soony Sangha</p>
          <p className="text-gray-400 font-semibold text-[11px] ">
            2021/2/3, 2021/4/3
          </p>
        </div>
      </div>
      <p className=" font-semibold text-[16px] ml-2 mb-2">
        Hey there is Papareact what's up !!
      </p>
      <div className="relative  h-56 md:w-[550px]  md:h-[550px] ">
        <Image src={src} layout="fill" objectFit="cover" className="relative" />
      </div>
      <div className="flex justify-evenly mt-3 pb-3">
        <div className="flex items-center">
          <ThumbUpIcon className="relative w-6 h-8 mr-2 text-gray-500" />
          <p className="text-gray-500 text-[14px]  md:text-[16px]">Like</p>
        </div>
        <div className="flex items-center">
          <ChatAltIcon className=" text-gray-500 relative w-6 h-8 mr-2 " />
          <p className=" text-gray-500  text-[14px]  md:text-[16px]">Comment</p>
        </div>
        <div className="flex items-center">
          <ShareIcon className=" text-gray-500 relative w-6 h-8 mr-2 " />

          <p className=" text-gray-500  text-[14px]  md:text-[16px]">Share</p>
        </div>
      </div>
    </div>
  );
}
