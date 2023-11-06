import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";

const GetStartedBtn = () => {
  return (
    <button className="overflow-hidden group bg-gradient-to-r from-[#4c4e52] from-10% to-[#000302] to-100% px-4 rounded-full text-lg flex items-center w-full max-w-[300px] relative h-14 font-jSans font-bold">
      <div className="bg-cyan-300 -px-4 -ml-4 w-14 h-14 rounded-full flex group-hover:w-full ease-out duration-300 items-center justify-center absolute">
        <span className="hidden group-hover:flex whitespace-nowrap delay-1000 duration-300">
          <span className="mr-2 text-cyan-900"> Get started </span>
          <FaChevronRight size={25} className="text-cyan-500" />
          <FaChevronRight size={25} className="text-cyan-700" />
          <FaChevronRight size={25} className="text-cyan-900" />{" "}
        </span>
        <span className="group-hover:hidden">
          <FaArrowRightLong size={25} />
        </span>
      </div>{" "}
      <span className="ml-14 flex-1 text-left flex items-center">
        <span className="mr-2"> Get started </span>
        <FaChevronRight size={25} className="text-cyan-900" />
        <FaChevronRight size={25} className="text-cyan-600" />
        <FaChevronRight size={25} className="text-cyan-400" />
      </span>
    </button>
  );
};

export default GetStartedBtn;
