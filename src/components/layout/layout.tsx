import {ReactNode} from "react";
import Head from "next/head"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Scrollbar from "@/components/SmoothScroll";

const RootLayout = ({children}: { children: ReactNode }) => {
    return (
        <div className="main-scrollbar">
            <Head>
                <title> sapkota | front end developer</title>
                <link rel="icon" type="image/x-icon" href="./favicon.svg"/>
            </Head>
            <Scrollbar/>
            <Header/>
             {children}
            <Footer/>
        </div>
    );
}

export default RootLayout
