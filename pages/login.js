import React from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Head from "next/head";



function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Entrar</title>
                <h1>Esta es la página de entrada</h1>
            </Head>
            <LoginContainer>
                <Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"/>
                <Button 
                    variant="outlined" 
                    onClick={signIn}>¡Entra con tu cuenta Google!</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;           
`; 

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.div`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

