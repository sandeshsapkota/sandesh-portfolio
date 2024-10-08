import Logo from "./logo";
import Link from "next/link"
import {useRouter} from "next/router";
import classNames from "classnames";

const Header = () => {
    const router = useRouter()
    const {pathname} = router

    const links = [
        {
            name: 'Projects',
            route: '/projects',
        },
        {
            name: 'Contacts',
            route: '/contacts',
        },
    ]

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <nav className="nav">
                    <ul className={'flex gap-8 sm:gap-10'}>
                        {links.map(link => <li className="nav-item" key={link.route}><Link href={link.route}
                                                                                           className={classNames("nav-link", {'nav-link-active': link.route === pathname})}>{link.name}</Link>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Header
