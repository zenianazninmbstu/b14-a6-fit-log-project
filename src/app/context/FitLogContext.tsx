"use client";

import { createContext, useContext, useState } from "react";

const FitLogContext = createContext(null);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  return (
    <FitLogContext.Provider value={{ plan, saved, setPlan, setSaved }}>
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  return useContext(FitLogContext);
}