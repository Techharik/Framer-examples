"use client";

import { motion, useInstantTransition, useScroll, useTransform } from "motion/react";
import React from "react";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    return (
        <div className="relative">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-2 bg-blue-500 "
                style={{ width: x }}
            />

            {/* Content */}
            <div className="p-4">
                <h1 className="text-2xl font-bold">Scroll to See Progress</h1>
                {[...Array(100)].map((_, i) => (
                    <div key={i} className="my-4 p-2 border-b">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus provident repellendus
                        placeat accusantium reprehenderit.
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollProgress;
