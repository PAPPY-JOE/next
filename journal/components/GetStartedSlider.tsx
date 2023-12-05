"use client";

import React, { useState, useRef, useEffect } from "react";

import img from "@/assets/m_laugh_shadow.png";
import img2 from "@/assets/m_plain_shadow.png";
import img3 from "@/assets/m_smile_shadow.png";
import Image from "next/image";
import Slide from "./Slide";

const GetStartedSlider = () => {
  const sliderImg = [
    {
      img: img,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  const [current, setCurrent] = useState(0);
  const data = sliderImg.map((i) => i);
  const slideCount = data.length;
  const timeout = useRef(null);
  const activeSlideRef = useRef(null);

  const currentSlide = (index) => {
    setCurrent(index);
  };

  // Use useEffect to scroll the active slide into view when it changes
  useEffect(() => {
    if (activeSlideRef.current) {
      activeSlideRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [current]);

  useEffect(() => {
    const nextSlide = () => {
      const nextIndex = (current + 1) % slideCount;
      currentSlide(nextIndex);
    };

    timeout.current = setTimeout(nextSlide, 2500);
  }, [slideCount, current]);

  return (
    <div className="p-1 mb-10 flex md:flex-row-reverse flex-col md:mb-0 md:py-0 items-center justify-center md:block relative md:h-screen md:min-w-[350px] md:overflow-y-hidden md:overflow-x-visible ">
      <div className="flex flex-col items-center max-w-[95vw] justify-center overflow-hidden">
        <div className="w-[1300px] flex items-center justify-end md:justify-center md:w-max md:max-w-[95vw] md:overflow-hidden">
          <Slide
            data={sliderImg}
            current={current}
            currentSlide={currentSlide}
            activeSlideRef={activeSlideRef}
          />
        </div>
      </div>
      <div className="flex bottom-0 right-auto left-auto z-30  min-w-[150px] max-w-[200px]">
        {data.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-1 rounded full md:hidden  ${
              current === index ? "bg-cyan-300 w-full" : "bg-gray-500"
            } cursor-pointer mx-0.5 mt-5`}
            onClick={() => currentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GetStartedSlider;
