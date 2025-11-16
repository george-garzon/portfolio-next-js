"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./ui/fade-in";

const educationData = [
    {
        school: "University of South Florida",
        img: "/usouthflorida_logo.jpg",
        dates: "August 2020 - May 2024",
        degree: "B.S in Computer Science with Honors",
        notes: null,
        details: (
            <div className="mt-2 text-xs sm:text-sm">
                <p>
                    <strong>Minor:</strong> Entrepreneurship
                </p>

                <div>
                    <strong>Honors:</strong>
                    <ul className="list-disc list-inside">
                        <li>Summa Cum Laude</li>
                        <li>New American University Scholar</li>
                        <li>Barrett, The Honors College</li>
                        <li>Dean's List</li>
                    </ul>
                </div>
            </div>
        ),
    },
];

export default function Education() {
    // Both accordion items start open by default
    const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

    const toggle = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section id="education">
            <div className="flex min-h-0 flex-col gap-y-3">
                <FadeIn>
                    <h2 className="text-xl font-bold">Education</h2>
                </FadeIn>

                {educationData.map((edu, i) => {
                    const isOpen = openIndexes.includes(i);

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
                        alt={edu.school}
                        src={edu.img}
                    />
                  </span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow ml-4 flex-col flex space-y-1.5">
                                    {/* Top Row */}
                                    <div className="flex items-center justify-between gap-x-2">
                                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                                            {edu.school}
                                        </h3>

                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                            <span>{edu.dates}</span>

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

                                    {/* Degree */}
                                    <div className="font-sans text-xs">{edu.degree}</div>

                                    {/* Notes (optional) */}
                                    {edu.notes && (
                                        <div className="font-sans text-xs font-semibold">{edu.notes}</div>
                                    )}

                                    {/* Accordion content */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && edu.details && (
                                            <motion.div
                                                key="details"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0.25, 0.8, 0.25, 1],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                {edu.details}
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
