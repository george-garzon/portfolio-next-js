import FadeIn from "./ui/fade-in";
import ProjectCard from "./projects/project-card";

const projects = [
    {
        title: "Ship Tracker",
        video: "/shiptrackergif.gif",
        description:
            "Apple Maps themed Ship Tracker built for Royal Caribbean.",
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
        ],
        links: [
            {
                label: "Github",
                href: "https://github.com/george-garzon",
            },
        ],
    },
    {
        title: "Homeport Travel",
        video: "/homeportblog.gif",
        description:
            "Keeping travelers up to date with cruising. Modernizing the Travel Agent Booking process with Royal Caribbean API.",
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Nuqs",
        ],
        links: [
            {
                label: "Github",
                href: "https://github.com/george-garzon",
            },
        ],
    },
    {
        title: "Arcfield Chat Bot",
        video: "/mbse.gif",
        description:
            "AI ChatGPT Wrapper.",
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
        ],
        links: [
            {
                label: "Github",
                href: "https://github.com/george-garzon",
            },
        ],
    },
    {
        title: "DrScriptPortal Frontend",
        video: "/drscript.png",
        description:
            "Transformed a pharmaceutical e-commerce UI into a clean, modern, mobile-friendly experience.",
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
        ],
        links: [
            {
                label: "Github",
                href: "https://github.com/george-garzon",
            },
        ],
    },
    {
        title: "About Me",
        video: "/about-angular.gif",
        description:
            "About me one page application crafted with Angular CLI.",
        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Storybook",
        ],
        links: [
            {
                label: "Github",
                href: "https://github.com/george-garzon",
            },
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="space-y-12 w-full py-12">
                {/* Header */}
                <FadeIn>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                My Projects
                            </div>

                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Check out my latest work
                            </h2>

                            <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl max-w-[600px] mx-auto">
                                I've worked on a variety of projects, from simple websites to
                                complex web applications. Here are a few of my favorites.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* Grid of Projects */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                    {projects.map((project, i) => (
                        <FadeIn key={i}>
                            <ProjectCard project={project} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}