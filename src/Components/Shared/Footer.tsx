import Image from "next/image"
import logo from '@/asset/logo.png'


const Footer = () => {
  return (
    <div className=" mt-15 mb-6 border-t border-[#9CA3AF]">
        <footer className="flex justify-between items-center max-w-300 mx-auto container mt-15  ">
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <Image src={logo} alt="logo"
                        className="h-4.5 w-4.5 sm:h-5 sm:w-5 lg:h-5.5 lg:w-5.5"/>
                <h1 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[18px]"> FITLOG</h1>
            </div>
            <p className="text-[11px] text-[#9CA3AF]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </footer>
    </div>
  )
}

export default Footer