import hero from '@/asset/banner.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
        <div className="bg-[#222630] flex justify-between items-center m-10 px-20 py-15 rounded-xl">
            <div className='flex flex-col gap-4 items-start '>
                <p className='font-bold text-[11px] text-[#C2F800]'>WORKOUT LIBRARY</p>
                <p className='w-[558px] text-[40px] text-white font-bold leading-10'>TRAIN WITH INTENT. LOG EVERY SET.</p>
                <p className='w-[481px] h-[48px] text-[12px] text-[#9CA3AF] '>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>
                <button className='bg-[#C2F800] px-5 py-2 text-[11px] text-black rounded-sm '>BROWSE WORKOUTS</button>
            </div>
            <Image src={hero} alt='hero' className='w-[334px] h-[334px]'></Image>
        </div>
    </div>
  )
}

export default Hero