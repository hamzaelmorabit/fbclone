import Image from "next/image";
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
export default function ContainItem({
  name,
  src,
  email,
  message,
  image,
  postImage,
  timesTamp,
  loading,
}) {
  console.log(postImage);
  console.log(loading);
  return (
    <div className="relative bg-white mb-10  rounded-xl shadow-md">
      <div className="flex mb-2 items-center p-2">
        <div className="relative w-10 h-10 mr-2">
          <img
            src={image}
            layout="fill"
            objectFit="cover"
            className="relative rounded-full"
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 font-semibold text-[11px] ">
            {new Date(timesTamp?.toDate()).toLocaleString()}
          </p>
        </div>
      </div>
      <p className=" font-semibold text-[16px] ml-2 mb-2">{message}</p>
      {postImage && (
        <div
          // md:h-[550px]md:w-[550px]
          className={`relative   md:w-[569px]   `}
          // ${
          //   !postImage && "flex justify-center items-center"
          // }
        >
          <img
            // src={"https://links.papareact.com/5me"}

            src={postImage}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      {/* {!postImage && (
          <img
            // src={"https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"}
            src={
              "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
            }
            layout="fill"
            objectFit="cover"
            className="relative items-center justify-center"
          />
        )} */}

      <div className="flex justify-center border-gray-300 border-t  pt-0  ">
        <div
          className="flex items-center  sm:py-1   sm:px-14
      py-1   px-8  hover:bg-gray-300 rounded-bl-lg"
        >
          <ThumbUpIcon className="relative sm:w-6 sm:h-8 mr-2 w-5 text-gray-500 " />
          <p className="text-gray-500 text-[14px]  md:text-[16px]">Like</p>
        </div>
        <div className="flex items-center  sm:px-14 px-12 hover:bg-gray-300 ">
          <ChatAltIcon className=" text-gray-500 relative sm:w-6 sm:h-8 w-5 mr-2 " />
          <p className=" text-gray-500  text-[14px]  md:text-[16px]">Comment</p>
        </div>
        <div className="flex items-center  sm:px-14  px-8 hover:bg-gray-300 rounded-br-lg">
          <ShareIcon className=" text-gray-500 relative sm:w-6 md:h-8 w-5 mr-2 " />

          <p className=" text-gray-500  text-[14px]  md:text-[16px]">Share</p>
        </div>
      </div>
    </div>
  );
}
