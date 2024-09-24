import Head from "next/head";
import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fevicon.ico" />
      </Head>
      <main className=" bg-blue-900 w-full min-h-screen">
        <HeroSection />
      </main>
    </>
  )
}