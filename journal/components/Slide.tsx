"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Slide = ({ data, currentSlide, current, activeSlideRef }) => {
  return (
    <div className="relative flex flex-col items-center justify-center md:flex-row md:scale-90">
      <div className="relative flex flex-col overflow-hidden items-center justify-center md:flex-row md:max-h-[1300px]">
        <div className="flex items-center justify-center md:flex-col">
          {data.map((slide, index) => (
            <div
              key={index}
              className="flex flex-row w-max items-center justify-center"
            >
              {index === current ? (
                <div
                  className="flex md:flex-col-reverse "
                  onClick={() => currentSlide(index)}
                  ref={index === current ? activeSlideRef : null}
                >
                  <div
                    key={index}
                    className="relative m-2 md:m-1 overflow-hidden rounded-2xl min-w-[150px] max-w-[250px] min-h-[300px] max-h-[350px] md:min-w-[200px] md:max-w-[350px] md:min-h-[400px] md:max-h-[500px] flex items-end justify-center"
                  >
                    <div className="bg-gradient-to-tr from-[#4c4e52] from-50% via-[#626468] via-15% to-[#505155] to-80% absolute w-full t-0 h-full" />
                    <div className="bg-gradient-to-br from-[#91949b] from-5% via-[#3d484448] via-35% to-transparent to-70% absolute w-full t-0 h-full" />
                    <Image src={slide.img} alt="logo" className="z-50" />
                  </div>
                </div>
              ) : (
                <div
                  className="flex md:flex-col-reverse"
                  onClick={() => currentSlide(index)}
                  ref={index === current ? activeSlideRef : null}
                >
                  <div
                    key={index}
                    className="relative m-2 md:m-1 overflow-hidden rounded-2xl min-w-[150px] max-w-[250px] min-h-[300px] max-h-[350px] md:min-w-[200px] md:max-w-[350px] md:min-h-[400px] md:max-h-[500px] flex items-end justify-center"
                  >
                    <div className="bg-gradient-to-tr from-[#4c4e52] from-50% via-[#626468] via-15% to-[#505155] to-80% absolute w-full t-0 h-full" />
                    <div className="bg-gradient-to-br from-[#91949b] from-5% via-[#3d484448] via-35% to-transparent to-70% absolute w-full t-0 h-full" />
                    <Image src={slide.img} alt="logo" className="z-50" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
