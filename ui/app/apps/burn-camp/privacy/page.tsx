import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Burn Camp Privacy Policy",
    description: "Privacy policy for the Burn Camp app.",
};

export default function BurnCampPrivacyPage() {
    return (
        <article className="max-w-2xl space-y-8 pb-20">
            <header className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Privacy Policy</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Burn Camp Privacy Policy</h1>
                <p className="text-sm text-muted-foreground">Effective date: August 27, 2026</p>
            </header>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Overview</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Burn Camp helps users track exercise minutes, calories burned, and friendly leaderboard progress. This policy explains the types of information the app may collect and how that information is used.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Information we may collect</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>Account information, such as your name, email address, profile details, or friend connections if you create an account.</li>
                    <li>Fitness activity information, such as calories burned, exercise minutes, workout totals, leaderboard scores, and challenge progress.</li>
                    <li>App usage information, such as basic diagnostics, feature usage, crash reports, and device information used to maintain and improve the app.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">How we use information</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>To provide core Burn Camp features, including tracking, friend competition, and leaderboards.</li>
                    <li>To show your activity and ranking to friends or groups you choose to compete with.</li>
                    <li>To troubleshoot issues, improve app performance, and protect the service from misuse.</li>
                    <li>To respond to support requests.</li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Sharing</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Burn Camp is designed around friendly competition, so activity totals, rankings, profile details, and leaderboard information may be visible to friends, groups, or other participants depending on the features you use. We do not sell personal information.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Health and fitness data</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    If Burn Camp connects with device fitness services or health platforms, that data is used to power app features you enable. Permissions can typically be managed through your device settings.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Data retention and deletion</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    We keep information for as long as needed to provide Burn Camp, maintain records, resolve disputes, and comply with applicable obligations. You may request account or data deletion by contacting support.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Contact</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Questions about this policy can be sent to{" "}
                    <a href="mailto:george.garzon@outlook.com" className="text-blue-500 hover:underline">
                        george.garzon@outlook.com
                    </a>.
                </p>
            </section>
        </article>
    );
}
