import FadeIn from "./ui/fade-in";
import { Badge } from "./ui/badge";

export default function Frameworks() {
    const list = [
        "Next.js",
        "React",
        "Vue.js",
        "Tailwind CSS",
        "CodeIgniter",
        "Node.js",
        "Fastify",
        "Express",
        "Flask",
        "Django",
        ".NET"
    ];

    return (
        <section id="frameworks">
            <div className="flex min-h-0 flex-col gap-y-3">
                <FadeIn>
                    <h2 className="text-xl font-bold">Frameworks</h2>
                </FadeIn>

                <div className="flex flex-wrap gap-1">
                    {list.map((item) => (
                        <FadeIn key={item}>
                            <Badge>{item}</Badge>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
