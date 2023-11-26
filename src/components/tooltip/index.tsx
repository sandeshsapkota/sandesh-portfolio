import {Tooltip} from "react-tooltip";

const CustomTooltip = () => {
    return (
        <Tooltip
            id={'react-tooltip'}
            place="top"
            style={{
                borderRadius: 4,
                transitionDuration: '.2s'
            }}
        />
    )
}

export default CustomTooltip
