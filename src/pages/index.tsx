import Banner from "@/components/home/banner/banner";
import Sections from "@/components/home/section";
import RootLayout from "@/components/layout/layout";

function Main() {
    return (
        <RootLayout>
            <Banner/>
            <Sections/>
        </RootLayout>
    );
}

export default Main
