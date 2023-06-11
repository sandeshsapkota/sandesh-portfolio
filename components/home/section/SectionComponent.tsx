import classNames from "classnames";
import Image from "next/image";

interface SectionProps{
    title: string,
    desc: Array[string],
    contribution: string,
    linkUrl: string,
    linkText: string,
    imgUrl: string
}


const SectionComponent = (props:SectionProps) => {

    const {title, desc, contribution, linkText, linkUrl, imgUrl} = props

    return (
        <section className="project-section">
            <div className="container">
                <div className="project-content">
                    <div className="project-info">
                        <span className={classNames("project-title")}>{title}</span>
                        <div className="project-desc-wrapper">
                            {desc.map((item, i) =>   <p className="project-desc" key={i}>{item}</p>)}
                        </div>
                        <p className={classNames("project-contribution")}>{contribution}</p>
                        <a className="project-link" href={linkUrl}>{linkText}</a>
                    </div>
                    <figure className="project-img">
                        <Image src={imgUrl} alt="title" loading={'lazy'} placeholder={'blur'} fill={true} blurDataURL={"/placeholder.png"}/>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default SectionComponent
