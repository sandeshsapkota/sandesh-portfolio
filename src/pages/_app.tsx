import '@/assets/styles/app.scss'
import type { NextPage } from 'next'
import ToolTipCustom from "@/components/tooltip";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    layout?: string
}

interface AppPropsWithLayout {
    Component: NextPageWithLayout
    pageProps: any
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
       <>
           <Component {...pageProps} />
       </>
    )
}

export default MyApp
