import { ExerciseType } from '@/Type/Type';
import React from 'react'
import FitCard from '../Shared/FitCard';
import { dataFetch } from '@/lib/Data';


const Allexercise = async() => {
    const allexercise= await dataFetch()
    
 
  return (
    <div className='px-10'>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>THE LIBRARY</h1>
            <p className='text-sm text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 my-10">
        {
          allexercise.map((fit:ExerciseType)=> <FitCard fit={fit} key={fit.id}></FitCard>)
        }
    </div>
    </div>
  )
}

export default Allexercise