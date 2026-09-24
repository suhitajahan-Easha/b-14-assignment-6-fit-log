'use client'

import { Context } from '@/Context/ContextApi'
import { ExerciseType } from '@/Type/Type'
import { useContext } from 'react'
import { CiBookmark } from "react-icons/ci";
import { toast } from 'react-toastify';
 



const PlanButton = ({fit}:{fit:ExerciseType}) => {
    const {plan,setPlan}=useContext(Context)

    const isSelected = plan.some(
    selected => selected.id === fit.id
  );

    const handleclick=()=>{
    setPlan([...plan,fit])
    toast.success(`${fit.name} Added Successfully`)


}
  return (
     
      <button onClick={()=>handleclick()} disabled={isSelected} className='bg-[#C2F800] px-6 py-2 text-[11px] text-black rounded-xl flex justify-between items-center '>
         <CiBookmark className='mr-2 text-sm' />Add To Today's Plan</button>  
  )
}

export default PlanButton