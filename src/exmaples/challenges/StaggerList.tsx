import { stagger, transform } from "motion";
import { motion } from "motion/react";
import React from "react";


const paraentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1, y: 0, transition: {
            staggerChildren: 0.5
        }
    }
}
const childVariants = {
    hidden: { opacity: 0, y: 210 },
    visible: {
        opacity: 1, y: 0,
    },

}


const StaggerList = () => {
    const ListItems = ['Apple', 'Samsung', 'Nokia']


    return <div className="h-screen flex items-center justify-center  ">
        <motion.div variants={paraentVariants} initial='hidden' animate="visible" className="flex gap-2">
            {
                ListItems.map((item, ind) => <motion.p
                    variants={childVariants}
                    key={ind} className="px-2 border rounded-full text-xs py-2">{item}</motion.p>)
            }
        </motion.div>
    </div>;
};

export default StaggerList;
