import { useEffect, useState, FC, PropsWithChildren } from "react";
import {isClient} from "@/utils";

const Bootstrap: FC<PropsWithChildren<{}>> = (props) => {
    /**
     * COMPONENT PROPS
     */
    const { children } = props;

    /**
     * COMPONENT STATE
     */
    const [booted, setBooted] = useState<boolean>(false);

    /**
     * MOUNTED HOOK -- BEFORE DOME INITIALIZATION
     */
    useEffect(() => {
        if (isClient()) {
            setBooted(true);
        }
    }, []);

    return <>{booted ? children : ""}</>;
};

export default Bootstrap;
