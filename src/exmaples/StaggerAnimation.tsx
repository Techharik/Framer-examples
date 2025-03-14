import { motion } from "motion/react";
import React from "react";

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8  //delay of childern exeictuion
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        y: 20 // Fixed single value
    },
    visible: {
        opacity: 1,
        y: [-50, 20, 0],
        transition: { duration: 10 } //time taking
    }
};

const StaggerAnimation = () => {
    return <motion.div className="flex gap-2 py-10" variants={parentVariants}
        initial='hidden'
        animate='visible'
    >
        {
            [...Array(5)].map((_, index) => {
                return <motion.div
                    key={index}
                    variants={childVariants}

                    className="w-20 h-20 rounded-full bg-yellow-300 mb-5" />
            })
        }
    </motion.div>;
};

export default StaggerAnimation;
