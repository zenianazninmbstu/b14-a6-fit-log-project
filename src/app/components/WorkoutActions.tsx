"use client";

import { Bookmark, Plus } from "lucide-react";
import { useFitLog } from "../context/FitLogContext";

type WorkoutActionsProps = {
  workout: any;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout, plan, saved, showToast } = useFitLog();

 const handleAdd = () => {
  if (plan.length >= 5) {
    showToast("Today's plan is full");
    return;
  }

  if (plan.some((item: any) => item.id === workout.id)) {
    showToast("Already in today's plan");
    return;
  }

  addToPlan(workout);
  showToast("Added to today's plan");
};

  const handleSave = () => {
    if (saved.some((item: any) => item.id === workout.id)) {
      showToast("Already saved");
      return;
    }

    saveWorkout(workout);
    showToast("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={handleAdd}
        className="flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
      >
        <Plus size={17} />
        Add to today's plan
      </button>

      <button
        onClick={handleSave}
        className="flex items-center gap-2 rounded-md border border-gray-600 px-5 py-3 text-sm font-bold text-white"
      >
        <Bookmark size={17} />
        Save for later
      </button>
    </div>
  );
}