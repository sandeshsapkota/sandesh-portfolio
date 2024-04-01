import RootLayout from "@/components/layout/layout";
import Link from "next/link";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {copyToClipboard} from "@/utils";
import {ReactNode, useRef, useState} from "react";
import SmoothScroll from "@/components/SmoothScroll";


const EmailLink = (props: { href: string, text: string }) => {


    const {href, text} = props
    return (
        <div className="flex gap-4 md:w-1/4">
            <Link href={href}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 sm:pr-10 py-3 rounded text-sm flex  items-center relative group">
                <span> {text}</span>
                <span
                    className="ml-auto bg-gray-700 w-7 h-7 rounded-full flex items-center justify-center sm:absolute sm:-left-4 sm:-top-3 sm:opacity-0 sm:group-hover:opacity-100 transition duration-200">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" fill="white"/>
                        <path
                            d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"
                            fill="white"/>
                    </svg>
                </span>
            </Link>
            <ReactTooltip
                id="react-tooltip-1"
                place="top"
                content="Copy"
            />
            <button data-tooltip-id="react-tooltip-1" className="bg-gray-300 text-gray-700 px-4 py-3 rounded"
                    onClick={() => copyToClipboard(text)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-5 w-5"
                     style={{translate: "0 4px"}}
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="black"
                        d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                </svg>
            </button>
        </div>
    )
}

const SocialWrapper = (props: { icon: any, label: string, href: string }) => {
    const {icon: Icon, label, href} = props
    return (
        <Link href={href} target="_blank"
              className="bg-gray-300 hover:bg-gray-700  hover:text-white text-inherit transition duration-200 py-5 sm:p-10 rounded flex gap-1 flex-col justify-center items-center">
            {<Icon/>}
            <span className="text-xs">{label}</span>
        </Link>
    )
}

export const WhatsApp = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
             className="h-10 w-10 group-hover:fill-gray-200 max-md:h-8 max-md:w-8" height="1em"
             width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
        </svg>
    )
}

export const Discord = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
             className="h-10 w-10 group-hover:fill-gray-200 max-md:h-8 max-md:w-8" height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
        </svg>
    )
}

export const Github = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
             className="h-10 w-10 group-hover:fill-gray-200 max-md:h-8 max-md:w-8" height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
        </svg>
    )
}

export const Codepen = () => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32"
             className="h-10 w-10 group-hover:fill-gray-200 max-md:h-8 max-md:w-8" height="1em" width="1em"
             xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M 16 2.84375 L 15.4375 3.21875 L 3.4375 11.25 L 3 11.53125 L 3 20.46875 L 3.4375 20.75 L 15.4375 28.78125 L 16 29.15625 L 16.5625 28.78125 L 28.5625 20.75 L 29 20.46875 L 29 11.53125 L 28.5625 11.25 L 16.5625 3.21875 Z M 15 5.90625 L 15 11.34375 L 9.84375 14.8125 L 5.8125 12.09375 Z M 17 5.90625 L 26.1875 12.09375 L 22.15625 14.8125 L 17 11.34375 Z M 16 13.09375 L 20.34375 16 L 16 18.90625 L 11.65625 16 Z M 5 13.9375 L 8.0625 16 L 5 18.0625 Z M 27 13.9375 L 27 18.0625 L 23.9375 16 Z M 9.875 17.1875 L 15 20.65625 L 15 26.09375 L 5.8125 19.90625 Z M 22.125 17.1875 L 26.1875 19.90625 L 17 26.09375 L 17 20.65625 Z"></path>
            </g>
        </svg>
    )
}

export const Linkedin = () => {
    return (
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 30 30" width="30px"
             height="30px">
            <path
                d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/>
        </svg>
    )
}

const Section = (props: { title: string, children: ReactNode }) => {
    return (
        <div className="grid gap-6 sm:gap-8">
            <h1 className={"text-xl md:text-3xl text-balance"}>
                {props.title}
            </h1>
            {props.children}
        </div>
    )
}

const Contacts = () => {

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/sandesh-sapkota/",
            label: "sandesh-sapkota",
            icon: Linkedin,
        },
        {
            href: "https://api.whatsapp.com/send/?phone=9779748285477&text&type=phone_number&app_absent=0",
            label: "+977 9748285477",
            icon: WhatsApp,
        },
        {
            href: "https://discord.com/users/sandesh_hi",
            label: "sandesh_hi",
            icon: Discord,
        },
        {
            href: "https://github.com/sandeshsapkota",
            label: "sandeshsapkota",
            icon: Github,
        },
        {
            href: "https://codepen.io/sandeshsapkota",
            label: "sandeshsapkota",
            icon: Codepen,
        },
    ];


    return (
       <SmoothScroll>
           <RootLayout>
               <div className="container">
                   <div className="min-h-container">
                       <div className="grid gap-10 sm:gap-14">
                           <Section title={'I\'m on social networks .'}>
                               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 lg:w-2/3">
                                   {socialLinks.map((link, index) => (
                                       <SocialWrapper
                                           key={index} // Don't forget to add a unique key for each element in the array
                                           href={link.href}
                                           label={link.label}
                                           icon={link.icon}
                                       />
                                   ))}
                               </div>
                           </Section>

                           <Section title={'Also,  write by email .'}>
                               <EmailLink href={"mailto:sapkotasandesh88@gmail.com"} text={"sapkotasandesh88@gmail.com"}/>
                           </Section>
                       </div>
                   </div>
               </div>
           </RootLayout>
       </SmoothScroll>
    )
}

export default Contacts
