import hero from "@/asset/banner.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="lg:my-20">
      
      <div className="m-4 flex flex-col items-center justify-between gap-8 rounded-xl bg-[#222630] px-5 py-8
               sm:m-6 sm:flex-row sm:gap-6 sm:px-8 sm:py-10 md:m-8 md:px-10 md:py-12 lg:m-10 lg:px-10 lg:py-15 lg:max-w-300 lg:mx-auto lg:container ">
        <div className="flex w-full flex-col items-start gap-4 sm:w-[55%] md:w-[58%] lg:w-auto">
          <p className="text-[10px] font-bold text-[#C2F800] sm:text-[11px]"> WORKOUT LIBRARY</p>
          <p className="font-oswald font-bold leading-[1.05] text-white text-[32px] sm:text-[34px] md:text-[40px] lg:text-[45px]" >
            TRAIN WITH INTENT. LOG <br /> EVERY SET.</p>
          <p className=" max-w-full text-[11px] leading-5 text-[#9CA3AF] sm:max-w-90 md:max-w-105 lg:max-w-120  lg:text-[12px] ">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <a href="#library" className="bg-[#C2F800] px-5 py-2 text-[10px] font-medium text-black rounded-sm transition-opacity hover:opacity-90 sm:text-[11px]">
              BROWSE WORKOUTS </a>
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

    // <div>
    //
    //
    //     <div className="bg-[#222630] flex justify-between items-center m-10 px-20 py-15 rounded-xl">
    //         <div className='flex flex-col gap-4 items-start '>
    //             <p className='font-bold text-[11px] text-[#C2F800]'>WORKOUT LIBRARY</p>
    //             <p className='w-139.5 text-[45px] text-white font-bold font-oswald leading-12'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</p>
    //             <p className='w-120.25 h-12 text-[12px] text-[#9CA3AF] '>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
    //             <button className='bg-[#C2F800] px-5 py-2 text-[11px] text-black rounded-sm '>BROWSE WORKOUTS</button>
    //         </div>
    //         <Image src={hero} alt='hero' className='w-83.5 h-83.5'></Image>
    //     </div>
    // </div>
  );
};

export default Hero;
