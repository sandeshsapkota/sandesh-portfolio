import classNames from "classnames";
import {copyToClipboard} from "@/utils";
import ToolTipCustom from "@/components/tooltip";
import {Tooltip} from "react-tooltip";

interface SectionProps {
    title: string,
    desc: Array<string>,
    contribution: string,
    linkUrl?: string,
    linkText?: string,
    imgUrl: string
}

const Section = (props: SectionProps) => {

    const {title, desc, contribution, linkText, linkUrl, imgUrl} = props

    return (
        <section className="project-section">
            <div className="grid gap-12 project-content">
                <div className="project-info">
                    <div className="h-full flex flex-col">
                        <span className={classNames("project-title")}>{title}</span>
                        <div className="project-desc-wrapper">
                            {desc.map((item, i) => <p className="project-desc" key={i}>{item}</p>)}
                        </div>
                        <p className={classNames("project-contribution -mt-2")}>{contribution}</p>
                        <div className="mt-auto flex items-center rounded-md bg-gray-300 overflow-hidden">
                            {linkUrl && <a
                                data-tooltip-id="react-tooltip"
                                data-tooltip-content="copy-url"
                                onClick={() => copyToClipboard(linkUrl)}
                                className="group/copy flex h-14 w-14 items-center justify-center max-md:h-10 max-md:w-10 cursor-pointer"
                            >
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-5 w-5 fill-gray-500 duration-200 ease-out group-hover/copy:scale-125 group-hover/copy:fill-gray-900 max-md:h-4 max-md:w-4"
                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                                </svg>
                            </a>}
                            <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap sm:px-4 max-md:text-xs w-[240px] sm:w-auto">{linkUrl}</p>
                            <a data-tooltip-id="react-tooltip"
                               data-tooltip-content="visit site"
                               className="group/link flex h-14 w-14 items-center justify-center max-md:h-10 max-md:w-10"
                               href={linkUrl} target="_blank">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-5 w-5 fill-gray-500 duration-200 ease-out group-hover/link:scale-125 group-hover/link:fill-gray-900 max-md:h-4 max-md:w-4"
                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                                    <path
                                        d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section
