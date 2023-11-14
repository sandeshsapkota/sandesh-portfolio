import {useEffect, useRef, useState} from "react";
import {calculateInsetValue, getPercentage, handleSvgScaling, isMobileDevice, scaleBorderRadius} from "@/utils";
import classNames from "classnames";
import {motion} from "framer-motion"
import section from "@/components/home/section";


/**
 * Calculate border radius based on a percentage.
 * @param {number} percentage - The percentage value used to calculate the border radius.
 * @returns {number} - The calculated border radius value.
 */
const calculateBorderRadius = (percentage: number) => {
    const highestPercentage = 6;
    const maxRadius = 50
    const pixels = (percentage * maxRadius) / highestPercentage;
    return Math.min(Math.max(pixels, 0), maxRadius);
}


const Banner = (props: { scrollRef: any }) => {
    /*
    *  STATE
    * */
    const bannerParentRef = useRef<HTMLDivElement | null>(null)
    const bannerStickyRef = useRef<HTMLDivElement | null>(null)
    const bannerRef = useRef<HTMLDivElement | null>(null)
    const bannerSvgRef = useRef<any>(null);

    const [percentage, setPercentage] = useState(0)

    /*
    * HANDLERS
    * */

    const handleInsetScaling = () => {
        const percent = getPercentage(bannerParentRef);
        if (bannerParentRef?.current && bannerRef?.current) {
            if (percent >= 0) {
                const insetValue = calculateInsetValue(percent, percentage)
                const radius = scaleBorderRadius(percent)
                bannerRef.current.style.inset = `${isMobileDevice() ? insetValue : insetValue / 1.5 }px ${insetValue}px`
                bannerRef.current.style.borderRadius = radius;
            }
        }
    }


    const handleScroll = () => {
        const bannerStickyRect: any =
            bannerStickyRef?.current?.getBoundingClientRect()

        if (bannerStickyRect) {
            const bannerStickyTop = bannerStickyRect.top

            if (bannerStickyTop > 0) {
                /*scale logo - depending on the y value */
            } else if (bannerStickyTop === 0) {
                handleInsetScaling()
                bannerSvgRef.current.style.scale =  handleSvgScaling(getPercentage(bannerParentRef), percentage);
            } else {
                // console.log('less than 0', bannerStickyTop)
            }
        }
    }

    const [clientHeight, setClientHeight] = useState<number | null>(null)

    useEffect(() => {
        if (document.documentElement.clientHeight) {
            setClientHeight(document.documentElement.clientHeight)
        }
        setPercentage(getPercentage(bannerParentRef))
    }, []);

    useEffect(() => {
        if (document.documentElement.clientHeight) {
            props?.scrollRef?.current?.on("scroll", (values: any) => {
                handleScroll()
            });
            /* INITIALIZING THE BANNER SCALING */
            handleInsetScaling()
        }
    }, [clientHeight])
    // @ts-ignore
    return (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >
                <div className="banner-parent " ref={bannerParentRef}>
                    <div className="h-screen sticky w-full top-0 overflow-hidden" ref={bannerStickyRef}>
                        <section className={classNames('banner')}
                                 ref={bannerRef}>
                            <svg className="w-[260px] h-[460px] sm:w-[540px] sm:h-[600px]"
                                 viewBox="0 0 204 98" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 ref={bannerSvgRef}
                            >
                                <g clipPath="url(#clip0_79_52)">
                                    <path
                                        d="M42.513 40.5405C40.3328 34.9344 37.0626 33.0657 33.4809 33.0657C30.2107 33.0657 26.9405 34.9344 26.9405 38.0489C26.9405 41.0077 28.8092 42.7206 32.3908 43.9664L42.6687 47.5481C54.1924 51.7527 65.8718 55.9573 65.8718 72.1527C65.8718 88.5038 49.5206 97.8474 32.7023 97.8474C17.5969 97.8474 3.42595 88.971 0 74.8L19.3099 68.7267C21.3344 73.2428 24.916 78.3817 32.7023 78.3817C37.997 78.3817 41.4229 74.9557 41.4229 71.8412C41.4229 70.284 40.1771 68.2596 36.284 66.7023L26.7847 63.2764C10.5893 57.3588 2.95878 49.1054 2.95878 37.5817C2.95878 22.4764 16.974 13.6 32.3908 13.6C48.1191 13.6 58.5527 22.1649 63.2244 35.0901L42.513 40.5405ZM138.128 15.0016H162.733V95.9787H138.128V87.8809C137.038 90.684 129.719 97.5359 117.261 97.5359C98.7298 97.5359 77.3954 84.2993 77.3954 55.3344C77.3954 27.4596 98.7298 13.6 117.261 13.6C129.719 13.6 137.038 20.7634 138.128 22.4764V15.0016ZM120.843 75.8901C130.965 75.8901 139.218 68.8825 139.218 55.3344C139.218 42.2535 130.965 35.2458 120.843 35.2458C110.253 35.2458 101.221 42.4092 101.221 55.3344C101.221 68.7267 110.253 75.8901 120.843 75.8901ZM189.985 96.7573C182.51 96.7573 176.125 90.3725 176.125 82.8977C176.125 75.2672 182.51 68.8825 189.985 68.8825C197.615 68.8825 204 75.2672 204 82.8977C204 90.3725 197.615 96.7573 189.985 96.7573Z"
                                        fill={"#fff"}/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_79_52">
                                        <rect width="204" height="97.8473" fill="#e5e7eb"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </section>
                    </div>
                </div>
            </motion.div>
    )
}


export default Banner
