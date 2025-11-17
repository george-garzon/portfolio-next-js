import FadeIn from "./ui/fade-in";
import { Badge } from "./ui/badge";

export default function Technologies() {
    const list = [
        "Linux",
        "Ubuntu",
        "Docker",
        "Git",
        "NPM",
        "Postman",
        "Swagger / OpenAPI",
        "Selenium",
        "Jenkins",
        "MySQL",
        "MariaDB",
        "MongoDB"
    ];

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
