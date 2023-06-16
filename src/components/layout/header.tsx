import Logo from "./logo";
import Link from "next/link"
import {useRouter} from "next/router";
import classNames from "classnames";
import SvgOne from "./SvgFileOne.jsx.svg"
import SvgTwo from "./SvgFileTwo.jsx.svg.jsx.svg"

const Header = () => {
    const router = useRouter()
    const {pathname} = router

    const links = [
        {
            name: 'Work',
            route: '/',
        },
        {
            name: 'About',
            route: '/about',
        },
        {
            name: 'Blogs',
            route: '/blogs',
        },
    ]

    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <nav className="nav">
                    <ul className={'nav-list'}>
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
