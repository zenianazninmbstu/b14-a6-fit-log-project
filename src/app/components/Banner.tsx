import React from 'react';
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const Banner = () => {
    return (
    <div className="mx-4 bg-black pt-16"> 
          <div className="rounded-xl bg-[#15171D] p-10 mx-8 ">
               <div className="flex items-center justify-between gap-10">

     {/* left content */}

         <div>
            <p className="text-[#C2F800]">
                WORKOUT LIBRARY
                </p>

<h1 className="font-['Oswald'] text-4xl font-bold uppercase text-white">
  TRAIN WITH INTENT. LOG
  <br />
  EVERY SET.
</h1>

<p className="mt-8 max-w-lg text-sm leading-6 text-gray-400">
  FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
  into today's plan, and watch the week's work add up.
</p>


<a
  href="#library"
  className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#C2F800] 
  px-4 py-2 text-xs font-bold text-black"
>
  BROWSE WORKOUTS
  <ArrowRight size={14} />
</a>
</div>

  {/* Right image */}
  
     <Image
  src="/banner.png"
  alt="FitLog workout"
  width={500}
  height={500}
  className="w-80"
/>

        </div>
        </div>
        </div>
    );
};

export default Banner;