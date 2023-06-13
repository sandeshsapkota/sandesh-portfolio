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
                       <li className="nav-item"><a href="#" className="nav-link">Work</a></li>
                       <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
                       <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
                   </ul>
               </nav>
           </div>
        </header>
    )
}


export default Header
