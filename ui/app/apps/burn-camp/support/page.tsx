import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Burn Camp Support",
    description: "Help and support for the Burn Camp app.",
};

export default function BurnCampSupportPage() {
    return (
        <div className="max-w-xl space-y-8 pb-20">
            <header className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Help center</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Burn Camp Support</h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Need help with calories burned, exercise minutes, friends, or leaderboard data? Contact support below.
                </p>
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

            <section className="rounded-xl border bg-card p-6">
                <h2 className="text-lg font-semibold">Common questions</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                        <h3 className="font-medium text-foreground">What does Burn Camp track?</h3>
                        <p className="mt-1">Burn Camp is focused on calories burned, exercise minutes, friend competition, and leaderboard progress.</p>
                    </div>
                    <div>
                        <h3 className="font-medium text-foreground">How do leaderboards work?</h3>
                        <p className="mt-1">Leaderboards rank participants using activity data such as calories burned and exercise minutes.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
