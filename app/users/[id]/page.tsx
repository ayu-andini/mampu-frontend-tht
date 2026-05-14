import Link from "next/link";
import { notFound } from "next/navigation";
import UserDetailCard from "@/features/users/components/detail-card";
import { getUserById } from "@/services/user-service";
import type { Metadata } from "next";
import UserPosts from "@/features/users/components/posts";
import UserTodos from "@/features/users/components/todos";
import { getUserPosts, getUserTodos } from "@/services/user-service";

interface UserDetailsPageProps {
    params: Promise<{
    id: string;
    }>;
}

export async function generateMetadata({
    params,
}: UserDetailsPageProps): Promise<Metadata> {
    const { id } = await params;

    try {
    const user = await getUserById(id);
    
    return {
        title: `${user.name} | User Details`,
        description: `Details page for ${user.name}`,
    };

    } catch {
    return {
        title: "User Not Found",
    };
}}

export default async function UserDetailsPage({
    params,
}: UserDetailsPageProps) {
    const { id } = await params;

    // lakukan fetching data di luar blok return
    let user;
    let posts = [];
    let todos = [];

    try {
        const [
            userData,
            userPosts,
            userTodos,
        ] = await Promise.all([
            getUserById(id),
            getUserPosts(id),
            getUserTodos(id),
        ]);

        user = userData;
        posts = userPosts;
        todos = userTodos;
    } catch {
        // jika API error atau user tidak ditemukan
        notFound();
    }

    // memastikan jika user null/undefined
    if (!user) {
        notFound();
    }

    // return JSX di luar blok try/catch
    return (
    <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
            <Link
            href="/users"
            className="mb-6 inline-block text-sm text-blue-600 hover:underline"
            >
            ← Back to list
            </Link>

            <div className="space-y-6">
            <UserDetailCard user={user} />

            <div className="grid gap-6 lg:grid-cols-2">
                <UserPosts posts={posts} />
                <UserTodos todos={todos} />
            </div>
            </div>
        </div>
    </main>
        );
}