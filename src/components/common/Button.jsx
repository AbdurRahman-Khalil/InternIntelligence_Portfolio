import { FiExternalLink } from "react-icons/fi";


export const Button = () => {
    return (
        <a
            className="group text-neutral-800 tracking-wide font-extrabold 
                    flex items-center gap-1.5 max-w-fit bg-neutral-50 px-4.5 py-3 rounded-xl transitions"
            href="https://drive.google.com/file/d/13PGBEY_hILHfQ_oPzWWzgG4q5i9Q7ENR/view?usp=drive_link"
            target="_blank"
        >
            <span>My Resume</span>
            <FiExternalLink className="group-hover:-translate-y-[0.165rem] group-hover:translate-x-[0.165rem] transitions" />
        </a>
    );
};
