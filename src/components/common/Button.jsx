import { FiExternalLink } from "react-icons/fi";


export const Button = () => {
    return (
        <a
            className="group text-[0.95rem] min-[840px]:text-base text-neutral-800 tracking-wide font-extrabold 
                    flex items-center gap-1.5 max-w-fit bg-neutral-50 px-4.5 py-3 rounded-xl transitions"
            href="https://drive.google.com/file/d/1n5gxMKM_vx6fk2udN9LZmwwXDltE1Zsy/view?usp=drive_link"
            target="_blank"
        >

            <span>My Resume</span>
            <FiExternalLink size={18} className="group-hover:-translate-y-[0.165rem] group-hover:translate-x-[0.165rem] transitions" />
        </a>
    );
};
