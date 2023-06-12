"use client"
import Scrollbar from "smooth-scrollbar";
const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1 className="banner-title">
                        Hello, I’m <br/> Someone
                    </h1>
                    <p className="banner-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, deleniti distinctio impedit iure iusto magnam modi molestias numquam perferendis porro quas quisquam ratione, sapiente similique sint unde velit. Iste, quasi.
                    </p>
                </div>
                <button className="banner-btn" >
                    <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z"
                            fill="#181717"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}


export default Banner
