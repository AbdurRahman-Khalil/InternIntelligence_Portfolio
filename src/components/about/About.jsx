import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import myImg from "../../assets/me.webp";

import { FiExternalLink } from "react-icons/fi";



export const About = () => {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { once: true, margin: "-300px" });

    return (
        <section
            id="about"
            ref={aboutRef}
            className="section-styles pt-24" 
        >
            <motion.div
                className="flex flex-col-reverse min-[827px]:flex-row justify-between items-start min-[883px]:items-center gap-14 min-[827px]:gap-6.5 min-[846px]:gap-8 min-[900px]:gap-10 transitions"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    visible: { transition: { staggerChildren: 0.4 } }, // Stagger effect
                }}
            >
                <motion.img
                    src={myImg}
                    className="w-full max-w-[23em] min-[840px]:max-w-[25em] object-cover aspect-square rounded-4xl transitions"
                    alt="my_image"
                    variants={{
                        hidden: { scale: 0.6, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
                    }}
                />
                <motion.div
                    className="about-text"
                    variants={{
                        hidden: { x: -50, opacity: 0, },
                        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 1 } },
                    }}
                >
                    <h2 className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[840px]:text-6xl leading-13 min-[840px]:leading-15 font-medium mb-3 transitions">
                        About Me.
                    </h2>
                    <p className="text-[0.95rem] min-[840px]:text-base tracking-wider mb-7 transitions">
                        I'm a Web Developer with 1.5 year of experience in building dynamic, responsive web apps
                        using React.js and TailwindCSS. Skilled in UI/UX, high-performance landing pages,
                        and state management with Zustand & Jotai. Passionate about learning new
                        technologies and solving real-world problems. Developed EchoRead, a full-stack
                        MERN app, showcasing expertise in front-end & back-end development.
                    </p>
                    {/* outlined-a */}
                    {/* <a
                        className="tracking-[0.07em] font-semibold border border-neutral-100 px-5 py-3.5 rounded-2xl transitions"
                        href="https://flowcv.com/resume/qg1q6kjveo" target="_blank" rel="noopener noreferrer"   
                    >
                        My Resume/CV
                    </a> */}
                    <a
                        className="group text-[0.95rem] min-[840px]:text-base text-neutral-800 tracking-wide font-extrabold 
                            flex items-center gap-1 max-w-fit bg-neutral-50 px-4.5 py-3 rounded-xl transitions"
                        href="https://flowcv.com/resume/qg1q6kjveo" target="_blank"   
                    >

                        <span>My Resume</span>
                        <FiExternalLink size={18} className="group-hover:-translate-y-[0.165rem] group-hover:translate-x-[0.165rem] transitions" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};
