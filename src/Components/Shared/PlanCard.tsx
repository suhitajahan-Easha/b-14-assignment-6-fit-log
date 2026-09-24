'use client'
import { Context } from "@/Context/ContextApi"
import { ExerciseType } from "@/Type/Type"
import Image from "next/image"
import { useContext, useState } from "react"
import { PiTimerLight } from "react-icons/pi";
import { LuLoaderPinwheel } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import Link from "next/link"
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify"

const PlanCard = ({fit}:{fit:ExerciseType}) => {

    const {plan,setPlan}=useContext(Context)
    const [isDone, setIsDone] = useState(false);
    
      const handleDone = () => {
        setIsDone(true);
        toast.success("Workout completed!");
      };
 const handlePlan=(id:number)=>{
    const filtered=plan.filter((p:ExerciseType)=>p.id!==id)
    toast.success("Removed Succesfully")
    return setPlan(filtered)
 } 
  return (
    <div className="flex justify-between bg-[#111317] border border-gray-500 mb-3 px-4 py-3 rounded-xl ">
            <div className="flex justify-between items-center gap-3">
                <Image src={fit.image} alt={fit.name} width={150} height={70} className="w-37.5 h-17.5 rounded-xl object-cover"  ></Image>
                <div className="flex flex-col justify-center  gap-2 ">
                    <h1 className="text-[16px] font-oswald font-bold uppercase">{fit.name}</h1>
                    <h2 className="text-xs text-[#9CA3AF]">{fit.equipment}</h2>
                    <ul className="flex justify-start items-center gap-5  text-xs text-[#9CA3AF]">
                        <li className="flex gap-1 justify-center"><PiTimerLight className="text-sm text-[#C2F800]" />{fit.duration} min</li>
                        <li className="flex gap-1 justify-center"><LuLoaderPinwheel className="text-sm text-[#C2F800]" />{fit.caloriesBurned} kcal</li>
                        <li className="flex gap-1 justify-center"><CiStar className="text-sm text-[#C2F800]" />{fit.rating}</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-start items-center gap-4 ">
                <Link href={`/Allfit/${fit.id}`}>
                  <button  className='border border-gray-600 px-6 py-2 text-[11px] text-white rounded-xl items-center '> View Details</button> 
                </Link>
                {!isDone && (
                <button onClick={handleDone} className="bg-[#C2F800] px-6 py-2 text-[11px] text-black rounded-xl">
                      Mark as Done </button>)}
              <RxCross2 className="text-white" onClick={()=>handlePlan(fit.id)} />  
            </div>
          </div>
  )
}

export default PlanCard