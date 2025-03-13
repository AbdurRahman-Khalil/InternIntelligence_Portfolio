import { useState, useEffect } from 'react';

import { IoIosArrowRoundUp } from "react-icons/io";



export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);

    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 z-50 text-[1.9rem] text-neutral-100 px-1 py-2 bg-neutral-50/10 hover:bg-neutral-50/15 backdrop-blur-lg border-2 border-neutral-100/35 rounded-full 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transform transitions cursor-pointer
                `}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }} // Prevent clicking when hidden
        >
            <IoIosArrowRoundUp />
        </button>
    );
};
