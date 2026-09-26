"use client";

import Link from "next/link";
import { Clock, Flame, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useFitLog } from "../context/FitLogContext";
import SortDropdown from "../components/SortDropdown";



export default function MyPlan() {
const {
  plan,
  saved,
  removeFromPlan,
  removeFromSaved,
  markAsDone,
  showToast,
} = useFitLog();

const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

const [sortBy, setSortBy] = useState<
  "duration" | "calories" | "rating"
>("duration");

const currentWorkouts = activeTab === "plan" ? plan : saved;

const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
  if (sortBy === "duration") {
    return a.duration - b.duration;
  }

  if (sortBy === "calories") {
    return a.caloriesBurned - b.caloriesBurned;
  }

  return a.rating - b.rating;
});

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 500);

  return () => clearTimeout(timer);
}, []);



if (loading) {
  return (
    <main className="mx-4 min-h-screen bg-black py-12 text-white">
      <div className="mx-8 flex min-h-[400px] items-center justify-center">
        <p className="text-sm text-gray-400">Loading workouts…</p>
      </div>
    </main>
  );
}



  const totalMinutes = plan.reduce(
    (total: number, workout: any) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total: number, workout: any) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <main className="mx-4 min-h-screen bg-black py-12 text-white">
      <div className="mx-8">

        {/* HEADER */}
        <h1 className="text-4xl font-bold uppercase">
          MY PLAN
        </h1>

        <p className="mt-3 text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* METRICS */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-gray-800 bg-[#15171c] p-5">
            <p className="text-xs text-gray-500">
              EXERCISES
            </p>

            <p className="mt-2 text-2xl font-bold">
              {plan.length}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#15171c] p-5">
            <p className="text-xs text-gray-500">
              MINUTES
            </p>

            <p className="mt-2 text-2xl font-bold">
              {totalMinutes}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#15171c] p-5">
            <p className="text-xs text-gray-500">
              CALORIES
            </p>

            <p className="mt-2 text-2xl font-bold">
              {totalCalories}
            </p>
          </div>

        </div>

        {/* TABS */}
       {/* TABS + SORT */}
<div className="mt-10 flex items-center justify-between">

  {/* TABS */}
  <div className="flex gap-1 rounded-md border border-gray-800 bg-[#15171c] p-1">

    <button
      onClick={() => setActiveTab("plan")}
      className={`rounded-md px-4 py-2 text-xs font-bold ${
        activeTab === "plan"
          ? "bg-[#252932] text-white"
          : "text-gray-500"
      }`}
    >
      Today's Plan
    </button>

    <button
      onClick={() => setActiveTab("saved")}
      className={`rounded-md px-4 py-2 text-xs font-bold ${
        activeTab === "saved"
          ? "bg-[#252932] text-white"
          : "text-gray-500"
      }`}
    >
      Saved
    </button>

  </div>

  {/* SORT */}
<div className="flex items-center gap-2">
  <span className="text-xs text-gray-500">
    Sort By
  </span>

  <SortDropdown
    sortBy={sortBy}
    setSortBy={setSortBy}
  />
</div>
</div>

        {/* WORKOUT LIST */}
        <div className="mt-8">

          {currentWorkouts.length === 0 ? (

            /* EMPTY STATE */
            <div className="py-20 text-center">

              <h2 className="text-2xl font-bold">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-3 max-w-md text-gray-400">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
              >
                Go to workouts
              </Link>

            </div>

          ) : (

            /* WORKOUT CARDS */
           <div className="space-y-3">

  {sortedWorkouts.map((workout: any) => (

    <div
      key={workout.id}
      className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#15171c] p-3 sm:flex-row sm:items-center"
    >

      {/* THUMBNAIL */}
      <img
        src={workout.image}
        alt={workout.name}
        className="h-24 w-full rounded-lg object-cover sm:w-24"
      />

      {/* WORKOUT INFO */}
      <div className="min-w-0 flex-1">

        <h2 className="text-sm font-bold uppercase">
          {workout.name}
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {workout.equipment}
        </p>

        {/* STATS */}
        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">

          <span className="flex items-center gap-1">
            <Clock size={13} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={13} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={13} />
            {workout.rating}
          </span>

        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex shrink-0 items-center gap-2">

        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-xs font-bold text-white"
        >
          View Details
        </Link>

        {activeTab === "plan" && (
          <button
            onClick={() => {
              markAsDone(workout.id);
              showToast("Workout marked as done");
            }}
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          onClick={() => {
            if (activeTab === "plan") {
              removeFromPlan(workout.id);
              showToast("Workout removed from plan");
            } else {
              removeFromSaved(workout.id);
              showToast("Workout removed from saved");
            }
          }}
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:text-white"
        >
          <X size={15} />
        </button>

      </div>

    </div>

  ))}

</div>
          )}

        </div>

      </div>
    </main>
  );
}