import Section from "./Section";
import Stacks from "@/components/stacks";

const Index = () => {
    return (
        <div className="flex flex-col gap-14">
            <Section title="Docsumo | Document AI"
                     linkUrl="https://docsumo.com"
                     desc={["Docsumo is a Document AI software that helps you convert unstructured documents such as invoices, bank statements, tax returns to structured and actionable data."]}
                     linkText={"Visit Docsumo app"}
                     imgUrl={"/img_1.png"}/>
            <Section
                title="YoungInnovations"
                linkUrl={'https://younginnovations.com.np'}
                desc={["YoungInnovations is a technology company that builds innovative, impactful digital solutions to address global development challenges.", "It specializes in global development, partnering with organizations to design technology that improves the lives of the poorest and most vulnerable communities."]}
                linkText={"Visit YoungInnovations"}
                imgUrl={"/img.png"}/>
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
