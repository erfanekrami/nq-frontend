import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Button, Page, Main, SvgIcon } from "ui";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import styles from "./pwa.module.css";

const pwaIntroPagePassed = () => {
    localStorage.setItem("pwaIntroPassed", "true");
};

function Pwa() {
    return (
        <Page>
            <Header>
                <Link to="/">
                    <Button variant="outlined" onClick={pwaIntroPagePassed}>
                        Intro
                    </Button>
                </Link>
            </Header>
            <Main
                style={{
                    position: "fixed",
                    top: "6rem",
                    height: "calc(100% - 6rem)",
                }}
            >
                <Container
                    maxWidth="sm"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <SvgIcon size={15}>
                        <Logo />
                    </SvgIcon>
                    <h1 style={{ lineHeight: "5rem", fontSize: "3rem" }}>
                        الْقُرآنُ النّاطِق
                    </h1>
                    <Button className={styles.getStartButton}>
                        Get start now!
                    </Button>
                    <span>
                        <a target="blank" href="https://nategh.info">
                            Privacy policy
                        </a>{" "}
                        .{" "}
                        <a target="blank" href="https://nategh.info">
                            Learn more
                        </a>
                    </span>
                </Container>
            </Main>
        </Page>
    );
}

export default Pwa;