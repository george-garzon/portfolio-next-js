import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Burn Camp Terms of Use",
    description: "Terms of use for the Burn Camp app.",
};

export default function BurnCampTermsPage() {
    return (
        <article className="max-w-2xl space-y-8 pb-20">
            <header className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Terms of Use</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Burn Camp Terms of Use</h1>
                <p className="text-sm text-muted-foreground">Effective date: August 27, 2026</p>
            </header>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Acceptance</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    By using Burn Camp, you agree to these terms. If you do not agree, do not use the app.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">App purpose</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Burn Camp is a fitness and social competition app focused on calories burned, exercise minutes, friend challenges, and leaderboard rankings.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Not medical advice</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Burn Camp is provided for general fitness tracking and motivation only. It is not medical advice, diagnosis, or treatment. Consult a qualified healthcare professional before starting or changing an exercise program, especially if you have a medical condition or health concern.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">User responsibilities</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Use Burn Camp lawfully and respectfully.</li>
                    <li>Provide accurate information when using tracking, profile, or leaderboard features.</li>
                    <li>Do not manipulate scores, abuse leaderboards, harass users, or interfere with the app.</li>
                    <li>Exercise safely and within your personal limits.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Leaderboards and social features</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Burn Camp may display activity totals, rankings, profile details, and challenge progress to friends, groups, or other participants. Leaderboard results may change as activity data is updated, corrected, or removed.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Availability and changes</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Burn Camp may be updated, changed, suspended, or discontinued at any time. Features may vary by platform, account status, location, device permissions, or third-party service availability.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Questions about these terms can be sent to{" "}
                    <a href="mailto:george.garzon@outlook.com" className="text-blue-500 hover:underline">
                        george.garzon@outlook.com
                    </a>.
                </p>
            </section>
        </article>
    );
}
