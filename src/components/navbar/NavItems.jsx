import { useState, useEffect, useRef } from "react";

import { NavItem } from "./NavItem";

import { IoClose } from "react-icons/io5";




const navLinks = [
    { destination: "#home", title: "Home" },
    { destination: "#about", title: "About" },
    { destination: "#skills", title: "Skills" },
    // { destination: "https://drive.google.com/file/d/1tPVmQ72du3iDKv7W_ROI9ytwfcXnrhVR/view?usp=drive_link", title: "Experience" },
    { destination: "#projects", title: "Projects" },
    { destination: "#contact", title: "Contact" },
];


export const NavItems = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState("#home");
    const menuRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset to trigger section earlier
            let currentSection = "#home";

            navLinks.forEach(link => {
                const section = document.querySelector(link.destination);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = link.destination;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen, setMenuOpen]);


    return (
        <ul
            ref={menuRef}
            className={`fixed ${menuOpen ? "right-0 opacity-100" : "-right-full opacity-0"} top-0 z-40 bg-neutral-800/95 border-l border-neutral-100/15 w-fit min-h-[100dvh] flex flex-col justify-center items-end gap-11 pl-18 pr-14 
            transition-all duration-700 ease-initial
            min-[850px]:static min-[850px]:bg-transparent min-[850px]:flex-row min-[850px]:items-center min-[850px]:justify-end min-[850px]:gap-10 min-[850px]:p-0 min-[850px]:min-h-fit min-[850px]:opacity-100`}
        >
            <button
                className="min-[850px]:hidden rounded-lg mb-8 cursor-pointer transitions"
                onClick={() => setMenuOpen(false)}
            >
                <IoClose size={35} />
            </button>
            {navLinks.map((link, index) => (
                <NavItem
                    key={link.destination}
                    index={index}
                    navItemDestination={link.destination}
                    navItemTitle={link.title}
                    isActive={link.destination === activeSection}
                />
            ))}
        </ul>
    );
};

