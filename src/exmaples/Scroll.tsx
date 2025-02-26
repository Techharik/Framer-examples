import { motion, useScroll, useTransform } from "motion/react";


//whileinViewProp
//viewport Prop

const Scroll = () => {
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 400], [.7, 0.2])
    const borderRadius = useTransform(scrollY, [0, 400], [100, 200])
    return <div>
        {/* <div className="h-screen mb-50"></div>
        <motion.div className="h-[200px] w-[200px] bg-amber-200 "
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
        >
            hi
        </motion.div>
        <div className="h-screen"></div> */}
        <motion.img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="" style={{ scale, borderRadius }} className="w-full h-screen shadow-2xl" />
        <div className="h-[500px]">

        </div>
        <div className="h-screen"></div>
    </div>;
};

export default Scroll;
