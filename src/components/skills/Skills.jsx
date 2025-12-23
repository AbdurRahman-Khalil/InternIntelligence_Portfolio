import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { Skill } from "./Skill";

import { fadeInUp } from "../../helpers/animations";

import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill, RiBearSmileLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss, SiRobotframework, SiFirebase, SiPhp } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";



const skillsData = [
    { id: 1, skill: "HTML", icon: <FaHtml5 /> },
    { id: 2, skill: "CSS", icon: <FaCss3Alt /> },
    { id: 3, skill: "JavaScript", icon: <RiJavascriptFill /> },
    { id: 4, skill: "TailwindCSS", icon: <SiTailwindcss /> },
    { id: 4, skill: "Bootstrap", icon: <FaBootstrap /> },
    { id: 5, skill: "Framer Motion", icon: <TbBrandFramerMotion /> },
    { id: 6, skill: "React.js", icon: <FaReact /> },
    { id: 7, skill: "Firebase", icon: <SiFirebase /> },
    { id: 8, skill: "Zustand", icon: <RiBearSmileLine /> },
    { id: 9, skill: "PHP", icon: <SiPhp /> },
    { id: 10, skill: "Node.js", icon: <FaNodeJs /> },
    { id: 11, skill: "Express", icon: <SiExpress /> },
    { id: 12, skill: "MongoDB", icon: <SiMongodb /> },
    { id: 13, skill: "MySQL", icon: <GrMysql /> },
    { id: 14, skill: "Robot Framework", icon: <SiRobotframework /> },
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
            <div className="flex items-center flex-wrap gap-x-3.5 gap-y-4 w-full max-w-[52rem] mt-8">
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

