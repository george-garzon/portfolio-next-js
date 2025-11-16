import FadeIn from "./ui/fade-in";

export default function Hero() {
    return (
        <section id="hero">
            <FadeIn>
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <FadeIn>
                <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Hi, I'm George 👋
                </span>
                            </FadeIn>

                            <FadeIn>
                <span className="inline-block max-w-[600px] md:text-xl">
                  Full Stack Developer at Olympia Pharmaceuticals
                </span>
                            </FadeIn>
                        </div>

                        <FadeIn>
              <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
                <img className="aspect-square w-full h-full" src="/headshot.jpg" alt="Me" />
              </span>
                        </FadeIn>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
