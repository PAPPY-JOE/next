"use client";

import img from "@/assets/m_plain.png";
import img2 from "@/assets/m_smile.png";
import Image from "next/image";

const GetStartedSlider = () => {
  const sliderImg = [
    {
      img: img,
    },
    {
      img: img2,
    },
  ];
  return (
    <div className="p-1 mb-10 flex">
      <div className="flex flex-col items-center justify-center">
        <span className="border border-white rounded-full px-5 py-5 m-2" />
        <span className="border border-white rounded-full px-5 py-5 m-2" />
      </div>
      <div className="flex overflow-x-scroll sm:overflow-x-hidden">
        <div className="flex">
          {sliderImg.map((item) => (
            <div className="relative m-2 overflow-hidden rounded-xl w-max h-[250px] flex items-end justify-center">
              <div className="bg-gradient-to-tr from-[#4c4e52] from-50% via-[#626468] via-15% to-[#3d3e41] to-80% absolute w-full t-0 h-full" />
              <div className="bg-gradient-to-br from-[#4c4e52] from-5% via-[#000302] via-25% to-transparent to-100% absolute w-full t-0 h-full" />
              <Image
                src={item.img}
                width={200}
                height={20}
                //   sizes="(max-width: 769px) 100vw, 33vw"
                alt="logo"
                className="z-50"
              />
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GetStartedSlider;
