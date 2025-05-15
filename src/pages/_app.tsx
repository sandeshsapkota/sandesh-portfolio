import '@/assets/styles/app.scss'
import type { NextPage } from 'next'
import ToolTipCustom from "@/components/tooltip";
import { Toaster } from 'react-hot-toast';

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
           <ToolTipCustom />
           <Toaster 
               position="bottom-left"
               toastOptions={{
                   style: {
                       minWidth: '250px',
                       padding: '16px',
                       fontSize: '16px',
                   },
               }}
           />
       </>
    )
}

export default MyApp
