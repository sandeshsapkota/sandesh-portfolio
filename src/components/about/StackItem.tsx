import StackIcon from "@/assets/icons/StackIcon";

interface StackItemProps {
    name: string,
    iconName: string
}

const StackItem = (props: StackItemProps) => {
    const { name, iconName} = props
    return <li className="stack__item">  <StackIcon name={iconName}/> {name}</li>;
}

export default StackItem
