"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./ui/fade-in";

const workExperience = [
    {
        company: "Olympia Pharmacy",
        href: "https://www.olympiapharmacy.com/",
        img: "/olympiapharma_logo.jpg",
        role: "Senior Full Stack Developer",
        dates: "2025 - Present",
        summary: "Architecting and modernizing the Olympia Ordering Portal by transforming a legacy LAMP/CodeIgniter 3 system into a scalable, high-performance platform using PHP, optimized SQL, AWS, Cloudflare, and a new Next.js + Tailwind component-driven frontend.",
    },
    {
        company: "Olympia Pharmacy",
        href: "https://www.olympiapharmacy.com/",
        img: "/olympiapharma_logo.jpg",
        role: "Quality Assurance Developer",
        dates: "2024 - 2025",
        summary: "Delivered high-impact QA efficiency boosts, and internal tools—improving stability, speeding onboarding, and optimizing prescription printing, order tracking, and API reliability across the Olympia Ordering Portal.",
    },
    {
        company: "Homeport Travel",
        href: "https://www.homeporttravel.com/",
        img: "/hp.jpg",
        role: "Full Stack Developer",
        dates: "2022 - Present",
        summary: "Built and containerized Homeport’s full-stack platform using React, Node.js, and CodeIgniter 4, integrating real-time cruise data, modular UI systems, business intelligence dashboards, and AWS SES—delivering a scalable, data-driven travel application.",
    },
    {
        company: "Electric Supply, Inc.",
        img: "/esi.jpg",
        role: "Ecommerce Developer",
        dates: "June 2020 - August 2024",
        summary:
            "Developed responsive, brand-aligned ecommerce pages and UI components using HTML, CSS, and Bootstrap, while improving product data structure, accessibility, and marketing workflows through cross-team collaboration and Mailchimp integrations.",
    }

];

export default function Work() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section id="work">
            <div className="flex min-h-0 flex-col gap-y-6">
                <FadeIn>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </FadeIn>

                {workExperience.map((job, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <FadeIn key={i}>
                            <div
                                className="rounded-lg bg-card text-card-foreground flex p-3 cursor-pointer"
                                onClick={() => toggle(i)}
                            >
                                {/* Logo */}
                                <div className="flex-none">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background dark:bg-foreground">
                    <img
                        className="aspect-square h-full w-full object-contain"
                        alt={job.company}
                        src={job.img}
                    />
                  </span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow ml-4 flex-col flex space-y-1.5">
                                    {/* Title Row */}
                                    <div className="flex items-center justify-between gap-x-2">
                                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                                            {job.company}
                                        </h3>

                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                            <span>{job.dates}</span>

                                            {/* External link icon (does NOT toggle accordion) */}
                                            <a
                                                href={job.href}
                                                target="_blank"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="lucide lucide-external-link size-4 opacity-50 hover:opacity-100 transition"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                            </a>

                                            {/* Chevron */}
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="lucide lucide-chevron-down size-4 ml-1 text-muted-foreground"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </motion.svg>
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <div className="font-sans text-xs text-muted-foreground">
                                        {job.role}
                                    </div>

                                    {/* Accordion Content */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0.25, 0.8, 0.25, 1],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                                                    {job.summary}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </section>
    );
}
