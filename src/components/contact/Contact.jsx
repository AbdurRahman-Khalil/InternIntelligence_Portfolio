import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { SiUpwork, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";




const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.6 }, // Delays until text animation is done
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" }
    },
};


export const Contact = () => {
    const contactRef = useRef(null);
    const isInView = useInView(contactRef, { once: true, amount: 0.8 }); // Triggers once when 80% in view


    return (
        <section id="contact" className="section-styles pt-24 pb-16" ref={contactRef}>
            <motion.h2
                className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[840px]:text-6xl leading-13 min-[840px]:leading-15 font-medium mb-3 transitions"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                Reach Out.
            </motion.h2>
            <motion.p
                className="tracking-wider"
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                I'm always excited to meet new people and explore new opportunities.
            </motion.p>
            <motion.div
                className="flex items-center gap-5 flex-wrap mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.address
                    className="contact-item"
                    variants={itemVariants}
                >
                    <SlLocationPin className="text-[1.25rem] min-[380px]:text-[1.3rem] min-[840px]:text-[1.35rem]" />
                    <span>A Place on Earth</span>
                </motion.address>
                <motion.p
                    className="contact-item"
                    variants={itemVariants}
                >
                    <BsTelephone className="text-[1.25rem] min-[380px]:text-[1.3rem] min-[840px]:text-[1.35rem]" />
                    <span>+92 3371439697</span>
                </motion.p>
                <motion.a
                    className="contact-item flex-wrap"
                    href="mailto:m.abdurrahmankhalil2@gmail.com"
                    variants={itemVariants}
                >
                    <SiGmail className="text-[1.25rem] min-[380px]:text-[1.3rem] min-[840px]:text-[1.35rem]" /> <span>m.abdurrahmankhalil2@gmail.com</span>
                </motion.a>
                <motion.a
                    className="contact-item"
                    href="https://www.linkedin.com/in/abdurrehman16"
                    variants={itemVariants}
                >
                    <FaLinkedin className="text-[1.25rem] min-[380px]:text-[1.3rem] min-[840px]:text-[1.35rem]" /> <span>Linkedin</span>
                </motion.a>
                <motion.a
                    className="contact-item"
                    href="https://www.upwork.com/freelancers/~018e00a1fc2a67328d?mp_source=share"
                    variants={itemVariants}
                >
                    <SiUpwork className="text-[1.25rem] min-[380px]:text-[1.3rem] min-[840px]:text-[1.35rem]" /> <span>Upwork</span>
                </motion.a>
            </motion.div>
        </section>
    );
};



