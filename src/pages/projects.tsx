import RootLayout from "@/components/layout/layout";
import Sections from "@/components/home/section";
import SmoothScroll from "@/components/SmoothScroll";

const About = () => {

    return (
        <SmoothScroll>
            <RootLayout>
                <div className="container min-h-container">
                    <Sections/>
                </div>
            </RootLayout>
        </SmoothScroll>
    )
}

export default About
