const sections = [
    {
        title: "Information we collect",
        body:
            "InstaDL may collect account information when you sign in, including your Firebase user ID, email address, display name, and authentication provider. When you save content to your creator library, we may save the submitted URL, caption, username, media ID, and the time the library entry was created.",
    },
    {
        title: "How we use information",
        body:
            "We use information to provide core app features, save and sync your creator library, manage subscriptions, prevent abuse, troubleshoot issues, and improve app reliability.",
    },
    {
        title: "Third-party services",
        body:
            "The app uses services such as Firebase for authentication and history storage, RevenueCat for subscription management, and platform app stores for purchases. Those services process information according to their own policies.",
    },
    {
        title: "Third-party content",
        body:
            "InstaDL is not affiliated with Instagram, Meta, or any social platform. You are responsible for making sure you own or have permission to save, manage, or reuse any content you access through the app.",
    },
    {
        title: "Data retention and deletion",
        body:
            "Creator library entries may remain associated with your account until they are deleted or your account data is removed. If you want account or library data removed, contact support from the app.",
    },
    {
        title: "Security",
        body:
            "We use Firebase and platform authentication systems to help protect account access. No system is perfectly secure, so avoid saving sensitive information in descriptions or URLs.",
    },
];

export const metadata = {
    title: "InstaDL Privacy Policy",
    description: "Privacy Policy for the InstaDL app.",
};

export default function InstaDLPrivacyPage() {
    return (
        <article className="max-w-2xl space-y-10 pb-20">
            <header className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Legal
                </p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                    Last updated: August 11, 2026
                </p>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                    This policy explains how InstaDL handles information when you use the app.
                </p>
            </header>

            <div className="space-y-8">
                {sections.map((section) => (
                    <section key={section.title} className="space-y-3">
                        <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                        <p className="leading-relaxed text-muted-foreground">{section.body}</p>
                    </section>
                ))}
            </div>

            <p className="border-t pt-6 text-sm leading-relaxed text-muted-foreground">
                If you have questions about this policy, contact support from the app.
            </p>
        </article>
    );
}
