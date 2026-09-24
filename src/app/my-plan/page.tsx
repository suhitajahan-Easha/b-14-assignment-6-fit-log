"use client";

import PlanCard from "@/Components/Shared/PlanCard";
import SaveCard from "@/Components/Shared/SaveCard";
import { Context } from "@/Context/ContextApi";
import { ExerciseType } from "@/Type/Type";
import Link from "next/link";
import { useContext, useState } from "react";

const myplanpage = () => {
  const { plan, save } = useContext(Context);

  const [sortby, setSortby] = useState<"rating" | "caloriesBurned" | "duration">("rating");
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
  const totalMinutes = activeExercises.reduce((total, fit) => total + fit.duration, 0);
  const totalCalories = activeExercises.reduce((total, fit) => total + fit.caloriesBurned, 0);

  return (
    <div className="max-w-300 mx-auto container">
      <div className="flex flex-col gap-2 mt-6">
        <h1 className="text-xl font-bold sm:text-2xl uppercase font-oswald ">
          My plan
        </h1>
        <p className="text-xs text-[#9CA3AF] sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="bg-[#222630] p-6 flex justify-start gap-80 my-6 rounded-xl">
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
      <div className="text-right -mb-12.5">
        <select value={sortby} onChange={(e)=>
          setSortby(e.target.value as "rating" | "caloriesBurned" | "duration")
        }
           className="select select-ghost ">
          <option disabled={true}>Sort By</option>
          <option value={"rating"}>Rating</option>
          <option value={"caloriesBurned"}>CaloriesBurned</option>
          <option value={"duration"}>duration</option>
          
        </select>
      </div>
      <div className="tabs tabs-border mb-5">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab  mb-5"
          aria-label="Today's Plan"
          checked={activeTab === "plan"}
           onChange={() => setActiveTab("plan")}
        />
        <div className="tab-content ">
          {sortedplanfit.length > 0 ? (
            sortedplanfit.map((fit: ExerciseType) => {
              return <PlanCard fit={fit} key={fit.id}></PlanCard>;
            })
          ) : (
            <div className="flex justify-center items-center bg-[#111317] border border-gray-500 border-dashed mb-3 p-10 rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-oswald font-bold uppercase mb-2">
                  Nothing here yet
                </h1>
                <p className="text-xs text-[#9CA3AF] mb-5 text-center">
                  Browse the library and add a lift to get today moving.
                </p>
                <button className="bg-[#C2F800] px-6 py-2 text-[11px] text-black rounded-xl">
                  Go to Workouts
                </button>
              </div>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab  mb-5"
          aria-label="Saved"
          checked={activeTab === "save"}
          onChange={() => setActiveTab("save")}
        />
        <div className="tab-content ">
          {sortedsavefit.length > 0 ? (
            sortedsavefit.map((fit: ExerciseType) => {
              return <SaveCard fit={fit} key={fit.id}></SaveCard>;
            })
          ) : (
            <div className="flex justify-center items-center bg-[#111317] border border-gray-500 border-dashed mb-3 p-10 rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[16px] font-oswald font-bold uppercase mb-2">
                  Nothing here yet
                </h1>
                <p className="text-xs text-[#9CA3AF] mb-5 text-center">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link href="/">
                  <button className="bg-[#C2F800] px-6 py-2 text-[11px] text-black rounded-xl">
                    Go to Workouts
                  </button></Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default myplanpage;
