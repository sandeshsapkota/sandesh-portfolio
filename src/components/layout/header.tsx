import Logo from "./logo";
import Link from "next/link"
import {useRouter} from "next/router";
import classNames from "classnames";

const Header = () => {
    const router = useRouter()
    const {pathname} = router

    const links = [
        {
            name: 'Products I have worked with',
            mobileName: 'Products',
            route: '/products',
        },
        {
            name: 'Experiments',
            route: '/experiments',
        },
        {
            name: 'Contacts',
            route: '/contacts',
            hideOnMobile: true,
        },
    ]

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <nav className="nav">
                    <ul className={'flex gap-8 sm:gap-10'}>
                        {links.map(link => (
                            <li className={classNames("nav-item", {
                                'hidden md:block': link.hideOnMobile
                            })} key={link.route}>
                                <Link href={link.route}
                                      className={classNames("nav-link", {'nav-link-active': link.route === pathname})}>
                                    {link.mobileName ? (
                                        <>
                                            <span className="hidden md:inline">{link.name}</span>
                                            <span className="md:hidden">{link.mobileName}</span>
                                        </>
                                    ) : (
                                        link.name
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
