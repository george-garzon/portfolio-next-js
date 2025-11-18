function ProjectCard({ project }: { project: any }) {
    // A tiny wrapper helper
    const MediaWrapper = ({ children }: { children: React.ReactNode }) =>
        project.slug ? (
            <a href={`/projects/${project.slug}`}>{children}</a>
        ) : (
            <>{children}</>
        );

    return (
        <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all h-full">
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

            <div className="flex flex-col px-2">
                <div className="space-y-1">
                    <h3 className="font-semibold tracking-tight mt-1 text-base">
                        {project.title}
                    </h3>

                    <time className="font-sans text-xs">{project.dates}</time>

                    <p className="prose max-w-full text-sm text-muted-foreground">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
