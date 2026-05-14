import { CheckCircle, Clock3, FileText, Users } from "lucide-react";
import { UserActivity } from "@/lib/user-types";

interface UsersStatsProps {
    users: UserActivity[];
}

export default function UsersStats({
    users,
}: UsersStatsProps) {
    const totalUsers = users.length;

    const totalPosts = users.reduce(
        (acc, user) => acc + user.totalPosts,
        0
    );
    const completedTodos = users.reduce(
        (acc, user) => acc + user.completedTodos,
        0
    );
    const pendingTodos = users.reduce(
        (acc, user) => acc + user.pendingTodos,
        0
    );
    const stats = [
        {
            label: "Total Users",
            value: totalUsers,
            icon: Users,
            bg: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            label: "Total Posts",
            value: totalPosts,
            icon: FileText,
            bg: "bg-green-50",
            iconColor: "text-green-600",
        },
        {
            label: "Completed Todos",
            value: completedTodos,
            icon: CheckCircle,
            bg: "bg-purple-50",
            iconColor: "text-purple-600",
        },
        {
            label: "Pending Todos",
            value: pendingTodos,
            icon: Clock3,
            bg: "bg-orange-50",
            iconColor: "text-orange-600",
        },
    ];

    return (
        <div className="mb-8 grid gap-4 grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
            const Icon = item.icon;

            return (
            <div key={item.label}
                className={`rounded-2xl border border-gray-100 ${item.bg} p-5 shadow-sm`} >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">
                        {item.label}
                        </p>
                        <h3 className="mt-2 text-3xl font-bold text-gray-900">
                        {item.value}
                        </h3>
                    </div>
                    <div className="rounded-xl bg-white p-3 shadow-sm">
                        <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                </div>
            </div>
            );
        })}
        </div>
    );
}