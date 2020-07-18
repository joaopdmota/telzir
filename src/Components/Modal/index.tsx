import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

type ModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel: string;
};
const Modal: React.FunctionComponent<ModalProps> = ({
    isOpen,
    onRequestClose,
    contentLabel,
}) => (
    <Wrapper>
        {isOpen && (
            <ModalContent>
                <span>{contentLabel}</span>
                <Button handleClick={onRequestClose} text="Entendi" />
            </ModalContent>
        )}
    </Wrapper>
);

const Wrapper = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 20px;
    padding: 60px;

    & span {
        font-size: 14px;
    }
`;
export default Modal;
