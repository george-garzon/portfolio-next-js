import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Burn Camp | Compete on calories and exercise minutes",
    description: "Burn Camp helps you track calories burned and exercise minutes while competing with friends on leaderboards.",
};

export default function BurnCampLandingPage() {
    return (
        <div className="space-y-16 pb-20">
            <section className="space-y-6 py-10 sm:py-16">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Burn Camp for iOS</p>
                <h1 className="max-w-xl text-5xl font-bold tracking-tighter sm:text-7xl">
                    Turn workouts into friendly competition.
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                    Burn Camp helps you track calories burned and exercise minutes, then compete with friends for the top leaderboard spot.
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/apps/burn-camp/support"
                        className="inline-flex rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
                    >
                        Get support
                    </Link>
                    <Link
                        href="/apps/burn-camp/privacy"
                        className="inline-flex rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                    >
                        Privacy policy
                    </Link>
                </div>
            </section>

            <section className="grid gap-3 sm:grid-cols-3">
                {[
                    ["Track effort", "Log calories burned and exercise minutes from your activity."],
                    ["Compete", "Challenge friends and climb the leaderboard through consistent movement."],
                    ["Stay motivated", "Use simple progress signals to build momentum across the week."],
                ].map(([title, description]) => (
                    <div key={title} className="rounded-xl border bg-card p-5">
                        <h2 className="font-semibold">{title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                    </div>
                ))}
            </section>

            <section className="rounded-xl border bg-card p-6">
                <h2 className="text-lg font-semibold">About Burn Camp</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Burn Camp is built for people who want a lightweight way to make workouts more social. The app focuses on practical fitness metrics:
                    calories burned, exercise minutes, friend rankings, and leaderboard progress.
                </p>
            </section>
        </div>
    );
}
