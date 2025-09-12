import Section from "./Section";
import Stacks from "@/components/stacks";

const Index = () => {
    return (
        <div className="flex flex-col gap-14">
            <Section title="DOCSUMO | Document AI"
                     linkUrl="https://docsumo.com"
                     desc={["Docsumo is a Document AI software that helps you convert unstructured documents such as invoices, bank statements, tax returns to structured and actionable data."]}
                     linkText={"Visit Docsumo app"}
                     imgUrl={"/img_1.png"}/>
            <Section
                title="Enabley"
                linkUrl={'https://enabley.io'}
                desc={["Enabley is a complete desk-less learning platform any where at any time or any device or remotely, user can train and communicate with their team, partners, and clients with critical business knowledge."]}
                linkText={"Visit Enabley"}
                imgUrl={"/img.png"}/>
            <Stacks/>
        </div>
    )
}

export default Index
