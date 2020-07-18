import React from 'react';

type ButtonProps = {
    handleClick: () => void;
    text: string;
};
const Button: React.FunctionComponent<ButtonProps> = ({
    handleClick,
    text,
}) => (
    <div>
        <span>{text}</span>
    </div>
);

export default Button;
