export interface BlogPost {
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD
}

export const posts: BlogPost[] = [
    {
        slug: "build-axiom-docker-image",
        title: "Build Axiom Docker image",
        date: "2024-07-28"
    },
    {
        slug: "setting-up-my-home-server",
        title: "Setting up my Home Server",
        date: "2024-07-28"
    },
    {
        slug: "training-a-weekly-resistance-model-1",
        title: "Training a simple weekly resistance model for SPY (Part 1)",
        date: "2024-07-18"
    }
];
