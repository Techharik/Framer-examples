import { motion } from 'motion/react'
import React from 'react'

const InfinityLoader = () => {
    return (
        <div className='flex gap-2 justify-center pt-40'>
            {
                [...Array(3)].map((_, index) => {
                    return <motion.div
                        key={index}
                        initial={{ width: 20, height: 20, backgroundColor: 'black' }}
                        animate={{
                            y: [0, 15, 0]
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: index * .5
                        }}
                    />
                })
            }
        </div>
    )
}

export default InfinityLoader