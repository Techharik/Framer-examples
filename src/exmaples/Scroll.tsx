import { motion } from "motion/react";


//whileinViewProp
//viewport Prop

const Scroll = () => {
    return <div>
        <div className="h-screen mb-50"></div>
        <motion.div className="h-[200px] w-[200px] bg-amber-200 "
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
        >
            hi
        </motion.div>
        <div className="h-screen"></div>
    </div>;
};

export default Scroll;
