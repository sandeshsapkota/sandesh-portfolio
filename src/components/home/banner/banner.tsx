import {useContext, useEffect, useState} from "react";
import {ScrollContext} from "@/components/SmoothScroll";


const Banner = () => {
    const handleScrollTo:any = useContext(ScrollContext)
    const [targetEl, setTargetEl] = useState<Element | null>(null);

    useEffect(() => {
        setTargetEl(document.querySelectorAll('.project-section')[0])
    }, []);

    const scrollToNextSection = () => {
        if (!handleScrollTo || !targetEl) return
        const top = window.scrollY + targetEl?.getBoundingClientRect().top
        handleScrollTo(top);
    }

    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1 className="banner-title">
                        Hello, I’m <br/> Sandesh Sapkota.
                    </h1>
                    <p className="banner-desc">
                        A front end developer who is trying to specialize on best user experience
                    </p>
                </div>
                <button className="banner-btn" onClick={() => scrollToNextSection()}>
                    <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z"
                            fill="#181717"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}


export default Banner
