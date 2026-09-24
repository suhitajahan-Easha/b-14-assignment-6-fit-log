"use client";

import Link from "next/link";

export default function Error() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] px-5 py-10 text-white">
            <div className="w-full max-w-lg text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#17230F]">
                    <span className="text-2xl font-bold text-[#C2F800]">!</span>
                </div>

                <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#C2F800]">SOMETHING WENT WRONG</p>

                <h1 className="font-oswald text-4xl font-bold uppercase leading-tight sm:text-5xl">We hit a snag.</h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9CA3AF] sm:text-base">
                    Something unexpected happened while loading this page. Please head back to your workouts.
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