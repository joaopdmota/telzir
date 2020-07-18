import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const modalMessage =
    'Com o novo produto FaleMais da Telzir você adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes.';
const Form: React.FunctionComponent = () => {
    const [modalIsOpen, setIsOpen] = useState(true);

    const closeModal = () => setIsOpen(false);

    return (
        <Wrapper id="app">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={modalMessage}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export default Form;
