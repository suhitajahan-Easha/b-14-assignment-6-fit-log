import { ExerciseType } from "@/Type/Type";
import Image from "next/image";
import { PiTimerLight } from "react-icons/pi";
import { LuFlame } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const FitCard = ({ fit }: { fit: ExerciseType }) => {
  return (
    <div>
      <Link href={`/Allfit/${fit.id}`}>
           <div className="rounded-xl bg-[#222630] hover:border hover:border-[#ccff00] transition-all">
            <Image src={fit.image} alt={fit.name} width={400} height={200} className="w-full h-70 object-cover rounded-t-xl" />
            <div className="ml-7">
                <h1 className="flex flex-wrap justify-start gap-3 py-6">
                    {fit.muscleGroups.map((p, i) => <div className="text-center" key={i}><p className="bg-[#ccff00] text-black w-25 p-1 rounded-xl">{p}</p></div>)}
                </h1>

                <h1 className="font-bold text-xl uppercase">{fit.name}</h1>
                <h2 className="text-xs text-[#9CA3AF]">{fit.equipment}</h2>

                <hr className="w-[90%] text-center text-gray-600 my-5" />

                <ul className="flex justify-start items-center gap-5 pb-6 text-xs text-[#9CA3AF]">
                    <li className="flex gap-1 justify-center"><PiTimerLight className="text-sm text-[#C2F800]" />{fit.duration} min</li>
                    <li className="flex gap-1 justify-center"><LuFlame className="text-sm text-[#C2F800]" />{fit.caloriesBurned} kcal</li>
                    <li className="flex gap-1 justify-center"><CiStar className="text-sm text-[#C2F800]" />{fit.rating}</li>
                </ul>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default FitCard;
