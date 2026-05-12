import Link from "next/link";
import { notFound } from "next/navigation";
import UserDetailCard from "@/features/users/components/user-detail-card";
import { getUserById } from "@/services/user-service";
import type { Metadata } from "next";

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
    try {
        user = await getUserById(id);
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
        <main className="mx-auto max-w-4xl px-4 py-10">
        <Link
            href="/users"
            className="mb-6 inline-block text-sm text-blue-600 hover:underline"
        >
            ← Back to list
        </Link>

        <UserDetailCard user={user} />
        </main>
    );
}