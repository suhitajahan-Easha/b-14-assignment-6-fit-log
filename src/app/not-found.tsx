import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] px-5 py-10 text-white">
            <div className="w-full max-w-lg text-center">
                <p className="mb-4 text-[11px] font-bold tracking-[0.25em] text-[#C2F800]">ERROR 404</p>

                <h1 className="font-oswald text-6xl font-bold uppercase leading-none sm:text-8xl">404</h1>

                <h2 className="mt-5 text-xl font-bold uppercase sm:text-2xl">Workout not found.</h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9CA3AF]">
                    The page or workout you're looking for doesn't exist or may have been moved.
                </p>

                <div className="mt-8 flex justify-center">
                    <Link href="/" className="rounded-xl bg-[#C2F800] px-6 py-3 text-xs font-bold text-black transition-opacity hover:opacity-90">
                        BACK TO WORKOUTS
                    </Link>
                </div>

                <p className="mt-10 text-[10px] uppercase tracking-wider text-[#555A63]">FITLOG</p>
            </div>
        </main>
    );
}