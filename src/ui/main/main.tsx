import React from "react";
import styles from "./main.module.css";
import { joinClassNames } from "library";

interface MainProps extends React.HTMLAttributes<HTMLDivElement> {
    navOpen: boolean;
}

function Main(props: MainProps) {
    const variantStyle = props.navOpen ? styles.navOpen : "";

    const joinedClassNames = joinClassNames(
        styles.main,
        variantStyle,
        props.className!
    );

    return (
        <main {...props} className={joinedClassNames}>
            {props.children}
        </main>
    );
}

export default Main;
