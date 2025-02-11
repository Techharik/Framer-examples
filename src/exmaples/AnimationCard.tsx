import { motion } from 'motion/react'
import React from 'react'


const AnimationCard = () => {
    return (
        <motion.div className='bg-white rounded-lg max-w-lg '
            whileHover={{
                scale: 1.06,
                skew: '-20deg',
                backgroundColor: "pink", //use rgb or hsl for smooth transition
                transition: { duration: .5 }
            }}
            whileTap={{

                scale: 0.5
            }
            }

        >
            <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="card image" className='w-full h-48 object-cover rounded-t-lg' />
            <h2 className="text-black p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolores, provident exercitationem rem, distinctio numquam accusamus alias praesentium tenetur pariatur non nobis officiis atque quod. Amet ipsa repellat sequi alias.
            </h2>
            <button className="px-5 py-4 bg-teal-400 hover:bg-teal-500 m-4 rounded-xl">
                click me
            </button>
        </motion.div>
    )
}

export default AnimationCard