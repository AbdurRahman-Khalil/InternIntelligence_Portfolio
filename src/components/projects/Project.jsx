import { motion } from "framer-motion";

import { ExtLink } from "./ExtLink";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";



export const Project = ({ index, image, title, description, linkToSite, linkToRepo }) => {
    return (
        <motion.div
            id="project"
            className="space-y-1.5 p-1.5 pb-2 bg-neutral-50/5 hover:bg-neutral-50/2 border-2 border-neutral-100/30 rounded-2xl cursor-pointer transitions"
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                margin: "-130px"
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.1,
                delay: 0.1 * index,
            }}
        >
            <img src={image} className="max-w-full h-auto object-cover rounded-ss-xl rounded-se-xl transitions" alt={`${title}' s image`} />
            <div className="p-2 space-y-6">
                <div className="space-y-1.5">
                    <p className="title text-xl tracking-wider font-medium transitions">
                        {title}
                    </p>
                    <p className="description text-[0.95rem] font-light tracking-wider leading-[1.35rem] line-clamp-2 transitions">
                        {description}
                    </p>
                </div>
                <div className="flex items-center gap-2.5">
                    <ExtLink
                        linkDestination={linkToSite}
                        linkText={<FiExternalLink />}
                    />
                    <ExtLink
                        linkDestination={linkToRepo}
                        linkText={<FaGithub />}
                    />
                </div>
            </div>
        </motion.div>
    );
};
