import Logo from "./logo";
import {Codepen, Discord, Github, Linkedin, WhatsApp} from "@/pages/contacts";

const Footer = () => {
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
                                return (
                                    <li key={index} className="footer-nav-item flex items-center justify-center">
                                        <a href={link.href} target="_blank" className="footer-nav-link">
                                            {link?.icon()}
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
