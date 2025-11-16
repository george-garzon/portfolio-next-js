import { posts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
    return (
        <section className="space-y-6">
            {/* Header */}
            <div className="opacity-100 blur-0 -translate-y-1">
                <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
            </div>

            {/* Blog List */}
            {posts.map((post) => (
                <div
                    key={post.slug}
                    className="opacity-100 blur-0 -translate-y-1"
                >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col space-y-1 mb-4">
                        <div className="w-full flex flex-col">
                            <p className="tracking-tight">{post.title}</p>
                            <p className="h-6 text-xs text-muted-foreground">{post.date}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    );
}
