import Image from "next/image"
import logo from '@/asset/logo.png'


const Footer = () => {
  return (
    <div className=" mt-15 mb-6 border-t border-[#9CA3AF]">
        <footer className="mx-auto mt-10 flex w-full flex-col items-center justify-center gap-4 px-4 sm:mt-12 sm:flex-row
         sm:justify-between sm:gap-6 sm:px-6 md:px-8 lg:container lg:mt-15 lg:max-w-300 lg:px-0  ">
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <Image src={logo} alt="logo"
                        className="h-4.5 w-4.5 sm:h-5 sm:w-5 lg:h-5.5 lg:w-5.5"/>
                <h1 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[18px]"> FITLOG</h1>
            </div>
            <p className="text-center text-[10px] text-[#9CA3AF] sm:text-right sm:text-[11px]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </footer>
    </div>
  )
}

export default Footer