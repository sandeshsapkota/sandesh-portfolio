import RootLayout from "@/components/layout/layout";
import StackItem from "@/components/stacks/StackItem";
import Sections from "@/components/home/section";

const About = () => {


    const Stacks = () => {
        const stackItems = [
            {name: 'HTML', iconName: 'html'},
            {name: 'CSS', iconName: 'css'},
            {name: 'SASS', iconName: 'sass'},
            {name: 'Tailwind', iconName: 'tailwind'},
            {name: 'JavaScript', iconName: 'javascript'},
            {name: 'TypeScript', iconName: 'typescript'},
            {name: 'React', iconName: 'react'},
            {name: 'Next', iconName: 'next'},
            {name: 'Redux', iconName: 'redux'},
            {name: 'Framer Motion', iconName: 'framer'},
            {name: 'Vue', iconName: 'vue'}
        ];

        return (
            <div className="grid gap-10">
                <h2>Stacks</h2>
                <div className="w-[740px]">
                    <ul className="flex flex-wrap gap-16">
                        {stackItems.map((item, index) => (
                            <StackItem key={item.name} name={item.name} iconName={item.iconName}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <RootLayout>
            <div className="container min-h-container">
                <Stacks/>
            </div>
        </RootLayout>
    )
}

export default About
