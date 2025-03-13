import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { fadeInUp } from "../../helpers/animations";

import { ExpPortion } from "./ExpPortion";



export const Experience = () => {
    const experienceRef = useRef(null);
    const isInView = useInView(experienceRef, { once: true, amount: 0.35 });

    
    return (
        <motion.section
            ref={experienceRef}
            id="experience"
            className="section-styles pt-24"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <motion.h2
                className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[840px]:text-6xl leading-15 min-[339px]:leading-16 min-[549px]:leading-13 min-[840px]:leading-15 font-medium mb-5 transitions"
                variants={fadeInUp}
            >
                Work Experience.
            </motion.h2>
            <ExpPortion
                expPortionHeading={"Personal Projects"}
                expPortionSubHeading={"2023 – present"}
                expPortionText1={"Developed numerous responsive landing pages such as Haven, AutoVerse & more using HTML, CSS, React.js, and TailwindCSS, ensuring seamless user experiences across devices."}
                expPortionText2={"Built interactive web applications such as Shopflix, Todoify_Ez, and Cartify using React.js, TailwindCSS, Framer Motion, Zustand, and Jotai, showcasing expertise in modern front-end technologies."}
            />
            <ExpPortion
                expPortionHeading={"FYP – EchoRead"}
                expPortionSubHeading={"Peshawar, Pakistan – 2024"}
                expPortionText1={"Collaborated with a team of 3 to develop EchoRead, a MERN stack-based online book exchange platform, as part of a Final Year Project."}
            />
        </motion.section>
    );
};
