import { motion } from "framer-motion";


export const Logo = ({ logoText }) => {
    return (
        <motion.a
            href="#"
            className="text-[1.85rem] min-[339px]:text-[1.93rem] min-[380px]:text-[2.03rem] min-[834px]:text-[2.1rem] font-semibold transitions"
            initial={{
                opacity: 0,
                y: -35,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.1,
            }}
        >
            {logoText}
        </motion.a>
    );
};
