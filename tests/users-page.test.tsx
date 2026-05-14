import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersFilters from "@/features/users/components/filters";
import UsersTable from "@/features/users/components/table";
import { mockUsers } from "./mock-users";

describe("Users List", () => {
    it("renders users with activity signals", () => {
        render(<UsersTable users={mockUsers} />);

        expect( screen.getByText("Leanne Graham")
        ).toBeInTheDocument();

        expect( screen.getByText("Chelsey Dietrich")
        ).toBeInTheDocument();

        expect( screen.getAllByText("10")[0]
        ).toBeInTheDocument();
    });

    it("filters users by search input", async () => {
        const user = userEvent.setup();
        const onSearchChange = jest.fn();

        render( <UsersFilters
            search=""
            onlyPending={false}
            sortByPending={false}
            onSearchChange={onSearchChange}
            onPendingChange={jest.fn()}
            onSortChange={jest.fn()} />
        );

        const input = screen.getByPlaceholderText(
        /search by name/i
        );

        await user.type(input, "Leanne");

        expect(onSearchChange).toHaveBeenCalled();
    });

    it("toggles pending filter", async () => {
        const user = userEvent.setup();
        const onPendingChange = jest.fn();

        render( <UsersFilters
            search=""
            onlyPending={false}
            sortByPending={false}
            onSearchChange={jest.fn()}
            onPendingChange={onPendingChange}
            onSortChange={jest.fn()} />
        );

        const button = screen.getByText(
        /users with >10 pending todos/i
        );

        await user.click(button);

        expect(onPendingChange).toHaveBeenCalled();
    });

    it("shows empty state", () => {
        render(<UsersTable users={[]} />);

        expect(
            screen.getByText(/no matching users/i)
        ).toBeInTheDocument();
    });
});