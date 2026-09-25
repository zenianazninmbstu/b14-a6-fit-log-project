export default function NotFound() {
  return (
    <main className="mx-4 flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="text-sm font-bold text-lime-400">404</p>

        <h1 className="mt-3 text-4xl font-bold">
          PAGE NOT FOUND
        </h1>

        <p className="mt-3 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 inline-flex rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
        >
          GO TO WORKOUTS
        </a>
      </div>
    </main>
  );
}