"use client"

import Logo from "./logo";
import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
           <div className="container">
               <Logo/>
               <nav className="nav">
                   <ul className={'nav-list'}>
                       <li className="nav-item"><Link href="/" className="nav-link">Work</Link></li>
                       <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
                       <li className="nav-item"><Link href="/blogs" className="nav-link">Blogs</Link></li>
                   </ul>
               </nav>
           </div>
        </header>
    )
}


export default Header
