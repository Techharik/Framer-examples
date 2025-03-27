import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const ToolTipVariants = {
    hidden: { opacity: 0, y: -10 },
    Visible: { opacity: 1, y: 0 }
}

const ToolTip = () => {
    const [ToolTip, setToolTip] = useState(false)


    return <div className="flex h-screen flex-col gap-2 items-center justify-center">
        <AnimatePresence>

            {
                ToolTip && (
                    <motion.div
                        variants={ToolTipVariants}
                        initial="hidden"
                        animate="Visible"
                        exit="hidden"
                        layout
                        transition={{
                            duration: .2
                        }}
                    >
                        <p className=" text-xs max-w-[250px] bg-black text-white  p-2 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </motion.div>
                )
            }
        </AnimatePresence>

        <button
            onMouseEnter={() => setToolTip(true)}
            onMouseLeave={() => setToolTip(false)}
            className="px-2 bg-teal-300 rounded-lg text-xs py-2 px-4">
            Tooltip
        </button>

    </div>;

    // 
};

export default ToolTip;
