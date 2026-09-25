export default function Loading() {
  return (
    <main className="mx-4 flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#ccff00]" />

        <p className="text-sm text-gray-400">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}