"use client"

import {ReactNode} from "react";
import './../styles/index.scss'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import {Scrollbar} from 'smooth-scrollbar-react';
import {useEffect,useRef} from "react";

const RootLayout = ({children}: { children: ReactNode }) => {
    const scrollbar = useRef<BaseScrollbar | null>(null);

    return (
            <html lang="en">
                <body>
                    {children}
                </body>
            </html>
    );
}

export default RootLayout
