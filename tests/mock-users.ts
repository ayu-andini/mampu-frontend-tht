import { UserActivity } from "@/lib/user-types";

export const mockUsers: UserActivity[] = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "leanne@test.com",
        phone: "123",
        website: "test.com",

        address: {
        street: "Street",
        suite: "Suite",
        city: "City",
        zipcode: "12345",
        },

        company: {
        name: "Company",
        catchPhrase: "Catchphrase",
        },

        totalPosts: 10,
        completedTodos: 5,
        pendingTodos: 2,
    },

    {
        id: 2,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "chelsey@test.com",
        phone: "123",
        website: "test.com",

        address: {
        street: "Street",
        suite: "Suite",
        city: "City",
        zipcode: "12345",
        },

        company: {
        name: "Company",
        catchPhrase: "Catchphrase",
        },

        totalPosts: 4,
        completedTodos: 1,
        pendingTodos: 10,
    },
];