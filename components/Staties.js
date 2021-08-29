import { useSession } from "next-auth/client";
import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  MinusCircleIcon,
  ChatIcon,
  EmojiHappyIcon,
  CameraIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import { useRef, useState } from "react";
import firebase from "firebase";

function Staties() {
  const [session_, setSesstion] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imagePost, setImagePost] = useState();

  const submitSearch = (ev) => {
    ev.preventDefault();

    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        email: session_.user.email,
        name: session_.user.name,
        image: session_.user.image,
        timesTamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imagePost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imagePost, "data_url");
          removeImagePost();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts")
                    .doc(doc.id)
                    .set({ postImage: url }, { merge: true });
                });
            }
          );
        }
      });
    inputRef.current.value = "";
  };

  const addImagePost = (params) => {
    const reader = new FileReader();
    if (params.target.files[0]) {
      reader.readAsDataURL(params.target.files[0]);
    }
    reader.onload = (readerEvent) => setImagePost(readerEvent.target.result);
  };

  const removeImagePost = (params) => {
    setImagePost(null);
  };

  return (
    <div className="bg-white p-5 my-4 rounded-xl shadow-md">
      <div className="flex mb-2 items-center ">
        <div className="relative w-9 h-9 mr-2 ">
          <Image
            // src="https://links.papareact.com/qd3"
            src={session_.user.image || "https://links.papareact.com/5me"}
            // src={"https://links.papareact.com/5me"}
            layout="fill"
            className="relative rounded-full"
          />
        </div>
        <form className=" flex flex-1">
          <input
            ref={inputRef}
            type="text"
            placeholder={`What's on your mind, ${session_.user.name} ?`}
            className="bg-gray-100 outline-none rounded-full p-2
            w-3/4  md:w-full md:pl-3 text-[10px]  md:text-[16px] pl-1
            "
          />
          <button hidden onClick={submitSearch}>
            Submit
          </button>
        </form>
        {imagePost && (
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative w-9 h-9 md:w-12 md:h-12  mr-2 ml-2 rounded-full ">
              <Image
                className="relative rounded-full"
                layout="fill"
                objectFit="cover"
                src={imagePost}
                // src={"https://links.papareact.com/5me"}
              />
            </div>
            <p
              onClick={removeImagePost}
              className="text-red-500 text-xs md:text-base font-bold cursor-pointer"
            >
              Remove
            </p>
          </div>
        )}
      </div>
      <div className="border-b w-full my-3" />
      <div className="flex justify-evenly ">
        <div className="flex items-center p-2 rounded-xl hover:bg-gray-100 space-x-1 cursor-pointer">
          <VideoCameraIcon className="relative w-7 h-7 mr-2 text-red-500 md:w-9" />
          <p className="hidden md:inline-flex">Live video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="flex items-center cursor-pointer  p-2 rounded-xl hover:bg-gray-100 space-x-1"
        >
          <CameraIcon className="relative w-7 h-7 mr-2 text-green-500 md:w-9" />
          <p className="hidden md:inline-flex">Photo/video</p>
          <input
            type="file"
            ref={filePickerRef}
            hidden
            onChange={addImagePost}
          />
        </div>
        <div className="flex items-center p-2 rounded-xl hover:bg-gray-100 space-x-1 cursor-pointer">
          <EmojiHappyIcon className="relative w-7 h-7 mr-2 text-yellow-400 md:w-9" />

          <p className="hidden md:inline-flex">Felling Acivity</p>
        </div>
      </div>
    </div>
  );
}

export default Staties;
