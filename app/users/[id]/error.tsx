"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({
    reset,
}: ErrorProps) {
    return (
    <div className="py-20 text-center">
        <h2 className="mb-4 text-xl font-semibold">
            Something went wrong.
        </h2>

        <button
            onClick={() => reset()}
            className="rounded-lg bg-black px-4 py-2 text-white">
            Try Again
        </button>
    </div>
    );
}