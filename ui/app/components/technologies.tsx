import FadeIn from "./ui/fade-in";
import { Badge } from "./ui/badge";

export default function Technologies() {
    const list = ["Azure", "Docker", "PostgreSQL", "Redis", "Terraform", "Jenkins"];

    return (
        <section id="technologies">
            <div className="flex min-h-0 flex-col gap-y-3">
                <FadeIn>
                    <h2 className="text-xl font-bold">Technologies</h2>
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
