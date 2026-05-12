import { User } from "@/lib/user-types";

// Users Filter Utility
export function filterUsers(users: User[], search: string) {
    return users.filter((user) => {
        const keyword = search.toLowerCase();

        return (
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
        );
    });
}

export function sortUsers(users: User[]) {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
}