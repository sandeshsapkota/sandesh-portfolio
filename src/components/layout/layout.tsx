import {ReactNode, useEffect, useRef} from "react";
import Head from "next/head"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Scrollbar from "@/components/SmoothScroll";
import * as React from "react";
import {useRouter} from "next/router";

const RootLayout = ({children}: { children: ReactNode }) => {
    const router = useRouter()

    const pathname = router.pathname
    const isHome = pathname === '/'

    const Content = () => {
        return (
            <>
                <Head>
                    <title> sapkota | front end developer</title>
                    <link rel="icon" type="image/x-icon" href="./favicon.svg"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbit&display=swap"/>
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
                          rel="stylesheet"/>
                </Head>
                <Header/>
                {children}
                <Footer/>
            </>
        )
    }

    return (
        <>
            {isHome ?
                <Content/> :
                <Scrollbar>
                    <Content/>
                </Scrollbar>
            }
        </>
    )
}

export default RootLayout
