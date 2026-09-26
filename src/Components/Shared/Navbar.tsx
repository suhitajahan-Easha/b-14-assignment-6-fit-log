"use client";
import Image from "next/image";
import logo from "@/asset/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Context } from '@/Context/ContextApi'
import { useContext } from 'react'

const Navbar = () => {
  const pathname = usePathname();
  const {save,plan}=useContext(Context)
  return (
    <div className="border-b border-[#9CA3AF]"> 
      <nav className="flex items-center justify-between gap-2  lg:max-w-300 lg:mx-auto lg:container  px-3 py-3 text-[#9CA3AF] sm:px-5 sm:py-4 md:px-7 lg:px-0 lg:py-5">
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
                 {plan.length}
               </span>
             
          </Link>
          <Link href="/my-plan"  className="flex items-center gap-1 sm:gap-2">
                <span>Saved</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-500 text-[11px] font-bold sm:h-6 sm:w-6 sm:text-xs">
                  {save.length}
                </span>
              
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
