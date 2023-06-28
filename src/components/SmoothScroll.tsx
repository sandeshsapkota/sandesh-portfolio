import {useEffect, useRef, createContext} from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
    enable: true,
    effect: 'glow',
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: '#E5E5E5',
};

const options = {
    damping: 0.07,
    plugins: {
        overscroll: {...overscrollOptions},
    },
}

export const ScrollContext:any = createContext(null)

const Scroll = (props:any) => {

    const scrollbarInstance = useRef<Scrollbar | null>(null);

    const handleScrollTo = (distance:number) => scrollbarInstance?.current?.scrollTo(0, distance, 600)

    useEffect(() => {
            Scrollbar.use(OverscrollPlugin);
            const element: HTMLElement | null = document.body.querySelector('.main-scrollbar')
            if (element) {
                scrollbarInstance.current = Scrollbar.init(element, options);
            }
            return () => {
                if (scrollbarInstance.current && element) scrollbarInstance.current.destroy()
            }
        },
        []);

    return (
        <ScrollContext.Provider value={handleScrollTo}>
            <div className={'main-scrollbar'}>
                {props.children}
            </div>
        </ScrollContext.Provider>
    )
}

export default Scroll;
