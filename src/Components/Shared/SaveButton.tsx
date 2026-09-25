'use client'

import { Context } from '@/Context/ContextApi'
import { ExerciseType } from '@/Type/Type'
import { useContext } from 'react'
import { CiBookmark } from "react-icons/ci";
import { toast } from 'react-toastify';
 



const SaveButton = ({fit}:{fit:ExerciseType}) => {
    const {save,setSave}=useContext(Context)

    const isSelected = save.some(
    selected => selected.id === fit.id
  );

    const handleclick=()=>{
        if(isSelected){
            toast.error("Already in Save")
            return
        }

        setSave([...save,fit])
        toast.success(`${fit.name} Saved Successfully`)


}
  return (
     <button onClick={handleclick} 
        className="border 
         border-gray-600 px-6 py-2 text-[11px] text-white rounded-xl flex justify-between 
       items-center"> <CiBookmark className="mr-2 text-white text-sm" />Save For Later</button>   
  )
}

export default SaveButton