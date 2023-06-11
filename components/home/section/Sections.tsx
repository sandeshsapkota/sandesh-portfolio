import SectionComponent from "./SectionComponent";

const Sections = () => {
    return (
        <div id={'section'}>
            <SectionComponent
                title={"01 | Enabley"}
                desc={["Enabley is a complete desk-less learning platform any where at any time or any device or remotely, user can train and communicate with their team, partners, and clients with critical business knowledge."]}
                contribution={'Currently implementing the redesign of the application.'}
                linkText={"Visit Enabley ↗"}
                imgUrl={"/img.png"}/>

            <SectionComponent title="02 | Nepal Population Census"
                              desc={["Census Visualization is a projects to showcase the results of Nepal Census 2078. It is a visual explaination of the Nepal Census 2078"]}
                              contribution={'implementation using next.js tailwind and apexcharts'}
                              linkText={"Visit Site ↗"}
                              imgUrl={"/img_1.png"}/>
            <SectionComponent title="03 | Property Management Platform | SALT"
                              desc={["Property Management Platform is a UK based property buying and selling platform to bring the transparency on buying-selling of property.","It has buyer, agent, seller and admin user. The agent add a property  that buyer can bid and seller can get the bidding information on his/her property"]}
                              contribution={'Implemented public site UI for PMP using NEXT Js.'}
                              linkText={"Visit site ↗"}
                              imgUrl={"/img_2.png"}/>
            <SectionComponent title="04 | Design Wall"
                              desc={["Design Wall is developed to showcase the work in progress design of all  projects in YoungInnovations.", " It is a Figma plugin and web application. Figma user can export the frame from figma to Design Wall's server.",
                              "On the Design Wall application, user can do CRUD operation, react with emoji and comment which will be updated on real time to all connected clients."]}
                              contribution={'implemented using next js, typescript, react-motion, socket.io, node.js, express and minio'}
                              linkText={"Visit Site ↗"}
                              imgUrl={"/img_4.png"}/>

            <SectionComponent
                title="O5 | Judicial Management System"
                desc={["JMS is a platform for citizens especially women and marginalized groups to report complaints (online) for rural part of the nepal. It is used by Judical committees of the local goverments."]}
                contribution={'Implemented dashboard using Vue and developed charts using Apexcharts'}
                imgUrl={"/img_3.png"}/>

        </div>

    )
}

export default Sections
