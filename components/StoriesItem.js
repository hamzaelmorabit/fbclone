import Image from "next/image";

function StoriesItem({ name, src, profile }) {
    return (
      <div
        className="relative hover:scale-105 transform transition
      duration-200 hover:opacity-75 w-20
    
      "
      >
        <div
          className="flex relative  md:absolute md:z-50 md:ml-1 md:mt-1     
     
        "
        >
          <Image
            src={profile}
            // src={"https://links.papareact.com/5me"}
            layout="fixed"
            width={40}
            height={40}
            className="rounded-full "
          />
        </div>
        <div className="relative hidden md:inline-flex">
          <Image
            src={src}
            // src={"https://links.papareact.com/5me"}
            layout="fixed"
            width={100}
            objectFit="cover"
            height={170}
            className="rounded-xl"
          />
        </div>
        <p className="absolute text-white ml-1 font-semibold text-[10px] whitespace-nowrap top-3/4 hidden xl:inline-flex">
          {name}
        </p>
      </div>
    );
}

export default StoriesItem;
