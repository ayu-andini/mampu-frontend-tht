import Link from "next/link";

export default function NotFound() {
    return (
    <div className="py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold">
            User Not Found
        </h1>

        <Link
            href="/users"
            className="text-blue-600 hover:underline">
            Back to users list
        </Link>
    </div>
    );
}