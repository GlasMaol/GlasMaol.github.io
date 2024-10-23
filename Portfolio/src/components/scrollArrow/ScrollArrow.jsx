import React, { useEffect } from 'react';
import '../scrollArrow/scrollArrow.css'

function ScrollArrow() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollArrow = document.querySelector('.ca3-scroll-down-arrow');
            if (window.scrollY > 50) {
                scrollArrow.classList.add('hidden');
            } else {
                scrollArrow.classList.remove('hidden');
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
    );
}

export default ScrollArrow;
