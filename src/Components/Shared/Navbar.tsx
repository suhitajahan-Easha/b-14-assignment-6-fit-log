"use client";
import Image from "next/image";
import logo from "@/asset/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <nav className="flex items-center justify-between gap-2 border-b border-[#9CA3AF] px-3 py-3 text-[#9CA3AF] sm:px-5 sm:py-4 md:px-7 lg:px-10 lg:py-5">
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Image
            src={logo}
            alt="logo"
            className="h-4.5 w-4.5 sm:h-5 sm:w-5 lg:h-5.5 lg:w-5.5"
          />
          <h1 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[18px]">
            FITLOG
          </h1>
        </div>
        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 lg:gap-3">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[12px] transition-colors sm:px-5 sm:text-[13px] lg:px-5 lg:py-2 lg:text-base ${
              pathname === "/"
                ? "bg-[#17230F] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-[12px] transition-colors sm:px-5 sm:text-[13px] lg:px-5 lg:py-2 lg:text-base ${
              pathname === "/my-plan"
                ? "bg-[#17230F] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            My Plan
          </Link>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 text-[11px] sm:gap-2 sm:text-xs lg:gap-3 lg:text-base">
          <Link href="/my-plan" className="flex items-center gap-1 sm:gap-2">
               <span>Plan</span>
               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[11px] font-bold text-black sm:h-6 sm:w-6 sm:text-xs">
                 0
               </span>
             
          </Link>
          <Link href="/my-plan"  className="flex items-center gap-1 sm:gap-2">
              
                <span>Saved</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border text-[11px] font-bold sm:h-6 sm:w-6 sm:text-xs">
                  0
                </span>
              
          </Link>
        </div>
      </nav>
    </div>

    // <div>
    //     <nav className='flex justify-between items-center gap-3 px-10 py-5 text-[#9CA3AF] border-b border-[#9CA3AF]'>
    //         <div className='flex justify-center items-center gap-2 '>
    //            <Image src={logo} alt='logo' className='w-[22px] h-[22px]'></Image>
    //            <h1 className='text-[#FFFFFF] text-[18px] font-bold '>FITLOG</h1>
    //         </div>

    //         <div className='flex justify-between gap-3 items-center'>
    //             <Link href="/" className={pathname==='/'?'text-[#C2F800] rounded-sm px-3':''}>Workout</Link>
    //             <Link href="/my-plan" className={pathname==='/my-plan'?'text-[#C2F800] rounded-sm px-3':''}>My Plan</Link>
    //         </div>
    //         <div className='flex justify-center gap-2'>
    //             <button className='flex justify-between gap-3'>Plan <span className='flex items-center justify-center w-6 h-6  rounded-full text-sm text-bold  bg-[#ccff00] text-black'>0</span></button>
    //             <button className='flex justify-between gap-3'>Saved <span className='border flex items-center justify-center w-6 h-6  rounded-full text-sm text-bold '>0</span></button>
    //         </div>
    //     </nav>
    // </div>
  );
};

export default Navbar;
