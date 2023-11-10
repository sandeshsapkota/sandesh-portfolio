import Logo from "./logo";
import {Codepen, Discord, Github, Linkedin, WhatsApp} from "@/pages/contacts";
import classNames from "classnames";

const Footer = () => {
    const socialLinks = [
        {
            name: 'Codepen',
            url: 'https://codepen.io/sandeshsapkota',
            icon: <Codepen/>,
        },
        {
            name: 'Github',
            url: 'https://github.com/sandeshsapkota',
            icon: <Github/>,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sandesh-sapkota',
            icon: <Linkedin/>,
        },
        {
            name: 'Discord',
            url: 'https://github.com/sandeshsapkota',
            icon: <Discord/>,
        },
        {
            name: 'Whatsapp',
            url: 'https://github.com/sandeshsapkota',
            icon: <WhatsApp/>,
        },
    ];

    return (
        <footer className={"footer bg-black"}>
            <div className="container">
                {/*<b className="footer-name">Sandesh Sapkota⏤2023</b>*/}
                <div className="footer__logo-wrap">
                    <Logo fill={'white'}/>
                    <div>
                        2023 <span>|</span> SANDESH SAPKOTA
                    </div>
                </div>
                <nav className="footer-nav -ml-3 sm:ml-auto">
                    <ul className={'footer-nav-list'}>
                        {socialLinks.map((link, index) => {
                                const Icon = link.icon
                                return (
                                    <li key={index} className="footer-nav-item flex items-center justify-center">
                                        <a href={link.url} target="_blank" className="footer-nav-link">
                                            {Icon}
                                        </a>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </nav>
            </div>
        </footer>
    )
}


export default Footer
