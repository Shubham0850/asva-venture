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
        <title>Asva Ventures | We are backing visionary founders Build on next-generation internet</title>
        <meta
          name="description"
          content="We are backing visionary founders Build on next-generation internet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/asva.png" />
      </Head>
      
      <Hero/>
      <RecentPosts/>
      <RecentResearch/>
      <RecentAnnouncement/>
      <RecentAma/>
      <ReachOut/>
      <Subscribe/>
    </>
  );
}
