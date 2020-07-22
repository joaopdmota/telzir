import React, { FunctionComponent } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

interface InputProps {
    name: string;
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    value: string;
}

const Input: FunctionComponent<InputProps> = ({
    name,
    onChange,
    onBlur,
    value,
}) => (
    <CustomInput
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type="text"
    />
);

const CustomInput = styled(Field)`
    outline: none;
    border: 1px solid blanchedalmond;
    padding: 10px;
    border-radius: 5px;
    max-width: 100px;

    @media screen and (max-width: 768px) {
        max-width: unset;
    }
`;

export default Input;
