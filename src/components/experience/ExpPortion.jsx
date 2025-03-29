import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { fadeInUp } from "../../helpers/animations";



export const ExpPortion = ({ expPortionHeading, expPortionSubHeading, expPortionText1, expPortionText2 }) => {
    const expPortionref = useRef(null);
    const isInView = useInView(expPortionref, { once: true, amount: 0.45 });


    return (
        <motion.div
            ref={expPortionref}
            className={`exp-portion ${expPortionHeading === "Frontend Developer Intern" ? "mb-0" : "mb-8"}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <motion.div variants={fadeInUp} className="mb-4">
                <motion.h4
                    className="relative text-[1.45rem] min-[339px]:text-[1.55rem] min-[380px]:text-[1.7rem] min-[840px]:text-[1.8rem] pl-2.5
                    before:absolute before:top-2 before:left-0 before:h-[54%] min-[339px]:before:h-[58%] min-[840px]:before:h-[64%] before:w-1 before:bg-neutral-100 before:rounded-full transitions"
                    variants={fadeInUp}
                >
                    {expPortionHeading}
                </motion.h4>
                <motion.p
                    className="text-base min-[840px]:text-[1.03rem] text-neutral-100/55 tracking-wider"
                    variants={fadeInUp}
                >
                    {expPortionSubHeading}
                </motion.p>
            </motion.div>

            <motion.div
                className="text-[0.95rem] min-[840px]:text-base font-light tracking-wider space-y-3"
                variants={fadeInUp}
            >
                {expPortionHeading === "Frontend Developer Intern" && (
                    <motion.p variants={fadeInUp}>
                        Successfully completed key projects:
                    </motion.p>
                )}
                <motion.p variants={fadeInUp}>
                    <span className="font-medium">1.</span> {expPortionText1}
                </motion.p>
                {expPortionHeading === "FYP – EchoRead"
                    ? <motion.div variants={fadeInUp}>
                        <p variants={fadeInUp}>
                            <span className="font-medium">2.</span> I have implemented the following features in the app: <br />
                        </p>
                        <p variants={fadeInUp}>
                            <span className="font-medium">a.</span> Book rating and review system. <br />
                        </p>
                        <p variants={fadeInUp}>
                            <span className="font-medium">b.</span> Profile management for users. <br />
                        </p>
                        <p variants={fadeInUp}>
                            <span className="font-medium">c.</span> Book listing and deletion functionality. <br />
                        </p>
                        <p variants={fadeInUp}>
                            <span className="font-medium">d.</span> Search book by title, author or username of the lister. <br />
                        </p>
                        <p variants={fadeInUp}>
                            <span className="font-medium">e.</span> Dark/Light mode toggle for enhanced user experience. <br />
                        </p>
                    </motion.div>
                    : <motion.p variants={fadeInUp}>
                        <span className="font-medium">2.</span> {expPortionText2}
                    </motion.p>
                }
            </motion.div>
        </motion.div>
    );
};


