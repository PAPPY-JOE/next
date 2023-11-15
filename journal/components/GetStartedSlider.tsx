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
    <div className="p-1 mb-10 flex md:flex-row-reverse">
      <div className="flex flex-col items-center justify-center">
        <span className="border border-white rounded-full p-5 md:p-7 m-2" />
        <span className="border border-white rounded-full p-5 md:p-7 m-2" />
      </div>
      <div className="flex overflow-x-scroll sm:overflow-x-hidden max-w-[80vw] md:mx-12">
        <div className="flex md:flex-col-reverse">
          {sliderImg.map((item, index) => (
            <div
              key={index}
              className="relative m-2 md:m-1 overflow-hidden rounded-xl min-w-[200px] max-w-[300px] min-h-[250px] max-h-[300px] flex items-end justify-center"
            >
              <div className="bg-gradient-to-tr from-[#4c4e52] from-50% via-[#626468] via-15% to-[#3d3e41] to-80% absolute w-full t-0 h-full" />
              <div className="bg-gradient-to-br from-[#4c4e52] from-5% via-[#000302] via-25% to-transparent to-100% absolute w-full t-0 h-full" />
              <Image src={item.img} alt="logo" className="z-50" />
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GetStartedSlider;
