import { dataFetch } from '@/lib/Data'
import { ExerciseType } from '@/Type/Type';
import Image from 'next/image';
import { CiBookmark } from "react-icons/ci";


const Detailspage = async({params}: { params: Promise<{ id: string }>}) => {
    const { id } = await params
  const exercise = await dataFetch();

  const fit:ExerciseType=exercise.find((fit:ExerciseType)=>String(fit.id)===id)
  return (
    <div>
        <div className=' flex justify-between gap-6 max-w-300 mx-auto container my-7'>
            <div>
                 <Image src={fit.image} alt={fit.name} className='flex-1 w-[600px] h-[600px]
                  rounded-xl' width={500} height={400}></Image>
            </div>
             <div className='ml-7 flex-1'>
                 <h1 className='text-4xl uppercase font-oswald font-bold mb-2'>{fit.name}</h1> 
                 <p className='text-[#9CA3AF] text-sm'>{fit.description}</p> 
                 <h1 className="flex justify-start gap-3 py-6">
                    {fit.muscleGroups.map((p, i) => <div className="text-center" key={i}><p className="bg-[#ccff00] text-black w-25 p-1 rounded-xl">{p}</p></div>)}
                </h1>
                <div className='rounded-xl bg-[#222630] text-[10px] text-white'>
                  <div className='flex justify-between border-b border-gray-600 px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>equipment</h1>
                    <h2 className='text-white'>{fit.equipment}</h2>
                  </div>
                  <div className='flex justify-between border-b border-gray-600 px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>difficulty</h1>
                    <h2 className='text-white'>{fit.difficulty}</h2>
                  </div>
                  <div className='flex justify-between border-b border-gray-600 px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>sets</h1>
                    <h2>{fit.sets}</h2>
                  </div>
                  <div className='flex justify-between border-b border-gray-600 px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>reps</h1>
                    <h2>{fit.reps}</h2>
                  </div>
                  <div className='flex justify-between border-b border-gray-600 px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>duration</h1>
                    <h2>{fit.duration}</h2>
                  </div>
                  <div className='flex justify-between border-b border-gray-600 px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>caloriesBurned</h1>
                    <h2>{fit.caloriesBurned}</h2>
                  </div>
                  <div className='flex justify-between px-5 py-2  '>
                    <h1 className='uppercase text-[#9CA3AF]'>rating</h1>
                    <h2>{fit.rating}</h2>
                  </div>
                </div>
                <div>
                  <h1 className='text-[16px] uppercase mt-5 mb-2'>Instructions</h1>
                  {fit.instructions.map((p, i) =><ol className='ml-3' key={i}><li className='list-disc  text-sm text-[#9CA3AF]'>{p}</li></ol>)}

                </div>
                <div className='flex justify-start items-center gap-4 mt-10'>
                  <button className='bg-[#C2F800] px-6 py-2 text-[11px] text-black rounded-xl flex justify-between items-center '> <CiBookmark className='mr-2 text-sm' />Add To Today's Plan</button>
                  <button className='border border-gray-600 px-6 py-2 text-[11px] text-white rounded-xl flex justify-between items-center '> <CiBookmark className='mr-2 text-white text-sm' />Save For Later</button>
                </div>

             </div>
        </div>
    </div>
  )
}

export default Detailspage