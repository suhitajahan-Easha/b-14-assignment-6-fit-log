"use client";

import PlanCard from "@/Components/Shared/PlanCard";
import SaveCard from "@/Components/Shared/SaveCard";
import { Context } from "@/Context/ContextApi";
import { ExerciseType } from "@/Type/Type";
import Link from "next/link";
import { useContext, useState } from "react";

const myplanpage = () => {
  const { plan, save } = useContext(Context);

  const [sortby, setSortby] = useState< "rating" | "caloriesBurned" | "duration" >("duration");
  const [activeTab, setActiveTab] = useState<"plan" | "save">("plan");

  const sortfit = (fit: ExerciseType[]) => {
    const sortedfits = [...fit];
    if (sortby === "rating") {
      sortedfits.sort((b, a) => a.rating - b.rating);
    } else if (sortby === "caloriesBurned") {
      sortedfits.sort((b, a) => a.caloriesBurned - b.caloriesBurned);
    } else if (sortby === "duration") {
      sortedfits.sort((b, a) => a.duration - b.duration);
    }

    return sortedfits;
  };

  const sortedplanfit = sortfit(plan);
  const sortedsavefit = sortfit(save);
  const activeExercises = activeTab === "plan" ? plan : save;
  const totalMinutes = activeExercises.reduce(
    (total, fit) => total + fit.duration,
    0,
  );
  const totalCalories = activeExercises.reduce(
    (total, fit) => total + fit.caloriesBurned,
    0,
  );

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:container lg:mx-auto lg:max-w-300 lg:px-0">
      <div className="flex flex-col gap-2 mt-6">
        <h1 className="text-xl font-bold sm:text-2xl uppercase font-oswald ">
          My plan
        </h1>
        <p className="text-xs text-[#9CA3AF] sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="my-6 flex justify-between gap-4 rounded-xl bg-[#222630] p-4 sm:gap-10 sm:p-5 md:gap-20 md:p-6 lg:justify-start lg:gap-80">
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Exercise</h1>
          <h2 className="text-xl text-[#C2F800] font-bold sm:text-2xl uppercase font-oswald">
            {activeExercises.length}
          </h2>
        </div>
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Minutes</h1>
          <h2 className="text-xl font-bold sm:text-2xl uppercase font-oswald">
            {totalMinutes}
          </h2>
        </div>
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Calories</h1>
          <h2 className="text-xl font-bold sm:text-2xl uppercase font-oswald">
            {totalCalories}
          </h2>
        </div>
      </div>
      <div className="-mb-10 flex items-center justify-end gap-1 ">
        <h1 className="text-xs text-[#9CA3AF] sm:text-sm ">Sortby</h1>
        <select value={sortby} onChange={(e) =>
            setSortby(
              e.target.value as "rating" | "caloriesBurned" | "duration", ) }
          className="select select-ghost h-8 w-24 px-1 text-[10px]  sm:h-9 sm:w-32 sm:px-2 sm:text-xs md:w-30 md:text-sm " >
          <option value={"rating"} className="text-xs text-[#9CA3AF] sm:text-sm"> Rating</option>
          <option value={"caloriesBurned"} className="text-xs text-[#9CA3AF] sm:text-sm" > Calories</option>
          <option value={"duration"} className="text-xs text-[#9CA3AF] sm:text-sm"> Duration</option>
        </select>
      </div>
      <div className="mb-5">
        <div className="inline-flex items-center gap-1 rounded-xl border border-[#252A35] bg-[#111317] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
              activeTab === "plan"
                ? "bg-[#222630] text-white shadow-sm"
                : "text-[#9CA3AF]" }`} > Today's Plan
          </button>
          <button
            onClick={() => setActiveTab("save")}
            className={`rounded-lg px-4 py-1.5 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
              activeTab === "save"
                ? "bg-[#222630] text-white shadow-sm"
                : "text-[#9CA3AF]"}`} > Saved
          </button>
        </div>
        <div className="mt-5">
          {activeTab === "plan" ? (
            sortedplanfit.length > 0 ? (
              sortedplanfit.map((fit: ExerciseType) => {
                return <PlanCard fit={fit} key={fit.id} />;
              })
            ) : (
              <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-500 bg-[#111317] p-10">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="mb-2 text-[16px] font-oswald font-bold uppercase"> Nothing here yet </h1>
                  <p className="mb-5 text-center text-xs text-[#9CA3AF]">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <Link href="/">
                    <button className="rounded-xl bg-[#C2F800] px-6 py-2 text-[11px] text-black">
                      Go to Workouts
                    </button>
                  </Link>
                </div>
              </div>
            )
          ) : sortedsavefit.length > 0 ? (
            sortedsavefit.map((fit: ExerciseType) => {
              return <SaveCard fit={fit} key={fit.id} />;
            })
          ) : (
            <div className="flex items-center justify-center rounded-xl border border-dashed border-gray-500 bg-[#111317] p-10">
              <div className="flex flex-col items-center justify-center">
                <h1 className="mb-2 text-[16px] font-oswald font-bold uppercase"> Nothing here yet
                </h1>
                <p className="mb-5 text-center text-xs text-[#9CA3AF]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href="/">
                  <button className="rounded-xl bg-[#C2F800] px-6 py-2 text-[11px] text-black">
                    Go to Workouts
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default myplanpage;
