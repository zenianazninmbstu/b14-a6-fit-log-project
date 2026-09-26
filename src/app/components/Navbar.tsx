"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useFitLog } from "../context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 mx-4 border-b border-gray-800 bg-black">
      <div className="flex flex-col gap-3 px-4 py-3 md:grid md:grid-cols-3 md:items-center md:px-6">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 md:justify-self-start">
          <Image
            src="/logo.png"
            alt="Fitlog"
            width={25}
            height={12}
            className="h-auto w-[25px]"
          />

          <span className="text-sm font-bold text-white">
            Fitlog
          </span>
        </div>

        {/* Middle links */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/"
            className={`text-sm ${
              pathname === "/" ? "text-lime-400" : "text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm ${
              pathname === "/my-plan" ? "text-lime-400" : "text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right badges */}
        <div className="flex items-center justify-center gap-5 md:justify-self-end">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white"
          >
            Plan

            <span className="rounded-full bg-[#ccff00] px-2 py-0.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm text-white"
          >
            Saved

            <span className="rounded-full border border-gray-500 px-2 py-0.5 text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;