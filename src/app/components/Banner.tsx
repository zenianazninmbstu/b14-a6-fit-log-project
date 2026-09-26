import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-black pt-8 md:pt-16">
      <div className="mx-2 overflow-hidden rounded-xl bg-[#15171D] p-6 md:mx-8 md:p-10">

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-10">

          {/* Left content */}
          <div className="w-full md:flex-1">

            <p className="text-[#C2F800]">
              WORKOUT LIBRARY
            </p>

            <h1 className="mt-2 font-['Oswald'] text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
              TRAIN WITH INTENT. LOG
              <br className="hidden sm:block" />
              EVERY SET.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-6 text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <a
              href="#library"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#C2F800] px-4 py-2 text-xs font-bold text-black"
            >
              BROWSE WORKOUTS
              <ArrowRight size={14} />
            </a>

          </div>

          {/* Right image */}
          <div className="flex w-full justify-center md:w-80 md:shrink-0">
            <Image
              src="/banner.png"
              alt="FitLog workout"
              width={500}
              height={500}
              className="h-auto w-full max-w-[260px] object-contain sm:max-w-[320px] md:max-w-full"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Banner;