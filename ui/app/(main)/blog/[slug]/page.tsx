import { getPost, getPosts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

function renderInlineMarkdown(text: string) {
    const segments = text.split(/(`[^`]+`)/g);

    return segments.map((segment, index) => {
        if (segment.startsWith("`") && segment.endsWith("`")) {
            return (
                <code key={index} className="rounded bg-muted px-1 py-0.5 font-mono text-sm">
                    {segment.slice(1, -1)}
                </code>
            );
        }

        return segment;
    });
}

function MarkdownContent({ content }: { content: string }) {
    const blocks = content.split(/\n{2,}/);

    return (
        <div className="space-y-5 text-sm leading-7 text-muted-foreground">
            {blocks.map((block, index) => {
                if (block.startsWith("# ")) {
                    return (
                        <h2 key={index} className="text-2xl font-semibold tracking-tight text-foreground">
                            {block.replace(/^# /, "")}
                        </h2>
                    );
                }

                if (block.startsWith("## ")) {
                    return (
                        <h3 key={index} className="pt-2 text-xl font-semibold tracking-tight text-foreground">
                            {block.replace(/^## /, "")}
                        </h3>
                    );
                }

                if (block.startsWith("- ")) {
                    return (
                        <ul key={index} className="list-disc space-y-2 pl-5">
                            {block.split("\n").map((item) => (
                                <li key={item}>{renderInlineMarkdown(item.replace(/^- /, ""))}</li>
                            ))}
                        </ul>
                    );
                }

                return <p key={index}>{renderInlineMarkdown(block)}</p>;
            })}
        </div>
    );
}

export function generateStaticParams() {
    return getPosts().map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-2xl space-y-8 pb-16">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Back to blog
            </Link>

            <header className="space-y-3">
                <p className="text-xs text-muted-foreground">{post.date}</p>
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">{post.title}</h1>
                <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
            </header>

            <MarkdownContent content={post.content} />
        </article>
    );
}
