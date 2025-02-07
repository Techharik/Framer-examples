import { motion } from "motion/react"

const App = () => {
  return (
    <div className="bg-green-500 h-screen">
      <motion.div className="w-[200px] h-[200px] rounded-full bg-red-500 "
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 100%)", skewX: 20 }}
        transition={{ delay: 2, duration: 4, ease: 'easeOut' }}
      >

      </motion.div>
    </div>
  )
}
// transformation // x, y , scale , rotate , skewX ;
//duration delay , duration
//keyframes : - 
export default App