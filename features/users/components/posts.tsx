import { Post } from "@/lib/user-types";

interface UserPostsProps {
    posts: Post[];
}

export default function UserPosts({
    posts,
}: UserPostsProps) {
    return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
            Posts
            </h2>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
            {posts.length} Posts
            </span>
        </div>

        {posts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 py-10 text-center text-gray-500">
            No posts available.
            </div>
        ) : (
            <div className="space-y-4">
            {posts.map((post) => (
                <article
                key={post.id}
                className="rounded-xl border border-gray-200 p-4"
                >
                <h3 className="line-clamp-2 font-semibold capitalize">
                    {post.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {post.body}
                </p>
                </article>
            ))}
            </div>
        )}
    </section>
    );
}