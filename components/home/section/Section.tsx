import classNames from "classnames";
import Image from "next/image";

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


    const Arrow = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" x="0" y="0" viewBox="0 0 32 32"
                >
                <g><path d="M26.68 3.867H8.175a1 1 0 0 0 0 2h16.544L4.2 26.387A1 1 0 1 0 5.613 27.8l20.52-20.52v16.545a1 1 0 0 0 2 0V5.321a1.456 1.456 0 0 0-1.453-1.454z" fill="#000000"  ></path></g>
            </svg>
        )
    }

    return (
        <section className="project-section">
            <div className="container">
                <div className="project-content">
                    <div className="project-info">
                        <span className={classNames("project-title")}>{title}</span>
                        <div className="project-desc-wrapper">
                            {desc.map((item, i) => <p className="project-desc" key={i}>{item}</p>)}
                        </div>
                        <p className={classNames("project-contribution")}>{contribution}</p>
                        <a className="project-link" href={linkUrl}
                           target="_blank"><span>{linkText} </span> {linkUrl ? <Arrow/> : ''}</a>
                    </div>
                    <figure className="project-img">
                        <Image src={imgUrl} alt="title" loading={'lazy'} placeholder={'blur'} fill={true}
                               blurDataURL={"/placeholder.png"}/>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Section
