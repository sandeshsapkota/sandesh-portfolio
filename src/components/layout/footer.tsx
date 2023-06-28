import Logo from "./logo";

const Header = () => {
    return (
        <footer className="footer">
           <div className="container">
               <b className="footer-name">Sandesh Sapkota⏤2023</b>
               <nav className="nav">
                   <ul className={'nav-list'}>
                       <li className="nav-item"><a href="https://www.linkedin.com/in/sandesh-sapkota" target="_blank" className="nav-link">Linkedin</a></li>
                       <li className="nav-item"><a href="https://codepen.io/sandeshsapkota" target="_blank" className="nav-link">Codepen</a></li>
                   </ul>
               </nav>
           </div>
        </footer>
    )
}


export default Header
