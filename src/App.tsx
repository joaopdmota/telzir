import React from 'react';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';
import Form from './Components/Form';

const App: React.FunctionComponent = () => (
    <Wrapper id="app">
        <StyledCookieConsent
            location="bottom"
            buttonText="Allow cookies"
            expires={365}
        >
            <span>
                This website uses cookies to enhance the user experience.
            </span>
        </StyledCookieConsent>
        <Form />
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

const StyledCookieConsent = styled(CookieConsent)`
    & span {
        font-size: 16px;
    }
`;

export default App;
