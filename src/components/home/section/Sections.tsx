import SectionComponent from "@/components/home/section/SectionComponent.tsx";

const Sections = () => {
    return (
        <div>
          <SectionComponent
                   desc="Enabley is The Complete Deskless-First Learning Platform AnyWhere AnyTime AnyDevice Remotely train and communicate with your team, partners, and clients with critical business knowledge."
                   linkText={"Visit Enabley ↗"}
                   imgUrl={"/img.png"}/>
            <SectionComponent
                              desc="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development."
                              contribution={'Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.'}
                              imgUrl={"/img_3.png"}/>
            <SectionComponent title="03 / Nepal Population Census"
                     desc="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development."
                     contribution={'Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.'}
                     linkText={"Visit Site ↗"}
                     imgUrl={"/img_1.png"}/>
            <SectionComponent title="04 / Property Management Platform | SALT"
                     desc="Property Management Platform - now SALT - is a UK based property buying and selling platform to bring the transparency on buying-selling of property. It has buyer, agent, seller and admin user. The agent add a property  that buyer can bid and seller can get the bidding information on his/her property"
                     contribution={'Implemented public site UI for PMP using NEXT Js.'}
                     linkText={"Visit site ↗"}
                     imgUrl={"/img_2.png"}/>
            <SectionComponent title="05 / Design Wall"
                          desc={"DesignWall is developed to showcase the Work in Progress design of all  projects in YoungInnovations. It is a Figma plugin and web application. Figma user can export the frame from figma to design wall server.\n" +
                              "On the design wall application, It has CRUD feature of the image, reacting with emoji and commenting with real time updating to all connected clients."}
                     contribution={'implemented using next js, typescript, react-motion, socket.io, node.js, express and minio'}
                     linkText={"Visit Site ↗"}
                     imgUrl={"/img_4.png"}/>

        </div>

    )
}

export default Sections
