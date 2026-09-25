import { Star, Flame, Clock } from "lucide-react";
import Link from "next/link";
import Banner from "./components/Banner";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: number;
  rating: number;
  description: string;
  instructions: string[];
};

async function getWorkouts() {

  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();


  return data;
}


export default async function Home() {

  const workouts = await getWorkouts();

 

 return (
<>


   <div className="mx-4 bg-black ">
      <Banner />
    </div>
<div id="library" className="min-h-screen bg-black mx-4 ">
   <div className="mx-8">
 <h1 className="text-3xl font-bold text-white mt-20">THE LIBRARY</h1>

<p className=" text-white m-0 mb-6">
  Twelve lifts covering every major muscle group.
</p>




<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
    {workouts.map((workout:Workout ) => (

      <Link
  key={workout.id}
  href={`/workouts/${workout.id}`}
  className="block overflow-hidden rounded-xl border border-gray-800 bg-[#15171c]"
>
      


<img 
src = {workout.image} 
alt= {workout.name}
className="w-full mb-4"
/>

<div className="p-4">
<div className="flex gap-2 ">
  {workout.muscleGroups.map((muscle) => (
    <span
    key={muscle}
     className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold
     text-black mb-4"
    >
    {muscle}
    </span>

  ))}
</div>


<h2 className="text-[18px] font-bold leading-[28px]">
  {workout.name}
  </h2>


<p className="text-sm font-normal text-gray-400">
  {workout.equipment}
</p>

<hr className="my-6 border-gray-700" />

<div className="flex items-center gap-4 text-sm text-gray-400">
  <span className="flex items-center gap-1">
    <Clock size={15} />
    {workout.duration} min
  </span>

  <span className="flex items-center gap-1">
    <Flame size={15} />
    {workout.caloriesBurned} kcal
  </span>

  <span className="flex items-center gap-1">
    <Star size={15} />
    {workout.rating}
  </span>
  </div>
</div>



</Link>
    ))}
     
  </div>
  </div>
  </div>
  </>
 )



}
