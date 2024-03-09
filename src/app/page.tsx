"use client"
//Libs
import Head from "next/head";
import { Limelight, Happy_Monkey } from "next/font/google"
//Local
import DesktopNav from "@/components/DesktopNav";

const limelight = Limelight({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-limelight",
});

const happyMonkey = Happy_Monkey({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-happy-monkey",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-800 w-full">
      <Head>
        <title>{"Havana Brown Fanciers - Home"}</title>
        <meta name="description" content={"Havana Brown Fanciers"} />
      </Head>
      {/* Inject fonts globally */}
      <style jsx global>
        {`
          :root {
            --font-limelight: ${limelight.style.fontFamily};
            --font-happy-monkey: ${happyMonkey.style.fontFamily};
          }
        `}
      </style>
      <div className="flex flex-col w-full max-h-screen">
        <div className="relative w-full overflow-hidden flex items-center">
          <picture>
            <img
              src="/khaleesi.webp"
              alt="Khaleesi, Havana Brown Cat on green background"
            />
          </picture>
          <div className="absolute left-10 bottom-40 max-w-[500px] h-fit flex flex-col gap-4 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
            <h1 className="font-limelight font-bold text-6xl ">
              Havana Brown
            </h1>
            <p className="font-happyMonkey">
              The phrase “Chocolate Delights” is often used by Havana Brown enthusiasts to describe this charming chocolate brown cat with the mesmerizing green eyes. They are alert, intelligent, affectionate and occasionally exhibit a mischievious personality. A breed for the true cat connoisseur, many say that once you have been “owned” by a Havana Brown, no other breed will do.
            </p>
          </div>
        </div>
        <DesktopNav />
      </div>
    </main>
  );
}
