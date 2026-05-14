import { Todo } from "@/lib/user-types";

interface UserTodosProps {
    todos: Todo[];
}

export default function UserTodos({
    todos,
}: UserTodosProps) {
    return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
                Todos
            </h2>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                {todos.length} Todos
            </span>
        </div>

        {todos.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 py-10 text-center text-gray-500">
                No todos available.
            </div>
        ) : (
            <div className="space-y-3">
            {todos.map((todo) => (
                <div key={todo.id}
                className="flex items-start gap-3 rounded-xl border border-gray-200 p-4" >
                <div className={`mt-1 h-3 w-3 rounded-full ${
                    todo.completed
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`} />

                <div className="flex-1">
                    <p className={`text-sm ${
                        todo.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`} >
                        {todo.title}
                    </p>
                </div>

                <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                    todo.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`} >
                        {todo.completed
                        ? "Completed"
                        : "Pending"}
                </span>
                </div>
            ))}
            </div>
        )}
    </section>
    );
}