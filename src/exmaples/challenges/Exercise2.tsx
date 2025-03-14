import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import icon from '/vite.svg'
import { video } from "motion/react-client";
const Exercise2 = () => {
    const [fadeer, setfade] = useState(true)
    return <div className=" flex items-center justify-center flex-col gap-10 pb-62">
        {/* Boucing Ball */}
        <motion.div className="h-62 w-62 bg-emerald-400 rounded-full"

            animate={{ y: [0, -100, 0] }}

            transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
            }}
        >

        </motion.div>
        {/* rotate icon */}
        <motion.img src={icon} alt="vioteicon"
            animate={{ rotate: 360 }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'circInOut'
            }}
        />


        {/* sckew Animation */}

        <motion.div className="w-62 h-62 bg-amber-200"

            whileTap={{ skewY: 10 }}
        >
            <br />



        </motion.div>

        {/* combineed ANIMATION */}
        <motion.div className="w-12 h-12 bg-amber-400"
            animate={{ scale: [0.5, 1], rotate: 360, x: 200 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
        >

        </motion.div>

        {/* Squentional Boxes */}


        <div>

            {
                [...Array(3)].map((_, i) => <motion.div key={i} className="w-12 h-12 bg-red-300 m-5"
                    animate={{ x: 100 }}
                    transition={{
                        duration: 2, delay: i * 0.5,
                        repeat: Infinity, repeatType: 'reverse',
                        ease: 'backInOut'

                    }}
                />)
            }
        </div>

        {/* Fade In and out Toogle */}
        <div className="flex flex-col justify-center items-center gap-10">
            <motion.div
                className="w-12 h-12 bg-green-400"
                animate={{ opacity: fadeer ? 0 : 1 }}
                transition={{
                    ease: 'easeInOut'
                }}
            />
            <button className="p-2 text-xs bg-amber-200 rounded-2xl px-4" onClick={() => setfade(!fadeer)}>toggle Box</button>
        </div>


        {/* another Way FadeIn and Out*/}
        <AnimatePresence>
            {
                fadeer && <div className="flex flex-col justify-center items-center gap-10">
                    <motion.div
                        className="w-12 h-12 bg-green-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, backgroundColor: 'red' }}
                        transition={{
                            duration: 3,
                            ease: 'easeInOut'
                        }}
                        layout
                    />

                </div>
            }
        </AnimatePresence>
        <button className="p-2 text-xs bg-amber-200 rounded-2xl px-4" onClick={() => setfade(!fadeer)}>toggle Box</button>

    </div >

};

export default Exercise2;
