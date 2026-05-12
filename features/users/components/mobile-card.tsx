import Link from "next/link";
import { UserActivity } from "@/lib/user-types";

interface UsersMobileCardProps {
    users: UserActivity[];
}

export default function UsersMobileCard({
    users,
}: UsersMobileCardProps) {
    return (
    <div className="space-y-4 md:hidden">
        {users.map((user) => (
        <Link
            href={`/users/${user.id}`}
            key={user.id}
            className="block rounded-2xl border border-gray-200 bg-white p-4">
            <h2 className="font-semibold">
                {user.name}
            </h2>

            <p className="mt-1 break-all text-sm text-gray-500">
                {user.email}
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                <div>
                <p className="font-semibold">
                    {user.totalPosts}
                </p>

                <p className="text-gray-500">
                    Posts
                </p>
                </div>

                <div>
                <p className="font-semibold">
                    {user.completedTodos}
                </p>

                <p className="text-gray-500">
                    Done
                </p>
                </div>

                <div>
                <p className="font-semibold">
                    {user.pendingTodos}
                </p>

                <p className="text-gray-500">
                    Pending
                </p>
                </div>
            </div>
            </Link>
        ))}
        </div>
    );
}