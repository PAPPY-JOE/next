import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { GetStartedBtn, GetStartedSlider, Header } from "@/components";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <div className="w-screen min-h-screen bg-[#040406] flex flex-col items-center text-white relative">
      <div className="bg-gradient-to-br from-[#4c4e52] from-5% via-[#000302] via-25% to-[#040406] to-100% absolute w-full t-0 h-full" />
      <div className="bg-gradient-to-tl from-[#4c4e52] from-1% via-transparent via-25% to-transparent to-100% absolute w-full b-0 h-full flex-1" />
      <div className="bg-gradient-to-tr from-transparent from-50% via-[#4c4e52] via-15% to-transparent to-80% absolute w-full b-0 h-full flex-1" />
      <Header />

      <div className="absolute z-0 mr-auto flex-1 w-[200px] h-[85vh] md:h-full left-0 top-0 flex items-end justify-end  md:w-full md:justify-start overflow-hidden">
        <p className="font-cVintage font-bold text-[150px] md:text-[200px] rotate-90 text-right opacity-5 md:rotate-0 md:translate-y-12 ">
          MOOD
        </p>
      </div>

      <div className="absolute z-0 mr-auto flex-1 w-[200px] h-[85vh] md:h-full right-0 top-0 flex items-end justify-end md:justify-center md:items-center">
        <p className="font-cVintage font-bold text-[150px] md:text-[200px] -mr-28 text-right opacity-10 md:mt-64 md:mr-0">
          V2
        </p>
      </div>

      <div className="md:w-max mx-auto mt-20 h-full z-20 px-2 text-center md:text-left flex flex-col items-center md:flex-row-reverse md:my-auto md:px-4 xl:scale-110">
        <GetStartedSlider />
        <div className="flex-1 md:max-w-[405px]">
          <h1 className="text-4xl md:text-5xl mb-6 font-bold font-mont">
            The best journal app period.
          </h1>
          <p className="text-sm md:text-lg text-white/60 font-light">
            This is the best app for tracking your mood throughout your life.{" "}
            <br />
            All you have to do is be honest!
          </p>
          <div className="w-full flex items-center justify-center my-12">
            <Link
              // href={href}
              href={"/"}
              className="w-full flex items-center justify-center md:justify-start"
            >
              <GetStartedBtn />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-0 w-full p-2 h-20 overflow-hidden items-center justify-center bg-cyan-400">
        <div className="flex w-full h-56 items-center justify-around relative">
          <span className="absolute border-2 border-white rounded-full p-24 m-2 animate-roundTheWorld" />
          <span className="absolute border-2 border-white rounded-full p-24 m-2 animate-roundTheWorldie" />
        </div>
      </div>
    </div>
  );
}
