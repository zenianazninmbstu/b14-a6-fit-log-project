
"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import React from 'react';
import Image from "next/image";
import { useFitLog } from "../context/FitLogContext";






const Navbar = () => {

    const pathname = usePathname();
    const { plan, saved } = useFitLog();
    return (
        <nav className="bg-black mx-4 border-b border-gray-800">

 <div className="flex items-center justify-between py-2 px-6">
            {/* logo */}

<div className="flex items-center gap-2 py-2 ml-2">
  <Image
    src="/logo.png"
    alt="Fitlog"
    width={25}
    height={12}
  />

  <span className="text-sm font-bold text-white">Fitlog</span>
</div>


{/* Middle link */}

<div className="absolute left-1/2 -translate-x-1/2 flex gap-8">

  <Link
    href="/"
     className={`text-sm ${pathname === "/" ? "text-lime-400" : "text-white"}`}
  >
    Workout
  </Link>

  <Link
    href="/my-plan"
   className={`text-sm ${pathname === "/my-plan" ? "text-lime-400" : "text-white"}`}
  >
    My Plan

  </Link>
</div>


{/* Right side badges */}


<div className="ml-auto flex items-center gap-4">
  <Link href="/my-plan" className="text-white flex items-center gap-2 text-sm">
    Plan
    <span className="rounded-full bg-[#ccff00] px-2 py-0.5 text-xs font-bold text-black">
      {plan.length}
    </span>
  </Link>

  <Link href="/my-plan" className="text-white flex items-center gap-2 text-sm">
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