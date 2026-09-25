import PlanButton from "@/Components/Shared/PlanButton";
import SaveButton from "@/Components/Shared/SaveButton";
import { dataFetch } from "@/lib/Data";
import { ExerciseType } from "@/Type/Type";
import Image from "next/image";

const Detailspage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const exercise = await dataFetch();

  const fit: ExerciseType = exercise.find(
    (fit: ExerciseType) => String(fit.id) === id,
  );
  return (
    <div>
      <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-0 md:gap-6  lg:max-w-300  lg:mx-auto lg:container my-7">
        <div>
          <Image
            src={fit.image}
            alt={fit.name}
            className="w-100 h-100 rounded-xl object-cover sm:h-130 md:w-110 md:h-120 lg:flex-1 lg:w-150 lg:h-150"
            width={500}
            height={400}
          ></Image>
        </div>
        <div className="mx-2 md:mx-2 lg:mx-0 lg:ml-7 flex-1">
          <h1 className="text-4xl uppercase font-oswald font-bold mb-2">
            {fit.name}
          </h1>
          <p className="text-[#9CA3AF] text-sm">{fit.description}</p>
          <h1 className="flex justify-start gap-3 py-6">
            {fit.muscleGroups.map((p, i) => (
              <div className="text-center" key={i}>
                <p className="bg-[#ccff00] text-black w-25 p-1 rounded-xl">
                  {p}
                </p>
              </div>
            ))}
          </h1>
          <div className="overflow-hidden rounded-xl bg-[#222630] text-[10px] text-white">
            <table className="w-full">
              <tbody>
                {[
                  ["equipment", fit.equipment],
                  ["difficulty", fit.difficulty],
                  ["sets", fit.sets],
                  ["reps", fit.reps],
                  ["duration", fit.duration],
                  ["caloriesBurned", fit.caloriesBurned],
                  ["rating", fit.rating],
                ].map(([label, value], i) => (
                  <tr key={label} className={i !== 6 ? "border-b border-gray-600" : ""}>
                    <td className="px-5 py-2 uppercase text-[#9CA3AF]"> {label}</td>
                    <td className="px-5 py-2 text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div>
            <h1 className="text-[16px] uppercase mt-5 mb-2">Instructions</h1>
            <ol className="ml-5 list-decimal">
              {fit.instructions.map((p, i) => (
                <li className="text-sm text-[#9CA3AF] mb-2" key={i}>
                  {" "}
                  {p}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex justify-start items-center gap-4 mt-10">
            <PlanButton fit={fit}></PlanButton>
            <SaveButton fit={fit}></SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
