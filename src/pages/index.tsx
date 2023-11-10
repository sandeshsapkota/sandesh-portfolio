import * as React from 'react';
import Lenis  from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Banner from "@/components/home/banner/banner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {useEffect} from "react";

export default function App() {
    const scrollRef = React.useRef<any>();

    useEffect(() => {
        scrollRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // @ts-ignore
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });
        scrollRef.current.on('scroll', ScrollTrigger.update);
        const updateFunc: gsap.TickerCallback = (time) => {
            scrollRef.current?.raf(time * 1000);
        };
        gsap.ticker.add(updateFunc, false, true);
        return () => {
            gsap.ticker.remove(updateFunc);
            scrollRef.current?.destroy();
        };
    }, []);

    return (
        <main>
            <Header/>
            <Banner scrollRef={scrollRef}/>
            <Footer/>
        </main>
    );
}






