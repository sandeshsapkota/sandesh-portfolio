import Section from "./Section";

const Index = () => {
    return (
        <>


            <Section title="02 | Nepal Population Census"
                     linkUrl="https://censusnepal.cbs.gov.np/results"
                              desc={["Census Visualization is a projects to showcase the results of Nepal Census 2078. It is a visual explaination of the Nepal Census 2078"]}
                              contribution={'implementation using next.js tailwind and apexcharts'}
                              linkText={"Visit Census Result ↗"}
                              imgUrl={"/img_1.png"}/>
            <Section title="03 | Property Management Platform | SALT"
                     linkUrl="https://pmp-frontend.property.staging.codingmountain.com"
                              desc={["Property Management Platform is a UK based property buying and selling platform to bring the transparency on buying-selling of property.","It has buyer, agent, seller and admin user. The agent add a property  that buyer can bid and seller can get the bidding information on his/her property"]}
                              contribution={'implemented public site ui for PMP using next.js '}
                              linkText={"Visit SALT ↗"}
                              imgUrl={"/img_2.png"}/>
            <Section title="04 | Design Wall"
                     linkUrl={'https://designwall.yipl.com.np'}
                              desc={["Design Wall is developed to showcase the work in progress design of all  projects in YoungInnovations.", " It is a Figma plugin and web application. Figma user can export the frame from figma to Design Wall's server.",
                              "On the Design Wall application, user can do CRUD operation, react with emoji and comment which will be updated on real time to all connected clients."]}
                              contribution={'implemented using next.js, typescript, react-motion, socket.io, node.js, express and minio'}
                              linkText={"Visit Design Wall ↗"}
                              imgUrl={"/img_4.png"}/>

            <Section
                linkText={"Sorry 😊"}
                title="O5 | Judicial Management System"
                desc={["JMS is a platform for citizens especially women and marginalized groups to report complaints (online) for rural part of the nepal. It is used by Judical committees of the local goverments."]}
                contribution={'implemented dashboard using vue and  apex charts'}
                imgUrl={"/img_3.png"}/>

        </>
    )
}

export default Index
