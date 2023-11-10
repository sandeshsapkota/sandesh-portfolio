import StackIcon from "@/assets/icons/StackIcon";

interface StackItemProps {
    name: string,
    iconName: string
}

const StackItem = (props: StackItemProps) => {
    const { name, iconName} = props
    return <li className="stack__item hover:bg-gray-300 transition duration-200">  <StackIcon name={iconName}/> {name}</li>;
}

export default StackItem
