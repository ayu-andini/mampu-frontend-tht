import Link from "next/link";
import { UserActivity } from "@/lib/user-types";

interface UsersTableProps {
    users: UserActivity[];
}

export default function UsersTable({
    users,
}: UsersTableProps) {
    return (
    <div className="hidden overflow-x-auto rounded-2xl border border-gray-200 md:block">
        <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
            <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                Website
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                Posts
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                Completed
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                Pending
                </th>
            </tr>
            </thead>

            <tbody>
            {users.map((user) => (
                <tr
                key={user.id}
                className="border-t border-gray-200 hover:bg-gray-50"
                >
                <td className="px-4 py-3">
                    <Link href={`/users/${user.id}`}>
                    {user.name}
                    </Link>
                </td>
                <td className="px-4 py-3">
                    {user.email}
                </td>
                <td className="px-4 py-3">
                    {user.website}
                </td>
                <td className="px-4 py-3">
                    {user.totalPosts}
                </td>
                <td className="px-4 py-3">
                    {user.completedTodos}
                </td>
                <td className="px-4 py-3">
                    {user.pendingTodos}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}