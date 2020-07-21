import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean;
    isLoading?: boolean;
    styles?: any;
    handleClick?: () => void;
    text: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({
    disabled,
    handleClick,
    styles,
    text,
    isLoading,
}) => (
    <StyledButton
        style={styles}
        disabled={disabled || false}
        onClick={handleClick}
    >
        {isLoading ? 'Carregando' : text}
    </StyledButton>
);

const StyledButton = styled.button`
    background-color: rgb(255, 255, 255);
    color: rgb(15, 33, 55);
    font-size: 16px;
    padding: 15px;
    border: unset;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        box-shadow: rgb(30, 42, 74) 0px 12px 24px -10px;
    }
`;

export default Button;
