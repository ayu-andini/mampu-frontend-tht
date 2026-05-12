import { User } from "../lib/user-types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

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