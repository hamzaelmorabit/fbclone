import Image from "next/image";

function SideBarItem({ src_, Icon, title }) {
  return (
    <div className="flex  relative ">
      {src_ == "" ? (
        <div className="flex py-2 rounded-md md:w-52 hover:bg-gray-300  cursor-pointer items-center">
          <div className={"w-6 mr-4"}>
            <Icon className="text-blue-500" />
          </div>
          <p className="hidden text-sm  sm:inline-flex font-semibold">
            {title}
          </p>
        </div>
      ) : (
        <div className="relative flex items-center cursor-pointer ">
          <div className="relative w-10 h-10  ">
            <Image
              src={src_ || "https://links.papareact.com/5me"}
              // src={ "https://links.papareact.com/5me"}
              layout="fixed"
              className="relative rounded-full "
              width={33}
              height={33}
            />
          </div>
          <p className=" absolute  ml-[40px] whitespace-nowrap  hidden text-sm sm:inline-flex font-semibold items-center">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}

export default SideBarItem;
