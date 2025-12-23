import { motion } from "framer-motion";


export const Skill = ({ index, icon, skill }) => {

    const randomScaling = Math.random() * 0.4 + 0.8; 
    const randomRotation = Math.floor(Math.random() * 71) - 36;

    return (
        <motion.div className="flex items-center gap-1.5 px-4 py-3.5 rounded-2xl border-2 border-neutral-100/30 bg-neutral-50/5 backdrop-blur cursor-pointer hover:cursor-grab active:cursor-grabbing"
            initial={{
                opacity: 0,
                y: 35,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                margin: "-80px"
            }}

            whileHover={{
                scale: randomScaling,
                rotate: randomRotation
            }}

            transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.1,
                delay: 0.1 * index,
                scale: {
                    type: "spring",
                    stiffness: 70,
                    damping: 10,
                    duration: 0.5,
                    delay: 0,

                },
                rotate: {
                    type: "spring",
                    stiffness: 70,
                    damping: 10,
                    duration: 0.5,
                    delay: 0,
                }
            }}

            drag
            dragConstraints={{
                top: -120,
                right: 120,
                bottom: 120,
                left: -120,
            }}
            dragTransition={{
                bounceStiffness: 200,
                bounceDamping: 10
            }}
        >
            <span className="text-[1.25rem] min-[840px]:text-[1.35rem]">{icon}</span>
            <p className="text-base min-[840px]:text-[1.1rem] tracking-wider">{skill}</p>
        </motion.div>
    );
};


