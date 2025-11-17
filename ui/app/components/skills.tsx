import FadeIn from "./ui/fade-in";
import { Badge } from "./ui/badge";

export default function Skills() {
    const list = [
        "Web Development",
        "API Development",
        "Database Design",
        "DevOps / CI/CD",
        "Automation Testing",
        "UI/UX Implementation",
        "Containerization",
        "System Design",
        "Version Control (Git)",
        "Linux Administration"
    ];

    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <FadeIn>
                    <h2 className="text-xl font-bold">Skills</h2>
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
