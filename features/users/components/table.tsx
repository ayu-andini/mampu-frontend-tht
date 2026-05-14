import Link from "next/link";
import { UserActivity } from "@/lib/user-types";

interface UsersTableProps {
    users: UserActivity[];
}

export default function UsersTable({
    users,
}: UsersTableProps) {
    // EMPTY STATE
    if (users.length === 0) {
        return (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <h2 className="text-lg font-semibold text-gray-700">
            No matching users found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
            Try adjusting your search or filters.
            </p>
        </div>
        );
    }
    
    return (
    <div className="hidden overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:block">
        <table className="min-w-full bg-white" aria-label="Users activity table">
            <thead className="bg-gray-50">
            <tr className="border-t border-gray-100 transition hover:bg-gray-50">
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                    Name
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                    Email
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                    Website
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                    Posts
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                    Completed
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-semibold">
                    Pending
                </th>
            </tr>
            </thead>

            <tbody>
            {users.map((user) => (
                <tr key={user.id}
                className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-5">
                    <Link href={`/users/${user.id}`}
                        className="group flex items-center gap-4">
                        <div>
                        <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {user.name}
                        </p>
                        <p className="text-sm text-gray-400">
                            @{user.username}
                        </p>
                        </div>
                    </Link>
                    </td>
                    <td className="px-4 py-3">
                        {user.email}
                    </td>
                    <td className="px-4 py-3">
                        {user.website}
                    </td>
                    <td className="px-6 py-3 items-center justify-center">
                        {user.totalPosts}
                    </td>
                    <td className="px-10 py-3">
                        {user.completedTodos}
                    </td>
                    <td className="pl-10 py-3">
                        {user.pendingTodos}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}