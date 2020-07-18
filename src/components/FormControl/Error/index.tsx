import React, { FunctionComponent } from 'react';
import { Field, getIn } from 'formik';
import styled from 'styled-components';

type ErrorProps = {
    name: string;
};

const InputError: FunctionComponent<ErrorProps> = ({ name }) => (
    <Error>
        <Field name={name}>
            {({ form }: any) => {
                const error = getIn(form.errors, name);
                const touch = getIn(form.touched, name);
                if (touch && error) return error;
                return null;
            }}
        </Field>
    </Error>
);

const Error = styled.span`
    font-size: 14px;
    line-height: 177.4%;
    letter-spacing: 0.085em;
    color: #eda1e4;
`;

export default InputError;
