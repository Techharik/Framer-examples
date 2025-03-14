import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const Ex2 = () => {
    const [visible, setVisible] = useState(true)
    return <div>

        {/* <button className="text-emerald-400 bg-yellow-100 text-2xl p-2 rounded-lg" onClick={() => setVisible(!visible)}>Toggle Fade</button>
        <AnimatePresence>

            {
                visible && <motion.div
                    className="h-[200px] w-[200px] bg-white rounded-lg shadow-xl m-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                >
                    Hello I am Waiting Componnet
                </motion.div>
            }
        </AnimatePresence> */}
        <div className="flex bg-white relative">

            <motion.div className="max-w-[250px] h-screen bg-green-200 flex-1 w-full  "
                animate={visible ? { left: 0, position: 'relative', opacity: 1 } : { left: -250, position: 'absolute', opacity: 0 }}
                transition={{
                    duration: .3
                }}
            >
                <div className="w-full h-[200px] bg-white">

                </div>
            </motion.div>
            <div className="flex-1 bg-red-50 h-screen">
                <button className="bg-black text-white p-2 rounded-lg px-5 "
                    onClick={() => setVisible(!visible)}
                >
                    click
                </button>
            </div>
        </div>

    </div>;
};

export default Ex2;
