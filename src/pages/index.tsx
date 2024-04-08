import Funds from "@/components/home/Funds";
import Hero from "@/components/home/Hero";
import ReachOut from "@/components/home/ReachOut";
import RecentAma from "@/components/home/RecentAma";
import RecentAnnouncement from "@/components/home/RecentAnnouncement";
import RecentPosts from "@/components/home/RecentPosts";
import RecentResearch from "@/components/home/RecentResearch";
import Subscribe from "@/components/home/Subscribe";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          A thesis-driven Web3 fund backing ambitious founders shaping the next
          iteration of the Internet | Asva Capital
        </title>
        <meta
          name="description"
          content="A thesis-driven Web3 fund backing ambitious founders shaping the next
          iteration of the Internet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/asva.png" />
      </Head>

      <Hero />
      <Funds/>
      <RecentPosts />
      <RecentResearch />
      <RecentAnnouncement />
      <RecentAma />
      <ReachOut />
      <Subscribe />
    </>
  );
}
