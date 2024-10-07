import Section from "./Section";
import Stacks from "@/components/stacks";

const Index = () => {
    return (
        <div className="flex flex-col gap-14">
            <Section
                title="Enabley"
                linkUrl={'https://enabley.io'}
                desc={["Enabley is a complete desk-less learning platform any where at any time or any device or remotely, user can train and communicate with their team, partners, and clients with critical business knowledge."]}
                contribution={'implemented  redesign of the main product , prioritizing on accessibility and enhancing the overall user experience.'}
                linkText={"Visit Enabley"}
                imgUrl={"/img.png"}/>
            <Stacks/>
        </div>
    )
}

export default Index
