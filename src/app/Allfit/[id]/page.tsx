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
      <div className="my-7 flex w-full flex-col items-center justify-between gap-6 px-4 sm:px-6 md:px-8 lg:mx-auto lg:container lg:max-w-300 lg:flex-row lg:gap-2 lg:px-0">
        <div className="w-full lg:w-auto">
          <Image
            src={fit.image}
            alt={fit.name}
            width={500}
            height={400}
            className="h-auto w-full rounded-xl object-cover sm:h-100 md:h-110 lg:h-150 lg:w-150"
          />
        </div>

        <div className="w-full flex-1 lg:ml-7">
          <h1 className="mb-2 font-oswald text-3xl font-bold uppercase sm:text-4xl">
            {fit.name}
          </h1>

          <p className="text-sm text-[#9CA3AF]">{fit.description}</p>

          <h1 className="flex flex-wrap justify-start gap-2 py-6 sm:gap-3">
            {fit.muscleGroups.map((p, i) => (
              <div className="text-center" key={i}>
                <p className="w-25 rounded-xl bg-[#ccff00] p-1 text-black">
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
                  <tr
                    key={label}
                    className={i !== 6 ? "border-b border-gray-600" : ""}
                  >
                    <td className="px-5 py-2 uppercase text-[#9CA3AF]">
                      {label}
                    </td>
                    <td className="px-5 py-2 text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h1 className="mb-2 mt-5 text-[16px] uppercase">Instructions</h1>
            <ol className="ml-5 list-decimal">
              {fit.instructions.map((p, i) => (
                <li className="mb-2 text-sm text-[#9CA3AF]" key={i}>
                  {p}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
            <PlanButton fit={fit} />
            <SaveButton fit={fit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
