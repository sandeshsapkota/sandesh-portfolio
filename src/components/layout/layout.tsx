import {ReactNode, useEffect, useRef} from "react";
import Head from "next/head"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Scrollbar from "@/components/SmoothScroll";
import * as React from "react";
import {useRouter} from "next/router";
import {motion, AnimatePresence} from "framer-motion";
import CustomTooltip from "@/components/tooltip";

const RootLayout = ({children}: { children: ReactNode }) => {
    const router = useRouter()

    const pathname = router.pathname
    const isHome = pathname === '/'

    const Content = () => {
        return (
            <>
                <Head>
                    <title> sapkota | front end engineer</title>
                    <link rel="icon" type="image/x-icon" href="./favicon.svg"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbit&display=swap"/>
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
                          rel="stylesheet"/>
                </Head>
                <Header/>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={router.pathname}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={{
                            pageInitial: {
                                opacity: 0,
                            },
                            pageAnimate: {
                                opacity: 1,
                            },
                            pageExit: {
                                opacity: 0,
                            },
                        }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <CustomTooltip
            />
            {isHome ?
                <Content/> :
                <>
                    <Content/>
                </>
            }
        </>
    )
}

export default RootLayout
