import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NewsAndAnnouncements from "./components/NewsAndAnnouncements";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fevicon.ico" />
      </Head>
      <main className=" bg-blue-900 w-screen min-h-screen">
        <HeroSection />
        <NewsAndAnnouncements />
      </main>
    </>
  )
}