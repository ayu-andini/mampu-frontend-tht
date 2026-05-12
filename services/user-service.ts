import { User } from "@/lib/user-types";
import { Post, Todo } from "@/lib/user-types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// fetching data user
export async function getUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

// fetching data user by id
export async function getUserById(id: string): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    const data = await response.json();

    if (!data.id) {
        throw new Error("User not found");
    }

    return data;
}

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}/posts`);

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    return response.json();
}

export async function getTodos(): Promise<Todo[]> {
    const response = await fetch(`${BASE_URL}/todos`);

    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }

    return response.json();
}

export async function getUserPosts(
    userId: string
): Promise<Post[]> {
    const response = await fetch(
        `${BASE_URL}/posts?userId=${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch user posts");
    }

    return response.json();
}

export async function getUserTodos(
    userId: string
): Promise<Todo[]> {
    const response = await fetch(
        `${BASE_URL}/todos?userId=${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch user todos");
    }

    return response.json();
}