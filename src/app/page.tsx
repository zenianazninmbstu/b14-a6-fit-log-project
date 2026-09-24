
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
  <div>
    {workouts.map((workout:Workout ) => (
      <p key = {workout.id}>{workout.name}</p>
    ))}
  </div>
 )



}
