import { motion } from "framer-motion";


export const NavItem = ({ index, navItemDestination, navItemTitle, isActive }) => {
    return (
        <motion.li
            initial={{
                opacity: 0,
                y: -35,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.3,
                delay: 0.1 * index,
            }}
        >
    <a
        // target={navItemTitle === "Experience" ? "_blank" : "_self"}
        href={navItemDestination}
        className={`relative text-[1.2rem] min-[850px]:text-[1.05rem] hover:text-neutral-300/95 tracking-wider transitions
                before:absolute before:-bottom-[0.2rem] before:left-0 before:h-0.5 before:bg-neutral-100 before:rounded-full  
                before:transition-all before:duration-300 before:ease-out
                ${isActive ? "before:w-full" : "before:w-0"}`}
    >
        {navItemTitle}
    </a>
        </motion.li >
    );
};

