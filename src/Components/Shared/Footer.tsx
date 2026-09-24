import Image from "next/image"
import logo from '@/asset/logo.png'


const Footer = () => {
  return (
    <div className="max-w-300 mx-auto container  mt-10 mb-5">
        <footer className="flex justify-between items-center">
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                <Image src={logo} alt="logo"
                        className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px]"/>
                <h1 className="text-[14px] font-bold text-white sm:text-[16px] lg:text-[18px]"> FITLOG</h1>
            </div>
            <p className="text-[11px] text-[#9CA3AF]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </footer>
    </div>
  )
}

export default Footer