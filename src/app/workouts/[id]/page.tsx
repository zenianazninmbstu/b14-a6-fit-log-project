import { Clock, Flame, Star } from "lucide-react";
import WorkoutActions from "@/app/components/WorkoutActions";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetails({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const workout = await response.json();

  return (
  <main className="mx-4 min-h-screen bg-black py-12 text-white">
  <div className="mx-8">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE — IMAGE */}
          <div>
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full rounded-xl"
            />
          </div>

          {/* RIGHT SIDE — WORKOUT INFORMATION */}
          <div>

            {/* TITLE */}
            <h1 className="text-4xl font-bold uppercase">
              {workout.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* CATEGORY TAGS */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* KEY SPECS */}
            <div className="mt-8 rounded-xl border border-gray-800 bg-[#15171c] p-5">
              <h2 className="mb-5 text-lg font-bold">
                KEY SPECS
              </h2>

              <div className="grid grid-cols-2 gap-x-6 gap-y-5">

                <div>
                  <p className="text-xs text-gray-500">
                    EQUIPMENT
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.equipment}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    DIFFICULTY
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.difficulty}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    SETS
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.sets}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    REPS
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {workout.reps}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    DURATION
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                    <Clock size={14} />
                    {workout.duration} min
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    CALORIES
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                    <Flame size={14} />
                    {workout.caloriesBurned} kcal
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    RATING
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
                    <Star size={14} className="text-yellow-400" />
                    {workout.rating}
                  </p>
                </div>

              </div>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold">
                INSTRUCTIONS
              </h2>

              <div className="mt-5 space-y-4">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <div
                      key={index}
                      className="flex gap-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-black">
                        {index + 1}
                      </span>

                      <p className="leading-6 text-gray-400">
                        {instruction}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
}