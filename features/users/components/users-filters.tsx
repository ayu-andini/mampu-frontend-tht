"use client";

import Input from "@/components/ui/input";

interface UsersFiltersProps {
    search: string;
    onSearchChange: (value: string) => void;
}

export default function UsersFilters({
    search,
    onSearchChange,
    }: UsersFiltersProps) {
    return (
        <div className="mb-4">
        <Input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
        />
        </div>
    );
}