import Link from "next/link";

export default function InstadlLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="min-h-[70dvh]">
            <nav className="mb-16 flex items-center justify-between border-b pb-4">
                <Link href="/apps/instadl/landing" className="font-semibold tracking-tight">
                    InstaDL
                </Link>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <Link href="/apps/instadl/landing" className="hover:text-foreground">About</Link>
                    <Link href="/apps/instadl/support" className="hover:text-foreground">Support</Link>
                </div>
            </nav>
            {children}
        </main>
    );
}
