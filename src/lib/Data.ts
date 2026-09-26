 export const dataFetch=async()=>{
    try{
       const res=await fetch('https://api.abcz.workers.dev/api/fitlog')
       const data=await res.json()
       return data;
     }catch(error){
        return[]
     }
} 