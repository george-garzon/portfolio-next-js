import FadeIn from "./ui/fade-in";

export default function About() {
    return (
        <section id="about">
            <FadeIn>
                <h2 className="text-xl font-bold">About</h2>
            </FadeIn>

            <FadeIn>
                <div className="prose max-w-full text-sm text-muted-foreground dark:prose-invert whitespace-pre-wrap">
                    <p>With over half a decade of development experience, I specialize in frontend and backend web applications. Have worked on small-large-scale API integrations. Designed beautiful data tables. Managed team members conducted code reviews, self-hosted with docker. I’ve worked closely with teams and departments collaborating to gain a better perspective and deliver a more efficient product.</p>
                </div>
            </FadeIn>
        </section>
    );
}
