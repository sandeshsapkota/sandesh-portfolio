import Banner from "@/../../components/home/banner/banner";
import Sections from "@/../../components/home/section";
import Header from "@/../../components/layout/header";
import Scroll from "../../components/SmoothScroll"
import Footer from "@/../../components/layout/footer";

export default function Main() {
    return (
        <div className="main-scrollbar">
            <div>
                <Scroll/>
            </div>
            <Header/>
            <Banner/>
            <Sections/>
            <Footer/>
        </div>
    );
}
