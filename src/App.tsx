import { motion } from "motion/react"
import InfinityLoader from "./exmaples/infinityLoader"
import AnimationCard from "./exmaples/AnimationCard"
import StaggerAnimation from "./exmaples/StaggerAnimation"
import AnimationGallery from "./exmaples/AnimationGallery"
import MotionHoo from "./exmaples/MotionHoo"
import Tranformation from "./exmaples/Tranformation"

const App = () => {

  return (
    <div className="bg-gray-400 h-screen">
      {/* //? basic */}
      {/* <motion.div className="w-[100px] h-[100px] rounded-full bg-red-500 mx-auto"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: [.2, .8, 0],
          scale: [0, .5, 1]
        }}
        transition={{
          duration: 3,
          delay: 1,
          ease: 'easeInOut',
          repeat: 5
        }}
      >

      </motion.div> */}


      {/* <InfinityLoader /> */}
      {/* //?variants */}
      {/* <motion.div
        className="w-[100px] h-[100px] mx-auto" drag
        initial={{ backgroundColor: "hsl(60, 100%, 50%)" }} // Yellow
        whileHover={{ backgroundColor: "hsl(350, 100%, 88%)", transition: { duration: 1.5, ease: "easeInOut", type: 'tween' } }} // Pink
      /> */}
      <div className="flex justify-center flex-col gap-30 px-10">

        {/* <AnimationCard /> */}
        {/* <StaggerAnimation />
        <AnimationGallery /> */}
        {/* <MotionHoo /> */}
        <Tranformation />
      </div>
    </div>
  )
}
// transformation // x, y , scale , rotate , skewX ;
//duration delay , duration
//keyframes : - 
export default App