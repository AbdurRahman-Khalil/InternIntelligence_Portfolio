import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { fadeInUp } from "../../helpers/animations";

import { Skill } from "./Skill";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiJsonwebtokens, SiMongodb, SiTailwindcss, SiRobotframework } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiBearSmileLine } from "react-icons/ri";




const skillsData = [
    { id: 1, skill: "HTML", icon: <FaHtml5 /> },
    { id: 2, skill: "CSS", icon: <FaCss3Alt /> },
    { id: 3, skill: "JavaScript", icon: <RiJavascriptFill /> },
    { id: 4, skill: "TailwindCSS", icon: <SiTailwindcss /> },
    { id: 5, skill: "React", icon: <FaReact /> },
    { id: 6, skill: "Zustand", icon: <RiBearSmileLine /> },
    { id: 7, skill: "Node.js", icon: <FaNodeJs /> },
    { id: 8, skill: "Express", icon: <SiExpress /> },
    { id: 9, skill: "MongoDB", icon: <SiMongodb /> },
    { id: 10, skill: "Json Web Token", icon: <SiJsonwebtokens /> },
    { id: 11, skill: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { id: 12, skill: "Robot Framework", icon: <SiRobotframework /> },
];


export const Skills = () => {
    const skillsRef = useRef(null);
    const isInView = useInView(skillsRef, { once: true, amount: 0.45 });


    return (
        <motion.section
            ref={skillsRef}
            id="skills"
            className="section-styles pt-24 flex justify-center flex-col"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <motion.h2
                className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[840px]:text-6xl leading-13 min-[840px]:leading-15 font-medium mb-3 transitions"
                variants={fadeInUp}
            >
                Skills.
            </motion.h2>
            <motion.p
                className="text-[0.95rem] min-[840px]:text-base tracking-wider"
                variants={fadeInUp}
            >
                A showcase of programming languages, tools, and technologies learned.
            </motion.p>
            <div className="flex items-center flex-wrap gap-x-3.5 gap-y-4 w-full max-w-[50rem] mt-8">
                {skillsData.map((skill, index) => (
                    <Skill
                        index={index}
                        key={skill.id}
                        skill={skill.skill}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </motion.section>
    );
};

