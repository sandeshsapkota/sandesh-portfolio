import RootLayout from "@/components/layout/layout";
import Section from "@/components/home/section/Section";

const Experiments = () => {
    return (
        <RootLayout>
            <div className="container min-h-container">
                <div className="flex flex-col gap-14">
                    <Section 
                        title="3D Model Reviewer"
                        linkUrl="https://3d-model-reviewer-eight.vercel.app/"
                        desc={[
                            "A web-based tool for reviewing and analyzing 3D models. Built with Three.js and React, this application allows users to view, and interact with 3D models in real-time.",
                            "Features include model rotation, zoom, and detailed inspection capabilities."
                        ]}
                        contribution=""
                        linkText="Visit 3D Model Reviewer"
                        imgUrl="/3d-model.png"
                    />
                </div>
            </div>
        </RootLayout>
    )
}

export default Experiments
