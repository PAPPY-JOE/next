import { auth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/mood-transparent-white.png";
import { GetStartedBtn, GetStartedSlider } from "@/components";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <div className="w-screen bg-[#040406] flex flex-col items-center text-white relative">
      <div className="bg-gradient-to-br from-[#4c4e52] from-5% via-[#000302] via-25% to-[#040406] to-100% absolute w-full t-0 h-full" />
      <div className="bg-gradient-to-tl from-[#4c4e52] from-1% via-transparent via-25% to-transparent to-100% absolute w-full b-0 h-full flex-1" />
      <div className="bg-gradient-to-tr from-transparent from-50% via-[#4c4e52] via-15% to-transparent to-80% absolute w-full b-0 h-full flex-1" />
      <div className="w-full flex items-center justify-between px-8 py-3 absolute">
        <div className="-ml-6 overflow-hidden flex justify-center w-32 h-10 items-center">
          <Image
            src={img}
            width={200}
            height={20}
            sizes="(max-width: 769px) 100vw, 33vw"
            alt="logo"
          />
        </div>
        <div className="flex group flex-col items-end justify-center cursor-pointer">
          <p className="p-0.5 rounded-full w-10 bg-cyan-300 mb-1"></p>
          <p className="p-0.5 rounded-full w-6 group-hover:w-8 ease-in-out duration-300 bg-white"></p>
        </div>
      </div>

      <div className="w-full max-w-[600px] mx-auto mt-20 h-[800px] z-50 px-4 text-center">
        <GetStartedSlider />
        <h1 className="text-5xl mb-4">The best jornal app period.</h1>
        <p className="text-lg text-white/60 mb-4 ">
          This is the best app for tracking your mood throughout your life.{" "}
          <br />
          All you have to do is be honest!
        </p>
        <div className="w-full flex items-center justify-center mt-6">
          <Link href={href} className="w-full flex items-center justify-center">
            <GetStartedBtn />
          </Link>
        </div>
      </div>
    </div>
  );
}
