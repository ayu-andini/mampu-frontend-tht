import { Post, Todo, User, UserActivity } from "./user-types";

export function enrichUsersWithActivity(
    users: User[],
    posts: Post[],
    todos: Todo[]
): UserActivity[] {
    return users.map((user) => {
        const userPosts = posts.filter(
        (post) => post.userId === user.id
        );

        const userTodos = todos.filter(
        (todo) => todo.userId === user.id
        );

        const completedTodos = userTodos.filter(
        (todo) => todo.completed
        );

        const pendingTodos = userTodos.filter(
        (todo) => !todo.completed
        );

        return {
        ...user,
        totalPosts: userPosts.length,
        completedTodos: completedTodos.length,
        pendingTodos: pendingTodos.length,
        };
    });
}

export function filterUsers(
    users: UserActivity[],
    search: string
) {
    return users.filter((user) => {
        const keyword = search.toLowerCase();

        return (
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
        );});
}

export function sortUsersByName(
    users: UserActivity[]
) {
    return [...users].sort((a, b) =>
        a.name.localeCompare(b.name)
    );
}

export function sortUsersByPendingTodos(
    users: UserActivity[]
) {
    return [...users].sort(
        (a, b) => b.pendingTodos - a.pendingTodos
    );
}

export function filterUsersWithPendingTodos(
    users: UserActivity[]
) {
    return users.filter(
        (user) => user.pendingTodos > 10
    );
}