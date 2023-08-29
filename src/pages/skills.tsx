import RootLayout from "@/components/layout/layout";
import StackItem from "@/components/about/StackItem";

const About = () => {
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
        <RootLayout>
            <div className="container min-h-container grid gap-10 py-12">
                <h2>Stack</h2>
                <ul className="stack__list">
                    {stackItems.map(item => (
                        <StackItem key={item.name} name={item.name} iconName={item.iconName}/>
                    ))}
                </ul>
            </div>
        </RootLayout>
    )
}

export default About
