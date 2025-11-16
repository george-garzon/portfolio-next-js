import FadeIn from "./ui/fade-in";
import { Badge } from "./ui/badge";

export default function Languages() {
    const list = ["Python", "C/C++", "TypeScript", "Go", "SQL"];

    return (
        <section id="languages">
            <div className="flex min-h-0 flex-col gap-y-3">
                <FadeIn>
                    <h2 className="text-xl font-bold">Programming Languages</h2>
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
