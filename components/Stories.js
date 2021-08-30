import StoriesItem from "./StoriesItem";

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
];

export default function Stories() {

  return (
    <div className="flex md:space-x-6 mt-3    justify-center">
     {STORIES.map(({ name, src, profile }) => (
        <StoriesItem key={src} name={name} src={src} profile={profile} />
      ))} 
  
    </div>
  );
}
