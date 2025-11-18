import FadeIn from "./ui/fade-in";

export default function About() {
    return (
        <section id="about">
            <FadeIn>
                <h2 className="text-xl font-bold">About</h2>
            </FadeIn>

            <FadeIn>
                <div className="prose max-w-full text-sm text-muted-foreground dark:prose-invert whitespace-pre-wrap">
                    <p>With 5+ years of development experience, I build everything from clean frontends to reliable backend systems. I’ve integrated complex APIs, designed beautiful data tables, and led teams through code reviews and best practices.</p>
                </div>
            </FadeIn>
        </section>
    );
}
