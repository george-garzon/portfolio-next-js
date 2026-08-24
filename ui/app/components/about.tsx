import FadeIn from "./ui/fade-in";

export default function About() {
    return (
        <section id="about">
            <FadeIn>
                <h2 className="text-xl font-bold">About</h2>
            </FadeIn>

            <FadeIn>
                <div className="prose max-w-full space-y-4 text-sm leading-7 text-muted-foreground dark:prose-invert">
                    <p>
                        I&apos;m a full-stack engineer, builder, and lifelong learner. I graduated from the
                        University of South Florida with a background in marketing and entrepreneurship, then built
                        my career by shipping practical software for businesses that need reliable systems, clean
                        interfaces, and measurable improvements.
                    </p>

                    <p>
                        My most notable work has been in healthcare technology with Olympia Pharmacy and Wesley
                        Pharmacy, where I worked on production ordering systems, QA tooling, prescription workflows,
                        API integrations, frontend modernization, and operational software that supported real teams
                        every day.
                    </p>

                    <p>
                        Now I&apos;m focused on AI-enabled product development and full-stack shipping for Homeport
                        Travel, building cruise, content, admin, automation, and customer workflow features across
                        Next.js, React, TypeScript, PHP, CodeIgniter, Node.js, Python, MySQL, MongoDB, Docker, and
                        cloud infrastructure.
                    </p>

                    <p>
                        I&apos;m especially interested in AI developer tools, LLM-assisted workflows, SaaS platforms,
                        data-rich admin systems, and mobile development with Flutter. I like building things that
                        start as real business problems, then become durable products that save time, reduce cost,
                        and create long-term value.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}
