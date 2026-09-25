"use client";

import Link from "next/link";
import { Clock, Flame, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useFitLog } from "../context/FitLogContext";



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

  const currentWorkouts = activeTab === "plan" ? plan : saved;

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
        <div className="mt-10 flex gap-8 border-b border-gray-800">

          <button
            onClick={() => setActiveTab("plan")}
            className={`pb-3 text-sm font-bold ${
              activeTab === "plan"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-500"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-3 text-sm font-bold ${
              activeTab === "saved"
                ? "border-b-2 border-lime-400 text-lime-400"
                : "text-gray-500"
            }`}
          >
            Saved
          </button>

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
            <div className="space-y-5">

              {currentWorkouts.map((workout: any) => (

                <div
                  key={workout.id}
                  className="flex flex-col gap-5 rounded-xl border border-gray-800 bg-[#15171c] p-4 md:flex-row"
                >

                  {/* THUMBNAIL */}
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="w-full rounded-lg object-cover md:w-52"
                  />

                  {/* WORKOUT INFO */}
                  <div className="flex flex-1 flex-col">

                    <h2 className="text-xl font-bold uppercase">
                      {workout.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      {workout.equipment}
                    </p>

                    {/* STATS */}
                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-400">

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

                    {/* ACTION BUTTONS */}
                    <div className="mt-6 flex flex-wrap gap-3">

                      <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-md border border-gray-600 px-4 py-2 text-sm font-bold text-white"
                      >
                        View Details
                      </Link>




{activeTab === "plan" && (
              <button
              onClick={() => {
             markAsDone(workout.id);
            showToast("Workout marked as done");
             }}
           className="rounded-md bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
           >
       Mark as Done
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
                          className="flex items-center justify-center rounded-md border border-gray-600 px-3 py-2 text-white"
>
                          <X size={17} />
                       </button>

                    </div>

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