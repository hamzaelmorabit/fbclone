import Image from "next/image";

function SideBarItem({ src_, Icon, title }) {
  return (
    <div className="flex space-x-2 relative">
      {src_ == "" ? (
        <>
          <div className={"w-6"}>
            <Icon className="text-blue-500" />
          </div>
          <p className="hidden text-sm  sm:inline-flex font-semibold">
            {title}
          </p>
        </>
      ) : (
        <div className="relative flex">
          <div className="relative w-10 h-10">
            <Image
              src={src_ || "https://links.papareact.com/5me"}
              // src={ "https://links.papareact.com/5me"}
              layout="fixed"
              className="relative rounded-full"
              width={25}
              height={25}
            />
          </div>
          <p className="absolute whitespace-nowrap ml-8 hidden text-sm sm:inline-flex font-semibold items-center justify-center">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}

export default SideBarItem;
