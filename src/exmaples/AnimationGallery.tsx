import { motion } from "motion/react";
import React, { useState } from "react";


const gallerImages = [
    'https://plus.unsplash.com/premium_photo-1681412205238-8171ccaca82b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1734779205618-30ee0220f56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1724430943574-23348700dfea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'
]

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,
            staggerDirection: -1
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 20
    }
}

const AnimationGallery = () => {
    const [showImage, setShowImage] = useState(false)

    const handleClick = () => {

        setShowImage(!showImage)
    };



    return <div >
        <motion.button className="bg-amber-300 p-2 rounded-xl text-sm font-medium px-5 cursor-pointer"
            onClick={handleClick}
            transition={
                { duration: .3 }
            }
            layout
        >

            {showImage ? "Hide Image" : "Show Image"}

        </motion.button>
        <motion.div className="flex  gap-2 " variants={parentVariants} initial='hidden' animate={showImage ? 'hidden' : 'visible'}>
            {
                gallerImages.map((val, ind) => {
                    return <motion.img
                        variants={childVariants}
                        src={val} key={ind} className="h-[200px] w-[200px]" />
                })
            }
        </motion.div>
    </div >;
};

export default AnimationGallery;
