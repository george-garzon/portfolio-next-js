import Link from "next/link";

export default function BurnCampLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="min-h-[70dvh]">
            <nav className="mb-16 flex items-center justify-between border-b pb-4">
                <Link href="/apps/burn-camp/landing" className="font-semibold tracking-tight">
                    Burn Camp
                </Link>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <Link href="/apps/burn-camp/landing" className="hover:text-foreground">About</Link>
                    <Link href="/apps/burn-camp/support" className="hover:text-foreground">Support</Link>
                    <Link href="/apps/burn-camp/privacy" className="hover:text-foreground">Privacy</Link>
                    <Link href="/apps/burn-camp/terms" className="hover:text-foreground">Terms</Link>
                </div>
            </nav>
            {children}
        </main>
    );
}
