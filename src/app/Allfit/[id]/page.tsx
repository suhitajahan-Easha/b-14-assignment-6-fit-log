import { dataFetch } from '@/lib/Data'
import { ExerciseType } from '@/Type/Type';
import Image from 'next/image';
import { PiTimerLight } from "react-icons/pi";
import { LuLoaderPinwheel } from "react-icons/lu";
import { CiStar } from "react-icons/ci";


const Detailspage = async({params}: { params: Promise<{ id: string }>}) => {
    const { id } = await params
  const exercise = await dataFetch();

  const fit:ExerciseType=exercise.find((fit:ExerciseType)=>String(fit.id)===id)
  return (
    <div>
        <div className=' flex justify-between gap-6 mx-5 my-7'>
            <div>
                 <Image src={fit.image} alt={fit.name} className='flex-1 w-[100px]  rounded-t-xl' width={50} height={50}></Image>
            </div>
             <div className='ml-7 flex-1'>
                 <h1>{fit.name}</h1> 
                 <p>{fit.description}</p> 

             </div>
        </div>
    </div>
  )
}

export default Detailspage