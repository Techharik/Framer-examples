import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const Exercise3 = () => {
    const [open, setOpen] = useState(true);
    //     // sidebar

    // return (
    //     <div className="flex">
    //         <div className={`w-64 bg-slate-400 h-full  transition-all duration-300 ${open ? "fixed left-0" : "fixed -left-64"}`}>
    //             <div className="px-5 py-10 flex flex-col">
    //                 <h1>SideBar</h1>
    //                 <div className="flex-1 bg-slate-900 w-full min">
    //                     sd
    //                 </div>
    //             </div>
    //         </div>

    //         <div className={`flex-1 min-h-screen bg-slate-900 transition-all duration-300 ${open ? "ml-64" : ""}`}>
    //             <button onClick={() => setOpen(!open)} className="p-2 bg-blue-500 text-white m-4">
    //                 Toggle
    //             </button>
    //             <p className="p-4">Main Content Goes Here</p>
    //         </div>
    //     </div>


    // )

    //modal type ---
    // return (
    //     <div className="flex justify-center items-center flex-col min-h-screen">
    //         <AnimatePresence>
    //             {
    //                 open && <motion.div
    //                     className="border shadow-sm border-slate-200 p-8 rounded-2xl"
    //                     initial={{
    //                         opacity: 0,
    //                         y: -20
    //                     }}
    //                     animate={{
    //                         opacity: 1,
    //                         y: 0
    //                     }}
    //                     exit={{
    //                         opacity: 0,
    //                         y: -20,
    //                         backgroundColor: '#000'  //colur value must be in hex or rgb
    //                     }}
    //                     transition={{
    //                         duration: 2,
    //                         ease: 'easeInOut'
    //                     }}
    //                     layout
    //                 >
    //                     <h1>
    //                         Welcoem to the Page
    //                     </h1>
    //                     <p>
    //                         Hello signup here for the waiting list of the page
    //                     </p>
    //                 </motion.div>
    //             }
    //         </AnimatePresence>
    //         <button className="bg-yellow-200 p-2 rounded-xl mt-5" onClick={() => setOpen(!open)}>
    //             toggle
    //         </button>
    //     </div>
    // )
    //accordion componentd

    const [selectedInd, setSelectedInd] = useState(-1)
    const accordItems = [
        {
            title: 'my content',
            content: 'loream ipsum ipuosj jsdln hipoen hiall d'
        },

        {
            title: 'my content',
            content: 'loream ipsum ipuosj jsdln hipoen hiall d'
        },
        {
            title: 'my content',
            content: 'loream ipsum ipuosj jsdln hipoen hiall d'
        }

    ]

    // return (
    //     <div className="flex flex-col min-h-screen justify-center items-center">
    //         {
    //             accordItems.map((item, ind) => {
    //                 return (
    //                     <div className="min-w-xl  bg-black text-white ">
    //                         <div className="flex p-2 justify-between rounded-xl">
    //                             <div>
    //                                 {item.title}
    //                             </div>
    //                             <span onClick={() => setSelectedInd(ind)}>
    //                                 x
    //                             </span>

    //                         </div>
    //                         <motion.div className={`bg-slate-500  overflow-hidden `}
    //                             initial={{ height: 0 }}
    //                             animate={{ height: selectedInd === ind ? "auto" : 0 }}
    //                         >
    //                             <span className=" px-2">
    //                                 <p className="py-10">

    //                                     {
    //                                         item.content
    //                                     }
    //                                 </p>
    //                             </span>
    //                         </motion.div>
    //                     </div>
    //                 )
    //             })
    //         }

    //     </div >
    // )
    const images = [
        'https://images.unsplash.com/photo-1741531472824-b3fc55e2ff9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1669018128972-d43d65810fa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1734945773941-1c3e6b340762?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (_: any, info: any) => {
        if (info.offset.y > 50) {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        } else if (info.offset.y < -50) {
            setCurrentIndex(prev => (prev + 1) % images.length)
        }
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="w-72 h-72 relative overflow-hidden">
                <AnimatePresence>
                    <motion.img

                        src={images[currentIndex]}
                        alt='img'
                        key={currentIndex}
                        className="w-full h-full rounded-xl"
                        drag='y'
                        dragConstraints={{ top: 0, bottom: 0 }}
                        onDragEnd={handleSwipe}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: .5 }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut'
                        }}
                    />
                </AnimatePresence>
            </div>

        </div>
    )
};

export default Exercise3;
