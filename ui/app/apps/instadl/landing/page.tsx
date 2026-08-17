import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Instadl | Save what inspires you",
    description: "Meet Instadl, a simple and focused way to save and manage inspiring content.",
};

export default function InstadlLandingPage() {
    return (
        <div className="space-y-16 pb-20">
            <section className="space-y-6 py-10 sm:py-16">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Instadl for iOS</p>
                <h1 className="max-w-xl text-5xl font-bold tracking-tighter sm:text-7xl">
                    Save what inspires you.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                    Instadl gives you a clean, focused place to keep and manage the content you want to revisit.
                </p>
                <Link
                    href="/apps/instadl/support"
                    className="inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
                >
                    Get support
                </Link>
            </section>

            <section className="grid gap-3 sm:grid-cols-3">
                {[
                    ["Save", "Keep inspiring content close at hand."],
                    ["Organize", "Build a collection that stays easy to navigate."],
                    ["Revisit", "Come back to the things worth remembering."],
                ].map(([title, description]) => (
                    <div key={title} className="rounded-xl border bg-card p-5">
                        <h2 className="font-semibold">{title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
