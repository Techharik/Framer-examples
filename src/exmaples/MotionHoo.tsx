import { motion, useSpring } from "motion/react";
import React, { ChangeEvent } from "react";

const MotionHoo = () => {
    const scaleValue = useSpring(1)

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        scaleValue.set(parseFloat(e.target.value))
    }
    return <div className=" h-[500px] w-[500px] my-10">
        <div className="border-emerald-200 border bg-slate-200 bg-opacity-10 h-[200px]	 rounded-lg flex justify-center items-center overflow-hidden">

            <motion.div className="w-20 h-20 rounded-full bg-yellow-100" style={{ scale: scaleValue }}>

            </motion.div>
        </div>
        <input
            type="range"
            name="range" id=""
            min={0}
            max={5}
            step={.4}
            defaultValue={.4}
            onChange={handleOnchange} />
    </div>

};

export default MotionHoo;
