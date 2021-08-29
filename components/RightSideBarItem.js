import Image from "next/image";

export default function RightSideBarItem({ name, src, profile }) {
  return (
    <div className="relative flex items-center hover:bg-gray-200 rounded-md w-3/4">
      <div className="relative w-10 h-10">
        <Image
          src={src || "https://links.papareact.com/5me"}
          // src={ "https://links.papareact.com/5me"}
          layout="fixed"
          className="relative rounded-full"
          width={40}
          height={40}
        />
        <div className="absolute w-2 h-2 bg-green-500 rounded-full top-8 left-7" />
      </div>
      <p className="flex absolute  ml-12 whitespace-nowrap  text-sm sm:inline-flex font-semibold items-center">
        {name}
      </p>
    </div>
  );
}
