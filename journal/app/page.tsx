import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { GetStartedBtn, GetStartedSlider, Header } from "@/components";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <div className="w-screen min-h-screen bg-[#040406] flex flex-col items-center text-white relative md:overflow-hidden md:items-start">
      <div className="bg-gradient-to-br from-[#4c4e52] from-5% via-[#000302] via-25% to-[#040406] to-100% absolute w-full t-0 h-full" />
      <div className="bg-gradient-to-tl from-[#4c4e52] from-1% via-transparent via-25% to-transparent to-100% absolute w-full b-0 h-full flex-1" />
      <div className="bg-gradient-to-tr from-transparent from-50% via-[#4c4e52] via-15% to-transparent to-80% absolute w-full b-0 h-full flex-1" />
      <Header />

      <div className="absolute z-0 mr-auto flex-1 w-[200px] h-[85vh] md:h-full left-0 top-0 flex items-end justify-end  md:w-full md:justify-start md:overflow-hidden">
        <p className="font-cVintage font-bold text-[150px] md:text-[200px] rotate-90 text-right opacity-5 md:rotate-0 md:translate-y-12 ">
          MOOD
        </p>
      </div>

      <div className="absolute z-0 mr-auto flex-1 w-[200px] h-[85vh] md:h-full right-0 top-0 flex items-end justify-end md:justify-center md:items-center">
        <p className="font-cVintage font-bold text-[150px] md:text-[200px] -mr-28 text-right opacity-10 md:mt-64 md:mr-0">
          V2
        </p>
      </div>

      <div className="md:hidden flex overflow-hidden flex-col items-center justify-center h-full min-h-screen w-screen absolute t-0 l-0">
        <span className="absolute top-3/4 -left-6 border border-white rounded-full p-6 md:p-7 m-2" />
        <span className="absolute top-3/4 -right-6 border border-white rounded-full p-6 md:p-7 m-2" />
        <span className="absolute -bottom-10 left-auto right-auto border border-white rounded-full w-6/12 p-8 md:p-7 m-2" />
      </div>

      <div className="md:w-max mx-auto mt-20 h-full z-20 text-center md:text-left flex flex-col items-center md:flex-row-reverse my-auto md:mt-0 md:px-4 flex-wrap">
        <GetStartedSlider />
        <div className="flex-1 md:max-w-[405px] flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl mb-6 font-bold font-mont max-w-[90vw] sm:max-w-max">
            The best journal app{" "}
            <span className="whitespace-nowrap">
              p
              <span className="inline-flex flex-col w-max">
                eriod. <i className="bg-white h-1.5 -mt-1 w-full" />
              </span>
            </span>
          </h1>
          <p className="text-sm md:text-lg text-white/60 max-w-[80vw]">
            This is the best app for tracking your mood throughout your life.{" "}
            <br />
            All you have to do is be honest!
          </p>
          <div className="w-full flex items-center justify-center my-12">
            <Link
              // href={href}
              href={"/"}
              className="w-full flex items-center justify-center md:justify-start max-w-[90vw] sm:max-w-max"
            >
              <GetStartedBtn />
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-0 w-full p-2 h-[6%] overflow-hidden items-center justify-center bg-cyan-400 z-50">
        <div className="flex w-full h-56 items-center justify-around relative">
          <span className="absolute border-2 border-white rounded-full p-24 m-2 animate-roundTheWorld" />
          <span className="absolute border-2 border-white rounded-full p-24 m-2 animate-roundTheWorldie" />
        </div>
      </div>
    </div>
  );
}
