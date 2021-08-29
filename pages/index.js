import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import RightSideBar from "./RightSideBar";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div className="bg-gray-100  h-screen overflow-hidden">
      <Head>
        <title>Facebook cloning</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex justify-between">
        <section className="w-1/2 flex flex-col mt-5 ml-5">
          <SideBar />
        </section>
        <section className="ml-4   w-3/4">
          <Feed />
        </section>
        <section className=" mt-5   w-1/2 ml-24">
          <RightSideBar />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session: session,
    },
  };
}
