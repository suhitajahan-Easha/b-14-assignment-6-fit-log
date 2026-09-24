'use client'

import { Context } from '@/Context/ContextApi'
import { ExerciseType } from '@/Type/Type'
import { useContext } from 'react'
import { CiBookmark } from "react-icons/ci";
 



const SaveButton = ({fit}:{fit:ExerciseType}) => {
    const {save,setSave}=useContext(Context)

    const handleclick=()=>{
    setSave([...save,fit])


}
  return (
     <button onClick={()=>handleclick()} className='border border-gray-600 px-6 py-2 text-[11px] text-white rounded-xl flex justify-between 
       items-center '> <CiBookmark className='mr-2 text-white text-sm' />Save For Later</button>   
  )
}

export default SaveButton