import StackItem from "@/components/stacks/StackItem";

const Stacks = () => {
    const stackItems = [
        {name: 'HTML', iconName: 'html'},
        {name: 'CSS', iconName: 'css'},
        {name: 'SASS', iconName: 'sass'},
        {name: 'Tailwind', iconName: 'tailwind'},
        {name: 'JavaScript', iconName: 'javascript'},
        {name: 'TypeScript', iconName: 'typescript'},
        {name: 'React', iconName: 'react'},
        {name: 'Redux', iconName: 'redux'},
        {name: 'Framer Motion', iconName: 'framer'},
    ];

    return (
        <div className="grid gap-10">
            <h2>Stacks</h2>
            <div className="md:w-[740px]">
                <ul className="flex flex-wrap gap-4  md:gap-8">
                    {stackItems.map((item, index) => (
                        <StackItem key={item.name} name={item.name} iconName={item.iconName}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Stacks
