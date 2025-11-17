function ProjectCard({ project }: { project: any }) {
    // A tiny wrapper helper
    const MediaWrapper = ({ children }) =>
        project.slug ? (
            <a href={`/projects/${project.slug}`}>{children}</a>
        ) : (
            <div>{children}</div>
        );

    return (
        <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all h-full">
            {/* Media Preview */}
            <MediaWrapper>
                {project.video.endsWith(".mp4") ? (
                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                    />
                ) : (
                    <img
                        src={project.video}
                        alt={project.title}
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
                    />
                )}
            </MediaWrapper>

            {/* Title + Description */}
            <div className="flex flex-col px-2">
                <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight mt-1 text-base">
                        {project.title}
                    </h3>

                    {project.dates && (
                        <time className="font-sans text-xs">{project.dates}</time>
                    )}

                    <p className="prose max-w-full text-xs text-muted-foreground">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Tags */}
            <div className="text-sm text-muted-foreground mt-auto flex flex-col px-2">
                <div className="mt-2 flex flex-wrap gap-1 text-[10px]">
                    {project.tags.map((tag: string) => (
                        <div
                            key={tag}
                            className="inline-flex items-center rounded-md px-1 py-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold border-transparent border text-[10px]"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-1 pt-2 px-2 pb-2">
                {project.links.map((link: any) => (
                    <a
                        key={link.label}
                        target="_blank"
                        href={link.href}
                        className="flex items-center gap-2 px-2 py-1 text-[10px] rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/80"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
