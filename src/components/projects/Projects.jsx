import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { fadeInUp } from "../../helpers/animations";

import { Project } from "./Project";

import { projectsData } from "./ProjectsData";



export const Projects = () => {
    const projectsRef = useRef(null);
    const isInView = useInView(projectsRef, { once: true, amount: 0.2 });


    return (
        <motion.section
            ref={projectsRef}
            id="projects"
            className="section-styles pt-24"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <motion.h2
                className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[840px]:text-6xl leading-13 min-[840px]:leading-15 font-medium mb-3 transitions"
                variants={fadeInUp}
            >
                Projects.
            </motion.h2>
            <motion.p
                className="text-[0.95rem] min-[840px]:text-base tracking-wider"
                variants={fadeInUp}
            >
                Innovative solutions crafted with the latest tech.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    projectsData.map((project, index) => (
                        <Project
                            key={project.id}
                            index={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            linkToSite={project.linkToSite}
                            linkToRepo={project.linkToRepo}
                        />
                    ))
                }
            </div>
        </motion.section>
    );
};
