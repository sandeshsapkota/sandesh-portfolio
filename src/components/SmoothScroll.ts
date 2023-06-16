import { useEffect } from 'react';
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
    damping : 0.07,
    plugins: {
        overscroll: { ...overscrollOptions },
    },
}

const Scroll = () => {
    useEffect(() => {
        Scrollbar.use(OverscrollPlugin);
        const element:HTMLElement | null= document.body.querySelector('.main-scrollbar')

        if(element) {
            Scrollbar.init(element, options);
        }
        return () => {
            if (Scrollbar && element) Scrollbar.destroy(element)
        }  },
        [])
    return null;
}

export default Scroll;