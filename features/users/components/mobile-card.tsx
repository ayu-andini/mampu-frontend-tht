import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { UserActivity } from "@/lib/user-types";

interface UsersMobileCardProps {
    users: UserActivity[];
}

export default function UsersMobileCard({
    users,
}: UsersMobileCardProps) {
    return (
        <div className="space-y-4 lg:hidden">
        {users.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}
            className="block rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
                <div className="flex gap-4">
                    <div>
                        <h2 className="font-semibold text-gray-900">
                        {user.name}
                        </h2>
                        <p className="text-sm text-gray-400">
                        @{user.username}
                        </p>
                    </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-gray-50 p-4 text-center">
                <div>
                    <p className="text-xl font-bold text-gray-900">
                        {user.totalPosts}
                    </p>
                    <p className="text-xs text-gray-500">
                        Posts
                    </p>
                </div>

                <div>
                    <p className="text-xl font-bold text-gray-900">
                        {user.completedTodos}
                    </p>
                    <p className="text-xs text-gray-500">
                        Completed
                    </p>
                </div>

                <div>
                    <p className="text-xl font-bold text-orange-600">
                        {user.pendingTodos}
                    </p>
                    <p className="text-xs text-gray-500">
                        Pending
                    </p>
                </div>
            </div>
            </Link>
        ))}
        </div>
    );
}