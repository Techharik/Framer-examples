"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSwitch() {
    const [on, setOn] = useState(false);

    return (
        <div className="flex h-screen flex-col gap-2 items-center justify-center">
            <motion.div
                className={`h-10 w-20 bg-black rounded-full flex items-center px-2 ${on ? "justify-end" : "justify-start"
                    }`}
                onClick={() => setOn(!on)}
            >
                <motion.div
                    className="w-6 h-6 rounded-full bg-slate-300 cursor-pointer"
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </motion.div>
        </div>
    );
}
