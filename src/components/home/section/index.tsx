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

            <Section title="Nepal Population Census"
                     linkUrl="https://censusnepal.cbs.gov.np/results"
                              desc={["Census Visualization is a projects to showcase the results of Nepal Census 2078. It is a visual explaination of the Nepal Census 2078"]}
                              contribution={'implementation using next.js tailwind and apexcharts'}
                              linkText={"Visit Census Result"}
                              imgUrl={"/img_1.png"}/>
            <Section title="Property Management Platform | SALT"
                     linkUrl="https://pmp-frontend.property.staging.codingmountain.com"
                              desc={["Property Management Platform is a UK based property buying and selling platform to bring the transparency on buying-selling of property.","It has buyer, agent, seller and admin user. The agent add a property  that buyer can bid and seller can get the bidding information on his/her property"]}
                              contribution={'implemented public site of PMP using next.js '}
                              linkText={"Visit SALT"}
                              imgUrl={"/img_2.png"}/>
            <Section title="Design Wall"
                     linkUrl={'https://designwall.yipl.com.np'}
                              desc={["Design Wall is developed to showcase the work in progress design of all  projects in YoungInnovations.", " It is a Figma plugin and web application. Figma user can export the frame from figma to Design Wall's server.",
                              "On the Design Wall application, user can do CRUD operation, react with emoji and comment which will be updated on real time to all connected clients."]}
                              contribution={'implemented using next.js, typescript, react-motion, socket.io, node.js, express and minio'}
                              linkText={"Visit Design Wall"}
                              imgUrl={"/img_4.png"}/>
            <Stacks/>

        </div>
    )
}

export default Index
