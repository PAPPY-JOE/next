"use client";
import { useState } from "react";
import img from "@/assets/mood-transparent-white.png";
import Image from "next/image";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center fixed t-0 z-50 backdrop-blur-sm">
      <div className="w-full flex justify-between items-center px-8 py-3">
        <div className="-ml-6 overflow-hidden flex justify-center w-32 h-10 items-center">
          <Image
            src={img}
            width={200}
            height={20}
            sizes="(max-width: 769px) 100vw, 33vw"
            alt="logo"
          />
        </div>
        <div
          className={`w-full flex items-center justify-center text-xs md:text-sm font-bold font-jSans ${
            open
              ? "w-screen h-screen absolute top-0 flex flex-col -mx-8 md:relative md:w-full md:flex-row md:h-max md:mx-0"
              : "hidden md:flex"
          }`}
        >
          <div
            className={`mr-auto flex items-center ${
              open && "flex-col mx-auto md:flex-row md:mr-auto md:ml-0"
            }`}
          >
            <p className="px-4 mx-4 cursor-pointer ease-in-out duration-150 py-1 border-b-2 border-transparent hover:border-white">
              About
            </p>
            <p
              className={`px-4 mx-4 cursor-pointer ease-in-out duration-300 py-1 border-t-2 border-transparent hover:border-white ${
                open && "my-10 md:my-0"
              }`}
            >
              My Mood
            </p>
          </div>
          <p className="bg-[#4c4e52] w-max uppercase rounded-full px-8 py-2 md:py-1 cursor-pointer hover:bg-gradient-to-r from-cyan-400 to-cyan-600 ease-in-out duration-150">
            Sign Up
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex group flex-col items-end justify-center cursor-pointer md:hidden"
        >
          <p className="p-0.5 rounded-full w-10 bg-cyan-300 mb-1"></p>
          <p className="p-0.5 rounded-full w-6 group-hover:w-8 ease-in-out duration-300 bg-white"></p>
        </div>
      </div>

      <div
        className={`bg-gradient-to-tr from-[#4c4e52] from-15% to-[#000302] to-70% ${
          open ? "" : "hidden"
        } w-full h-screen justify-center -mt-[63px] duration-300 ease-in-out md:hidden`}
      >
        <div className="w-full px-8 mt-5 flex justify-end">
          <div style={{ zIndex: 5 }} onClick={() => setOpen(!open)}>
            <MdClose size={45} className="text-cyan-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
