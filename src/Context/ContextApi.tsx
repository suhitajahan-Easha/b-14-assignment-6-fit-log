'use client'

import { ExerciseType } from "@/Type/Type";
import { createContext, ReactNode, useState } from "react"

interface AppContext{
    plan:ExerciseType[];
    setPlan:React.Dispatch<React.SetStateAction<ExerciseType[]>>;
    save:ExerciseType[];
    setSave:React.Dispatch<React.SetStateAction<ExerciseType[]>>;
}

export const Context=createContext<AppContext>({

    plan:[],
    setPlan:()=>{},
    save:[],
    setSave:()=>{}
})

const ContextApi = ({children}:{children:ReactNode}) => {
    const [plan,setPlan]=useState<ExerciseType[]>([])
    const [save,setSave]=useState<ExerciseType[]>([])

    const Shared={save,setSave,plan,setPlan}
  return (
    <Context.Provider value={Shared}>
        {children}
    </Context.Provider>
  )
}

export default ContextApi