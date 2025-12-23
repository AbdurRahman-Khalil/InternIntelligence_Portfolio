import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { Button } from "../common/Button";

import myImg from "../../assets/me1.jpg";



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
                className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center gap-13 transitions"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    visible: { transition: { staggerChildren: 0.4 } }, // Stagger effect
                }}
            >
                <motion.img
                    src={myImg}
                    className="w-full md:w-[25em] object-cover aspect-square rounded-4xl transitions"
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
                    <h2 className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[840px]:text-6xl leading-13 min-[840px]:leading-15 font-medium mb-6 transitions">
                        About Me.
                    </h2>
                    <p className="tracking-wider mb-7 transitions">
                        I'm a Web Developer with 1.5 years of experience building dynamic, responsive, and high-performance web
                        applications. Proficient in React.js, TailwindCSS, Framer Motion, and Zustand, with a strong focus on
                        creating smooth, intuitive UI/UX. Experienced in developing multiple personal projects to strengthen
                        practical skills, follow best practices, and stay current with modern web technologies and trends. Passionate about
                        delivering user-centric, scalable, and maintainable solutions.
                    </p>
                    {/* outlined-a */}
                    {/* <a
                        className="tracking-[0.07em] font-semibold border border-neutral-100 px-5 py-3.5 rounded-2xl transitions"
                        href="https://drive.google.com/file/d/1tPVmQ72du3iDKv7W_ROI9ytwfcXnrhVR/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"   
                    >
                        My Resume
                    </a> */}
                    <Button />
                </motion.div>
            </motion.div>
        </section>
    );
};
