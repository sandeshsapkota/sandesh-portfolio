import Section from "./Section";
import Stacks from "@/components/stacks";

const Index = () => {
    return (
        <div className="flex flex-col gap-14">
            <Section title="DOCSUMO | Document AI"
                     linkUrl="https://app.docsumo.com"
                     desc={["Docsumo is a Document AI software that helps you convert unstructured documents such as invoices, bank statements, tax returns to structured and actionable data."]}
                     contribution={'currently working on the main product'}
                     linkText={"Visit Docsumo app"}
                     imgUrl={"/img_1.png"}/>

            <Section
                title="Enabley"
                linkUrl={'https://enabley.io'}
                desc={["Enabley is a complete desk-less learning platform any where at any time or any device or remotely, user can train and communicate with their team, partners, and clients with critical business knowledge."]}
                contribution={'implemented  redesign of the main product , prioritizing on accessibility and enhancing the overall user experience.'}
                linkText={"Visit Enabley"}
                imgUrl={"/img.png"}/>

            <Section title="Nepal Population Census"
                     linkUrl="https://censusnepal.cbs.gov.np/results"
                              desc={["Census Visualization is a projects to showcase the results of Nepal Census 2078. It is a visual explaination of the Nepal Census 2078"]}
                              contribution={'implementation using next.js tailwind and apexcharts'}
                              linkText={"Visit Census Result"}
                              imgUrl={"/img_1.png"}/>
            <Stacks/>

        </div>
    )
}

export default Index
