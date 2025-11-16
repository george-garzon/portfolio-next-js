"use client";

import { useEffect, useRef } from "react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.style.opacity = "1";
        el.style.filter = "blur(0px)";
        el.style.transform = "translateY(0px)";
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: 0,
                filter: "blur(4px)",
                transform: "translateY(12px)",
                transition: "all 700ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
        >
            {children}
        </div>
    );
}
