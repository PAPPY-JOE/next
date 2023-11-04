const GetStartedBtn = () => {
    return (
        <button className="overflow-hidden group bg-gradient-to-r from-[#4c4e52] from-10% to-[#000302] to-100% px-4 rounded-full text-xl flex items-center w-full max-w-[300px] relative h-14">
            <div className="bg-cyan-300 -px-4 -ml-4 w-14 h-14 rounded-full flex group-hover:w-full ease-out duration-300 items-center justify-center absolute">
                <span className="hidden group-hover:flex whitespace-nowrap delay-1000 duration-300">
                    Get started   > > >
                </span>                
                <span className="group-hover:hidden">{">"}</span>
            </div>{" "}
            <span className="ml-14 flex-1 text-left">
                 Get started   > > >
            </span>
      </button>
    )
}

export default GetStartedBtn