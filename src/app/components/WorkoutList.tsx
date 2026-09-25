"use client";

import { Star, Flame, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SortDropdown from "./SortDropdown";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: number;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutListProps = {
  workouts: Workout[];
};

export default function WorkoutList({ workouts }: WorkoutListProps) {
  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.rating - b.rating;
  });

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
       
        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <Link
            key={workout.id}
            href={`/workouts/${workout.id}`}
            className="block overflow-hidden rounded-xl border border-gray-800 bg-[#15171c]"
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="mb-4 w-full"
            />

            <div className="p-4">
              <div className="flex gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="mb-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h2 className="text-[18px] font-bold leading-[28px]">
                {workout.name}
              </h2>

              <p className="text-sm font-normal text-gray-400">
                {workout.equipment}
              </p>

              <hr className="my-6 border-gray-700" />

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock size={15} />
                  {workout.duration} min
                </span>

                <span className="flex items-center gap-1">
                  <Flame size={15} />
                  {workout.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1">
                  <Star size={15} />
                  {workout.rating}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}