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
        className={`relative  h-56 md:w-[550px]  md:h-[550px] ${
          !postImage && "flex justify-center items-center"
        }`}
      >
   
          <img
            // src={"https://links.papareact.com/5me"}

            src={postImage}
            layout="fill"
            objectFit="cover"
            className="relative"
          />
    </div> )}
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
 
      <div className="flex justify-evenly mt-3 py-2 border-t">
        <div className="flex items-center">
          <ThumbUpIcon className="relative w-6 h-8 mr-2 text-gray-500 bg-white" />
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
