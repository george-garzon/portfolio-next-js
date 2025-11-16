import FadeIn from "./ui/fade-in";

export default function Contact() {
    return (
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center w-full py-12">
                <FadeIn>
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            Contact
                        </div>

                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Get in Touch
                        </h2>

                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                            <a className="text-blue-500 hover:underline" href="https://x.com/georgegarzon_" target="_blank">
                                Shoot me a DM on Twitter/X
                            </a>
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
