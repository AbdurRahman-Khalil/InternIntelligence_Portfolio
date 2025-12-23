import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiGmail } from "react-icons/si";




const socialLinks = [
    { href: "https://github.com/AbdurRahman-Khalil", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/abdurrehman16", icon: <FaLinkedin /> },
    { href: "mailto:m.abdurrahmankhalil2@gmail.com", icon: <SiGmail /> },
    { href: "https://www.upwork.com/freelancers/~018e00a1fc2a67328d?mp_source=share", icon: <SiUpwork /> }
];


export const Footer = () => {
    return (
        <footer className="section-styles py-5 flex justify-center items-center">
            <div className="social-links flex items-center gap-8 transitions">
                {socialLinks.map(({ href, icon }, index) => (
                    <a
                        key={index}
                        className="text-[1.35rem] text-neutral-100/45 hover:text-neutral-100 hover:scale-125 hover:rotate-15 transitions"
                        target="_blank"
                        href={href} 
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};
