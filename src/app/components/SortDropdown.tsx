"use client";

import { ChevronDown } from "lucide-react";

type SortDropdownProps = {
  sortBy: "duration" | "calories" | "rating";
  setSortBy: (value: "duration" | "calories" | "rating") => void;
};

export default function SortDropdown({
  sortBy,
  setSortBy,
}: SortDropdownProps) {
  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(
            e.target.value as "duration" | "calories" | "rating"
          )
        }
        className="appearance-none rounded-md border border-gray-700 bg-[#15171c] px-4 py-2 pr-10 text-sm text-white outline-none"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}