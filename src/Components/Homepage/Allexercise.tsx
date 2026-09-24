import { ExerciseType } from "@/Type/Type";
import React from "react";
import FitCard from "../Shared/FitCard";
import { dataFetch } from "@/lib/Data";

const Allexercise = async () => {
  const allexercise = await dataFetch();

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-300 lg:mx-auto lg:container" id="library">
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold sm:text-2xl ">THE LIBRARY</h1>
        <p className="text-xs text-[#9CA3AF] sm:text-sm">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 my-6 sm:grid-cols-2 sm:gap-5 sm:my-8 lg:grid-cols-3 lg:gap-5 lg:my-10">
        {allexercise.map((fit: ExerciseType) => (
          <FitCard fit={fit} key={fit.id}></FitCard>
        ))}
      </div>
    </div>
  );
};

export default Allexercise;
