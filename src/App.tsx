import { motion } from "motion/react"
import InfinityLoader from "./exmaples/infinityLoader"

const App = () => {
  return (
    <div className="bg-green-500 h-screen">
      <motion.div className="w-[200px] h-[200px] rounded-full bg-red-500 mx-auto"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: [.2, 5, 1, 0],
          scale: [0, .5, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: 5
        }}
      >

      </motion.div>

      <InfinityLoader />
    </div>
  )
}
// transformation // x, y , scale , rotate , skewX ;
//duration delay , duration
//keyframes : - 
export default App