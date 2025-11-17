"use client";

import { useState, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Home01Icon,
    GithubIcon,
    Linkedin02Icon,
    NewTwitterIcon,
    Sun01Icon,
    Moon01Icon,
    SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/app/components/ui/tooltip";

type NavItem =
    | { type: "link"; label: string; href: string; icon: React.ReactNode }
    | { type: "action"; label: string; action: () => void; icon: React.ReactNode }
    | { type: "divider" };

export default function FloatingNav() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mouseX, setMouseX] = useState<number | null>(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMouseX(e.clientX - rect.left);
    };

    const handleLeave = () => setMouseX(null);

    const toggleDark = () => {
        setDarkMode((d) => !d);
        document.documentElement.classList.toggle("dark");
    };

    const items: NavItem[] = [
        {
            type: "link",
            label: "Home",
            href: "/",
            icon: <HugeiconsIcon icon={Home01Icon} size={20} />,
        },
        {
            type: "link",
            label: "Projects",
            href: "/projects",
            icon: <CodeIcon />,
        },
        { type: "divider" },
        {
            type: "link",
            label: "GitHub",
            href: "https://github.com/george-garzon",
            icon: <GitHubIcon />,
        },
        {
            type: "link",
            label: "LinkedIn",
            href: "https://linkedin.com/in/georgegarzon",
            icon: <LinkedInIcon />,
        },
        {
            type: "link",
            label: "X",
            href: "https://x.com",
            icon: <XIcon />,
        },
        { type: "divider" },
        {
            type: "action",
            label: darkMode ? "Light Mode" : "Dark Mode",
            action: toggleDark,
            icon: darkMode ? <SunIcon /> : <MoonIcon />,
        },
    ];

    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mb-4 flex justify-center">
            <div className="fixed bottom-0 inset-x-0 h-16 bg-background/40 backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

            <div
                ref={containerRef}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="
                    z-1 pointer-events-auto flex items-center gap-1 px-3 py-2
                    bg-background rounded-full border
                    shadow-[0_0_0_1px_rgba(0,0,0,.03),0_3px_6px_rgba(0,0,0,.05),0_20px_40px_rgba(0,0,0,.06)]
                    dark:border-white/10
                "
            >
                {items.map((item, i) =>
                    item.type === "divider" ? (
                        <div key={i} className="w-px h-8 bg-border opacity-50 mx-1" />
                    ) : (
                        <LiquidItem key={i} index={i} mouseX={mouseX}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    {item.type === "link" ? (
                                        item.href.startsWith("http") ? (
                                            <Link
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item.icon}
                                            </Link>
                                        ) : (
                                            <Link href={item.href}>{item.icon}</Link>
                                        )
                                    ) : (
                                        <button onClick={item.action}>{item.icon}</button>
                                    )}
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </LiquidItem>
                    )
                )}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------ */
/* Liquid hover item */
/* ------------------------------------------------------------ */

function LiquidItem({
                        children,
                        index,
                        mouseX,
                    }: {
    children: React.ReactNode;
    index: number;
    mouseX: number | null;
}) {
    const base = 48;
    const gap = 5;

    const centerX = index * (base + gap) + base / 2;

    let expand = 0;
    if (mouseX !== null) {
        const dist = Math.abs(mouseX - centerX);
        expand = Math.max(0, 25 - dist / 3);
    }

    const width = base + expand;

    return (
        <div
            className="flex items-center justify-center transition-all duration-150 ease-out"
            style={{ width, height: base }}
        >
            <div className="h-12 w-12 flex items-center justify-center rounded-full hover:bg-accent transition-colors">
                {children}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------ */
/* Icons */
/* ------------------------------------------------------------ */

function GitHubIcon() {
    return <HugeiconsIcon icon={GithubIcon} size={20} />;
}

function LinkedInIcon() {
    return <HugeiconsIcon icon={Linkedin02Icon} size={20} />;
}

function XIcon() {
    return <HugeiconsIcon icon={NewTwitterIcon} size={20} />;
}

function SunIcon() {
    return <HugeiconsIcon icon={Sun01Icon} size={20} />;
}

function MoonIcon() {
    return <HugeiconsIcon icon={Moon01Icon} size={20} />;
}

function CodeIcon() {
    return <HugeiconsIcon icon={SourceCodeIcon} size={20} />;
}
