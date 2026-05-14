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
    search, onlyPending, sortByPending,
    onSearchChange, onPendingChange, onSortChange
}: UsersFiltersProps) {
    return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center">
            <div className="w-full md:flex-1">
                <Input
                    type="text"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)} />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className={`flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    onlyPending
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-white text-gray-600" }`}>
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={onlyPending}
                        onChange={onPendingChange} />
                    <span className="whitespace-nowrap">Users with &gt;10 Pending Todos</span>
                </label>

                <label className={`flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    sortByPending
                        ? "border-orange-200 bg-orange-50 text-orange-700"
                        : "border-gray-200 bg-white text-gray-600" }`}>
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        checked={sortByPending}
                        onChange={onSortChange} />
                    <span className="whitespace-nowrap">Sort by Pending Todos</span>
                </label>
            </div>
        </div>
    </div>
    );
}