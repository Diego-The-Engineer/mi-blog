import React, { useEffect, useRef, useState } from 'react';
import './Reveal.css';

const Reveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1 
        });

        const { current } = domRef;
        if (current) observer.observe(current);
        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    return (
        <div 
            className={`reveal-wrapper ${isVisible ? 'is-visible' : ''}`} 
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default Reveal;