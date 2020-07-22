import React, { FunctionComponent, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';

import banner from '../../assets/images/banner.png';
import Button from '../components/Button';
import Divider from '../components/Divider';
import Form from '../components/Form';

// https://medium.com/@yangnana11/react-import-react-reveal-7f7d484f6802
const Zoom = require('react-reveal/Zoom');
const Fade = require('react-reveal/Fade');

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-image: -webkit-linear-gradient(
        139deg,
        rgb(100, 43, 115) 0%,
        rgb(198, 66, 110) 100%
    );

    @media (max-width: 950px) {
        overflow: auto;
        min-height: 100vh;
    }
`;

const StyledCookieConsent = styled(CookieConsent)`
    & span {
        font-size: 16px;
    }
`;

const PageContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin: 100px 200px 0px 200px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin: 0px;
        padding: 0px 20px;
    }

    @media (max-width: 950px) {
        flex-direction: column;
        margin: 50px 50px;
    }

    & .introduction {
        @media (max-width: 950px) {
            flex-direction: column;
        }
    }

    & .flex {
        width: 100%;

        & .introduction--text {
            font-family: 'Rowdies-Bold';
            display: flex;
            font-size: 28px;
            color: white;

            @media (max-width: 1054px) {
                font-size: 18px;
            }
        }

        & img {
            max-width: 100%;
            max-height: 700px;

            @media (max-width: 1054px) {
                max-height: 400px;
            }
        }
    }

    & .banner {
        display: flex;
        justify-content: center;

        @media (max-width: 950px) {
            padding-top: 50px;
        }
    }
`;

const Home: FunctionComponent = () => {
    const [startSimulation, setStartSimulation] = useState(false);

    return (
        <Wrapper>
            <StyledCookieConsent
                location="bottom"
                buttonText="Allow cookies"
                expires={365}
            >
                <span>
                    This website uses cookies to enhance the user experience.
                </span>
            </StyledCookieConsent>
            <PageContentWrapper>
                <div className="flex introduction">
                    <Fade left>
                        <span className="introduction--text">
                            Com o novo produto FaleMais da Telzir você adquire
                            um plano e pode falar de graça até um determinado
                            tempo (em minutos) e só paga os minutos excedentes.
                        </span>
                        <Divider space={30} />
                        {startSimulation ? (
                            <Form />
                        ) : (
                            <Button
                                handleClick={() => setStartSimulation(true)}
                                text="Calcular economia"
                            />
                        )}
                    </Fade>
                </div>
                <div className="flex banner">
                    <Zoom>
                        <img src={banner} alt="banner" />
                    </Zoom>
                </div>
            </PageContentWrapper>
        </Wrapper>
    );
};

export default Home;
