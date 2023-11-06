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

      <div className="absolute z-0 mr-auto flex-1 w-[200px] h-full left-0 bottom-0 flex items-end justify-end overflow-y-hidden md:w-full md:justify-start md:items-end">
        <p className="font-jost font-bold text-[100px] rotate-90 text-right opacity-5 md:rotate-0 md:-mb-10">
          MOOD
        </p>
      </div>

      <div className="absolute z-0 mr-auto flex-1 w-[200px] h-full right-0 bottom-0 flex items-end justify-end md:justify-center md:items-center">
        <p className="font-jost font-bold text-[100px] text-right opacity-5 -mr-12 md:mt-64 md:mr-0">
          V2
        </p>
      </div>

      <div className="md:w-max mx-auto mt-20 h-full z-20 px-3 text-center md:text-left flex flex-col items-center md:flex-row-reverse md:my-auto md:px-4 xl:scale-110">
        <GetStartedSlider />
        <div className="flex-1 md:max-w-[405px]">
          <h1 className="text-4xl md:text-5xl mb-6 font-bold font-jSans">
            The best journal app period.
          </h1>
          <p className="text-sm md:text-lg text-white/60">
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
    </div>
  );
}
