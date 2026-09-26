export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0B0D10]">
            <h1>Loading Workouts....</h1>
            <span className="h-10 w-10 animate-spin rounded-full border-4 border-[#222630] border-t-[#C2F800]" />
        </main>
    );
}