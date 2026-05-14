"use client";

import { useMemo, useState } from "react";
import Loading from "@/components/ui/loading";
import UsersFilters from "@/features/users/components/filters";
import UsersMobileCard from "@/features/users/components/mobile-card";
import UsersTable from "@/features/users/components/table";
import { useUsers } from "@/features/users/hooks/use";
import UsersStats from "@/features/users/components/stats";
import { filterUsers, filterUsersWithPendingTodos, 
    sortUsersByName, sortUsersByPendingTodos } 
    from "@/lib/user-filter";

export default function UsersPage() {
    const [search, setSearch] = useState("");
    const [onlyPending, setOnlyPending] = useState(false);
    const [sortByPending, setSortByPending] = useState(false);
    const { data, isLoading, isError } = useUsers();

    const processedUsers = useMemo(() => {
        if (!data) return [];

        let users = filterUsers(data, search);

        if (onlyPending) {
            users = filterUsersWithPendingTodos(users); }
        if (sortByPending) {
            return sortUsersByPendingTodos(users); }
            return sortUsersByName(users);
    }, [ data, search, onlyPending, sortByPending ]);

    if (isLoading) {
        return <Loading />; }

    if (isError) {
        return (
        <div className="py-20 text-center text-red-500">
            Failed to load users workspace.
        </div>
        ); }

    return (
    <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10">

        <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            User Operations Workspace
            </h1>
            <p className="mt-2 text-gray-500">
            Monitor user activity, posts, and todo progress.
            </p>
        </div>

        <UsersFilters
            search={search}
            onlyPending={onlyPending}
            sortByPending={sortByPending}
            onSearchChange={setSearch}
            onPendingChange={() =>setOnlyPending(!onlyPending)}
            onSortChange={() =>setSortByPending(!sortByPending)} />

        <UsersStats users={processedUsers} />
        {processedUsers.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 py-16 text-center">
            No matching users found.
            </div>
        ) : (
            <>
            <UsersTable users={processedUsers} />
            <UsersMobileCard users={processedUsers} />
            </>
        )}
        </div>
        </main>
    );
}