import Contain from "./Contain";
import Staties from "./Staties";
import Stories from "./Stories";

export default function Feed() {
  return (
    <div className="overflow-auto h-screen scrollbar-hide">
      <Stories />
      <Staties />
      <Contain />
    </div>
  );
}
