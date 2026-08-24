"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
    GithubIcon,
    Linkedin02Icon,
    NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/app/components/ui/tooltip";
import FadeIn from "./ui/fade-in";

const links = [
    {
        label: "GitHub",
        href: "https://github.com/george-garzon",
        icon: GithubIcon,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/georgegarzon",
        icon: Linkedin02Icon,
    },
    {
        label: "X",
        href: "https://x.com/georgegarzon_",
        icon: NewTwitterIcon,
    },
];

export default function SocialLinks() {
    return (
        <FadeIn>
            <section aria-label="Social links">
                <div className="flex items-center gap-2">
                    {links.map((link) => (
                        <Tooltip key={link.href}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                    aria-label={link.label}
                                >
                                    <HugeiconsIcon icon={link.icon} size={20} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{link.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </section>
        </FadeIn>
    );
}
