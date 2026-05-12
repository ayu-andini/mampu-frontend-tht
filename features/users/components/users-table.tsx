import { User } from "@/lib/user-types";
import Link from "next/link";

interface UsersTableProps {
    users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
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
                    </Link></td>

                <td className="px-4 py-3">{user.email}</td>

                <td className="px-4 py-3">
                    <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                    >
                    {user.website}
                    </a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}