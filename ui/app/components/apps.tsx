import Link from "next/link";
import FadeIn from "./ui/fade-in";

export default function Apps() {
    return (
        <section id="apps" className="space-y-6">
            <FadeIn>
                <div>
                    <h2 className="text-xl font-bold">Apps</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Independent apps I build and maintain.
                    </p>
                </div>
            </FadeIn>

            <FadeIn>
                <article className="rounded-lg border bg-card p-5 text-card-foreground">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                                iOS App
                            </p>
                            <h3 className="mt-1 text-xl font-semibold tracking-tight">InstaDL</h3>
                            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                                A simple, focused way to save and manage the content that inspires you.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1">
                                <span className="inline-flex items-center rounded-md border border-transparent bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground">
                                    Flutter
                                </span>
                            </div>
                        </div>
                        {/*<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-xl font-bold text-background">*/}
                        {/*    I*/}
                        {/*</div>*/}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        <Link
                            href="/apps/instadl/landing"
                            className="rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-80"
                        >
                            Learn more
                        </Link>
                        <Link
                            href="/apps/instadl/support"
                            className="rounded-md border px-3 py-2 text-xs font-medium transition-colors hover:bg-accent"
                        >
                            Support
                        </Link>
                    </div>
                </article>
            </FadeIn>
        </section>
    );
}
