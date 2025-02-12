function copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.classList.add('clip-board')
    textarea.style.position = 'fixed';  // Make it invisible
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    if (textarea && document.body.contains(textarea)) {
        setTimeout(() => {
            const textArea = document.querySelector('.clip-board')
            if(textArea) {
                textArea.remove()
            }
        }, 40);
    }
}


function scaleNumber(percentage: number, max: number = 80, min: number = 0) {
    return Math.floor(Math.max(min, Math.min(max, percentage)));
}

const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function calculateInsetValue(currentPercentage: number, highPercentage: number) {
    currentPercentage = Math.max(0, Math.min(100, currentPercentage));
    highPercentage = Math.max(0, Math.min(100, highPercentage));
    const maxvalue = isMobileDevice() ? 24 : 48
    let decreasingValue = (currentPercentage / highPercentage) * maxvalue;
    decreasingValue = Math.min(maxvalue, decreasingValue);
    return decreasingValue - 2 || 0;
}

function scaleBorderRadius(percentage: number, max?: number | undefined): string {
    max = isMobileDevice() ? 32 : 40
    const min = 0;
    const radius = percentage < 2 ? Math.max(min, Math.min(max, percentage)) : max
    return Math.floor(radius) + "px";
}

const handleSvgScaling = (currentPercentage: number, highestPercentage: number) => {
    highestPercentage = Math.max(0, Math.min(100, highestPercentage));
    currentPercentage = Math.max(0, Math.min(100, currentPercentage));

    const min = 0.75;
    const max = 1;
    const calculatedValue = min + (currentPercentage / highestPercentage) * (max - min);
    return Math.max(min, Math.min(max, calculatedValue));
}

function getVisibleSize(className: string): any {
    const element: Element | null = document.querySelector(`.${className}`);

    function isElementInViewport(el: Element) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    let visibleSize = 0;

    function calculateVisibleSize() {
        if (element && isElementInViewport(element)) {
            visibleSize = element.clientHeight;
        }

        return visibleSize;
    }

    return calculateVisibleSize();
}

const clientHeight = () => window.innerHeight || document.documentElement.clientHeight;

const bannerParentHeight = (bannerParentRef: any): number => {
    const bannerParent = bannerParentRef?.current;
    return bannerParent?.clientHeight || 0
}

const bannerParentTop = (bannerParentRef: any): number => {
    const bannerParent = bannerParentRef?.current;
    return (bannerParent?.getBoundingClientRect().top || 0);
}

const findFooterVisiblePortion = (): number => {
    const footerFromTop = document.querySelector('.footer')?.getBoundingClientRect().top || 0
    const value = document.documentElement.clientHeight - footerFromTop
    return value < 0 ? 0 : value
}

const isPageScrollable = () => {
    return document.documentElement.scrollHeight > window.innerHeight;
};


const getPercentage = (bannerParentRef: any) => {
    const height = bannerParentHeight(bannerParentRef)
    const top = bannerParentTop(bannerParentRef) + findFooterVisiblePortion();

    const useInnerHeight = isMobileDevice();
    const viewportHeight = useInnerHeight ? window.innerHeight : document.documentElement.clientHeight;

    const scrollableLeft = (height - viewportHeight) + top;
    return (scrollableLeft / height) * 100
}

export {
    copyToClipboard,
    scaleNumber,
    scaleBorderRadius,
    handleSvgScaling,
    calculateInsetValue,
    getVisibleSize,
    getPercentage,
    isMobileDevice
}
