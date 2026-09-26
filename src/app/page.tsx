
import Banner from "./components/Banner";
import WorkoutList from "./components/WorkoutList";

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


   <div className=" bg-black ">
      <Banner />
    </div>
<div id="library" className="min-h-screen bg-black">
  <div className="mx-2 md:mx-8">
 <h1 className="text-3xl font-bold text-white mt-20">THE LIBRARY</h1>

<p className=" text-white m-0 mb-10">
  Twelve lifts covering every major muscle group.
</p>

<WorkoutList workouts={workouts} />



  </div>
  </div>
  </>
 )



}
