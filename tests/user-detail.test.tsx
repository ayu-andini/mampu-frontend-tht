import { render, screen } from "@testing-library/react";
import UserDetailCard from "@/features/users/components/detail-card";
import UserPosts from "@/features/users/components/posts";
import UserTodos from "@/features/users/components/todos";
import { mockUsers } from "./mock-users";

describe("User Details", () => {
    const user = mockUsers[0];

    it("renders user detail information", () => {
        render(<UserDetailCard user={user} />);

        expect(
        screen.getByText("Leanne Graham")
        ).toBeInTheDocument();

        expect(
        screen.getByRole("heading", {
            name: /company/i,
        })
        ).toBeInTheDocument();
    });

    it("renders posts section", () => {
        render(<UserPosts posts={[
            {
                id: 1,
                userId: 1,
                title: "Test Post",
                body: "Test Body",
            },
            ]}
        />
        );

        expect( screen.getByText("Test Post")
        ).toBeInTheDocument();
    });

    it("renders todos section", () => {
        render(<UserTodos todos={[
            {
                id: 1,
                userId: 1,
                title: "Test Todo",
                completed: false,
            },
            ]}
        />
        );

        expect(
        screen.getByText("Test Todo")
        ).toBeInTheDocument();
    });

    it("shows empty posts state", () => {
        render(<UserPosts posts={[]} />);

        expect(
        screen.getByText(/no posts available/i)
        ).toBeInTheDocument();
    });

    it("shows empty todos state", () => {
        render(<UserTodos todos={[]} />);

        expect(
        screen.getByText(/no todos available/i)
        ).toBeInTheDocument();
    });
});