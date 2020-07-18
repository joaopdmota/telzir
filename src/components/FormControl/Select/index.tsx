import React, { FunctionComponent } from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

type InputProps = {
    name: string;
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    value: string;
};

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
    />
);

const CustomInput = styled(Field)`
    outline: none;
    border: 1px solid blanchedalmond;
    padding: 10px;
`;

export default Input;
