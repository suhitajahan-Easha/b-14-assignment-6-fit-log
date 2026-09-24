"use client";

import PlanCard from "@/Components/Shared/PlanCard";
import { Context } from "@/Context/ContextApi";
import { ExerciseType } from "@/Type/Type";
import { useContext } from "react";
import { DiVim } from "react-icons/di";

const myplanpage = () => {
  const { plan, save } = useContext(Context);

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
      <div className="bg-base-100 p-6 flex justify-start gap-80 my-6 rounded-xl">
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Exercise</h1>
          <h2 className="text-xl text-[#C2F800] font-bold sm:text-2xl uppercase font-oswald">
            0
          </h2>
        </div>
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Minutes</h1>
          <h2 className="text-xl font-bold sm:text-2xl uppercase font-oswald">
            0
          </h2>
        </div>
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Calories</h1>
          <h2 className="text-xl font-bold sm:text-2xl uppercase font-oswald">
            0
          </h2>
        </div>
      </div>
      <div className="tabs tabs-border mb-5">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab  mb-5"
          aria-label="Today's Plan"
          defaultChecked
        />
        <div className="tab-content ">
          {plan.length > 0 ? (
            plan.map((fit: ExerciseType) => {
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
        />
        <div className="tab-content bg-[#111317] border-gray-500 border border-dashed p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default myplanpage;
