export default function Footer() {
  return (
    <footer className="mx-4 border-t border-gray-800 bg-black">
      <div className="mx-8 flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Fitlog"
            className="h-6 w-auto"
          />
          <span className="text-sm font-bold text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}