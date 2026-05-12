"use client";

import { useMemo, useState } from "react";

import Loading from "@/components/ui/loading";

import UsersFilters from "@/features/users/components/users-filters";
import UsersTable from "@/features/users/components/users-table";

import { useUsers } from "@/features/users/hooks/use-users";

import { filterUsers, sortUsers,
} from "@/lib/user-filter";

export default function UsersPage() {
    const [search, setSearch] = useState("");

    const { data, isLoading, isError } = useUsers();

    const filteredUsers = useMemo(() => {
        if (!data) return [];

        const filtered = filterUsers(data, search);

        return sortUsers(filtered);
    }, [data, search]);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return (
            <div className="py-10 text-center text-red-500">
                Failed to load users.
            </div>
        );
    }

return (
        <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold">Users List</h1>

        <UsersFilters
            search={search}
            onSearchChange={setSearch}
        />

        {filteredUsers.length === 0 ? (
            <div className="rounded-xl border border-gray-200 py-10 text-center">
            No users found.
            </div>
        ) : (
            <UsersTable users={filteredUsers} />
        )}
        </main>
        );
}