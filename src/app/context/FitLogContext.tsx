"use client";

import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";

const FitLogContext = createContext<any>(null);

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<any[]>([]);
  const [saved, setSaved] = useState<any[]>([]);
  const [toast, setToast] = useState("");

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3500);
  };

  const addToPlan = (workout: any) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (workoutId: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== workoutId)
    );
  };


  const removeFromSaved = (workoutId: number) => {
  setSaved((currentSaved) =>
    currentSaved.filter((workout) => workout.id !== workoutId)
  );
};

  const markAsDone = (workoutId: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== workoutId)
    );
  };

  const saveWorkout = (workout: any) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        markAsDone,
        showToast,
        removeFromSaved,
      }}
    >
      {children}

      {toast && <Toast message={toast} />}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}