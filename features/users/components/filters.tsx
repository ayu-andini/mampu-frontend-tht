"use client";

import Input from "@/components/ui/input";

interface UsersFiltersProps {
    search: string;
    onlyPending: boolean;
    sortByPending: boolean;
    onSearchChange: (value: string) => void;
    onPendingChange: () => void;
    onSortChange: () => void;
}

export default function UsersFilters({
    search,
    onlyPending,
    sortByPending,
    onSearchChange,
    onPendingChange,
    onSortChange,
}: UsersFiltersProps) {
    return (
        <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <Input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) =>
            onSearchChange(e.target.value)
            } />

        <label className="flex items-center gap-2 text-sm">
            <input
            type="checkbox"
            checked={onlyPending}
            onChange={onPendingChange} />

            Users with &gt;10 Pending Todos
        </label>    

        <label className="flex items-center gap-2 text-sm">
            <input
            type="checkbox"
            checked={sortByPending}
            onChange={onSortChange} />

            Sort by Pending Todos
        </label>
        </div>
    );
}