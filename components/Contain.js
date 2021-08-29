import ContainItem from "./ContainItem.js";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Contain() {
  const [realtimePosts, error, loading] = useCollection(
    db.collection("posts").orderBy("timesTamp", "desc")
  );
  console.log(loading, "loading");
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <ContainItem
          key={post.id}
          name={post.data().name}
          src={post.data().src}
          email={post.data().email}
          message={post.data().message}
          image={post.data().image}
          postImage={post.data().postImage}
          timesTamp={post.data().timesTamp}
          loading={loading}
        />
      ))}
    </div>
  );
}

export default Contain;
