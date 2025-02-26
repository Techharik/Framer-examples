import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import React from "react";

const Transformation = () => {
    const x = useMotionValue(0);

    // useMotionValueEvent(x, "change", (latest) => {
    //     console.log("x value:", latest); // Debugging: Logs the actual motion value
    // });
    console.log(x)
    const val = useTransform(x, [-200, 0, 200], ["#f5f5f5", "#cc66ff", "#80ff80"]);

    return (
        <div className="border h-[500px] flex justify-center items-center">
            <motion.div
                drag="x"
                dragConstraints={{ left: -200, right: 200 }}
                style={{ x, backgroundColor: val }}

                className="h-[100px] w-[100px] flex justify-center items-center rounded-xl font-medium shadow-2xl overflow-hidden"
            >

                <span className="relative z-10">motion</span>
            </motion.div>
        </div>
    );
};

export default Transformation;
