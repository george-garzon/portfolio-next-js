import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "InstaDL Support",
    description: "Help and support for the InstaDL app.",
};

export default function InstaDLSupportPage() {
    return (
        <div className="max-w-xl space-y-8 pb-20">
            <header className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Help center</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">InstaDL Support</h1>
            </header>

            <section className="rounded-xl border bg-card p-6">
                <h2 className="text-lg font-semibold">Contact support</h2>
                <a
                    href="mailto:george.garzon@outlook.com"
                    className="mt-3 inline-flex text-sm text-blue-500 hover:underline"
                >
                    george.garzon@outlook.com
                </a>
            </section>
        </div>
    );
}
