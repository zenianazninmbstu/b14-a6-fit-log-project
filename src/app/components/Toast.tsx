"use client";

import { CheckCircle2 } from "lucide-react";

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed right-6 top-6 z-50 w-[300px] overflow-hidden rounded-lg border border-gray-700 bg-[#15171c] text-white shadow-2xl">
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00]">
          <CheckCircle2 size={18} className="text-black" />
        </div>

        <div>
          <p className="text-sm font-semibold">Success</p>
          <p className="text-xs text-gray-400">{message}</p>
        </div>
      </div>

      <div className="h-1 w-full bg-gray-800">
        <div className="h-full w-full origin-right animate-[toastProgress_3.5s_linear_forwards] bg-[#ccff00]" />

        
      </div>

      <style jsx>{`
        @keyframes toastProgress {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      `}</style>
    </div>
  );
}