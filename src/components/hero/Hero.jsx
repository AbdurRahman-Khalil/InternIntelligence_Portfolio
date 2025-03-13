import { motion } from "framer-motion";

import { PiHandWavingDuotone } from "react-icons/pi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiGmail } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";



const socialLinks = [
    { href: "https://github.com/AbdurRahman-Khalil", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/abdur-rehman-a82882281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
    { href: "mailto:m.abdurrahmankhalil2@gmail.com", icon: <SiGmail /> },
    { href: "https://www.upwork.com/freelancers/~018e00a1fc2a67328d?mp_source=share", icon: <SiUpwork /> }
];


export const Hero = () => {
    return (
        <section id="home" className="pt-52 pb-16">
            <div className="section-styles">
                <motion.div
                    className="hero-text w-full max-w-2xl min-[834px]:max-w-3xl min-[1700px]:max-w-4xl"
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-1.5 mb-5">
                        <motion.span
                            className="text-[1.55rem] min-[339px]:text-[1.65rem] min-[380px]:text-[1.75rem] min-[834px]:text-[1.85rem] transitions"
                            animate={{ rotate: [0, 50, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <PiHandWavingDuotone />
                        </motion.span>
                        <p className="text-[1.05rem] min-[380px]:text-[1.15rem] min-[834px]:text-xl tracking-wide transitions">Hi There!</p>
                    </div>
                    <h3 className="text-[1.8rem] min-[339px]:text-[1.9rem] min-[380px]:text-[2.05rem] min-[834px]:text-4xl mb-2.5 transitions">
                        I'm Abdur Rehman
                    </h3>
                    <h1 className="text-[3.15rem] min-[339px]:text-[3.3rem] min-[380px]:text-[3.5rem] min-[834px]:text-6xl font-semibold leading-15 min-[380px]:leading-16 min-[480px]:leading-17 min-[834px]:leading-18 transitions">
                        Frontend Web Developer.
                    </h1>
                    <motion.div
                        className="social-links flex items-center gap-6 mt-5 ml-[0.18em] transitions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.7, ease: "easeOut", staggerChildren: 0.15 }}
                    >
                        {socialLinks.map(({ href, icon }, index) => (
                            <motion.a
                                key={index}
                                className="text-[1.65rem] min-[339px]:text-[1.75rem] min-[380px]:text-[1.85rem] min-[834px]:text-[1.95rem] 
                                hover:scale-125 hover:rotate-15 transitions"
                                href={href} target="_blank"
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.65 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div className="flex justify-center items-center mt-14 min-[1700px]:mt-20">
                <motion.p
                    animate={{
                        translateY: [8, 20, 20, 8],
                        opacity: [0.4, 0.8, 0.8, 0.4]
                    }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 1.35 }}
                >
                    <IoIosArrowDown size={25} />
                </motion.p>
            </div>
        </section>
    );
};

