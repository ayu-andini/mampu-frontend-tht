"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts, getTodos, getUsers } from "@/services/user-service";
import { enrichUsersWithActivity } from "@/lib/user-filter";

export function useUsers() {
    return useQuery({
        queryKey: ["users-workspace"],

        queryFn: async () => {
        const [users, posts, todos] =
            await Promise.all([
            getUsers(),
            getPosts(),
            getTodos(),
            ]);

        return enrichUsersWithActivity(
            users,
            posts,
            todos
        );
        },
    });
}