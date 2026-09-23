'use client'
import Image from 'next/image'
import logo from '@/asset/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div>
        <nav className='flex justify-between items-center gap-3 px-10 py-10 text-[#9CA3AF]'>
            <div className='flex justify-center items-center gap-2 '>
               <Image src={logo} alt='logo' className='w-[22px] h-[22px]'></Image>
               <h1 className='text-[#FFFFFF] text-[18px] font-bold '>FITLOG</h1>
            </div>
            
            <ul className='flex justify-between gap-3 items-center'>
                <Link href="/" className={pathname==='/'?'text-[#C2F800] rounded-sm px-3':''}><li>Workout</li></Link>
                <Link href="/my-plan" className={pathname==='/my-plan'?'text-[#C2F800] rounded-sm px-3':''}><li>My Plan</li></Link>
            </ul>
            <div className='flex justify-center gap-2'>
                <button className='flex justify-between gap-3'>Plan <span className='flex items-center justify-center w-6 h-6  rounded-full text-sm text-bold  bg-[#ccff00] text-black'>0</span></button>
                <button className='flex justify-between gap-3'>Saved <span className='border flex items-center justify-center w-6 h-6  rounded-full text-sm text-bold '>0</span></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar