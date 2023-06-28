import {ReactNode, useEffect, useRef} from "react";
import Head from "next/head"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Scrollbar from "@/components/SmoothScroll";

const RootLayout = ({children}: { children: ReactNode }) => {
    useEffect(() => {
        const customCursor: HTMLElement | null = document.querySelector('.custom-cursor');
        const handleMouse = (e: any) => {
            if(customCursor) {
                const {x, y} = e
                customCursor.style.top = y + "px";
                customCursor.style.left = x + "px";
            }
        }
        if (customCursor) {
            window.addEventListener('mousemove', handleMouse)
        }
    })

    return (
        <Scrollbar>
            <Head>
                <title> sapkota | front end developer</title>
                <link rel="icon" type="image/x-icon" href="./favicon.svg"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbit&display=swap"/>
            </Head>
            <div className="custom-cursor">
            </div>
            <Header/>
            {children}
            <Footer/>
        </Scrollbar>
    );
}

export default RootLayout
