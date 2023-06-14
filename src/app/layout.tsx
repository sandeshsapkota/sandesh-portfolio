"use client"

import {ReactNode} from "react";
import './../styles/index.scss'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import {useRef} from "react";

const RootLayout = ({children}: { children: ReactNode }) => {
    const scrollbar = useRef<BaseScrollbar | null>(null);

    return (
            <html lang="en">
                <head>
                    <title>SANDESH | front end developer</title>
                    <link rel="icon" type="image/x-icon" href="/favicon.svg" />
                </head>
                <body>
                    {children}
                </body>
            </html>
    );
}

export default RootLayout
