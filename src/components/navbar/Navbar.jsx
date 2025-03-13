import { useState, useEffect } from "react";

import { Logo } from "./Logo";
import { NavItems } from "./NavItems";

import { CgMenuRight } from "react-icons/cg";



export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-30 flex justify-between items-center
                px-3.5 min-[640px]:px-5 pt-3 pb-[0.8rem] border-b border-neutral-100/0 transitions
                ${isScrolled ? "bg-neutral-50/5 backdrop-blur-xl border-neutral-100/10" : ""}`}
        >
            <Logo logoText={"PORTFOLIO."} />
            <NavItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <button
                className="lg:hidden rounded-lg cursor-pointer transitions"
                onClick={() => setMenuOpen(true)}
            >
                <CgMenuRight size={32} />
            </button>
        </nav>
    );
};