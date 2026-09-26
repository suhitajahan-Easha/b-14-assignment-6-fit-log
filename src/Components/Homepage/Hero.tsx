import hero from "@/asset/banner.png";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
const Hero = () => {
  return (
    <div className="lg:my-20">
      
      <div className="m-4 flex flex-col items-center justify-between gap-8 rounded-xl bg-[#222630] px-5 py-8
               sm:m-6 sm:flex-row sm:gap-6 sm:px-8 sm:py-10 md:m-8 md:px-10 md:py-12 lg:m-10 lg:px-10 lg:py-15 lg:max-w-300 lg:mx-auto lg:container ">
        <div className="flex w-full flex-col items-start gap-4 sm:w-[55%] md:w-[58%] lg:w-auto">
          <h2 className="text-[10px] font-bold text-[#C2F800] sm:text-[11px]"> WORKOUT LIBRARY</h2>
          <h1 className="font-oswald font-bold leading-[1.05] text-white text-[32px] sm:text-[34px] md:text-[40px] lg:text-[45px]" >
            TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
          <p className=" max-w-full text-[11px] leading-5 text-[#9CA3AF] sm:max-w-90 md:max-w-105 lg:max-w-120  lg:text-[12px] ">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <a href="#library" className="bg-[#C2F800] px-5 py-2 text-[10px] font-medium text-black rounded-xl mt-3 
             transition-opacity hover:opacity-90 sm:text-[11px] flex items-center justify-center gap-2">
              BROWSE WORKOUTS <LuArrowRight className="text-sm" /> </a>
        </div>
        <div className="flex shrink-0 items-center justify-center">
          <Image src={hero} alt="hero" loading="eager" className="
          h-55 w-55 object-contain
          sm:h-55 sm:w-55
          md:h-70 md:w-70
          lg:h-83.5 lg:w-83.5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
