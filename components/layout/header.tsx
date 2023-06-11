import Logo from "./logo";

const Header = () => {
    return (
        <header className="header">
           <div className="container">
               <Logo/>
               <nav className="nav">
                   <ul className={'nav-list'}>
                       <li className="nav-item"><a href="#" className="nav-link">Work</a></li>
                       <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                       <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
                   </ul>
               </nav>
           </div>
        </header>
    )
}


export default Header
