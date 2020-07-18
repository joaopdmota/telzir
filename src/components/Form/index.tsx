import React, { useEffect, useState, FunctionComponent } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Input from '../FormControl/Input';
import Error from '../FormControl/Error';
import Select from '../FormControl/Select';
import Divider from '../Divider';
import Label from '../Interface/Label';
import { CalculatorInputSchema } from '../../helpers/formSchemas';

const Form: FunctionComponent = () => {
    return (
        <Wrapper>
            <Formik
                validateOnMount
                initialValues={{
                    minutes: '',
                    origin: '',
                    destiny: '',
                }}
                validationSchema={CalculatorInputSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Label text="Minutos" />
                        <Divider space={15} />
                        <Input
                            name="minutes"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.minutes}
                        />
                        <Error name="minutes" />
                        <Divider space={30} />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;

    & form {
        display: flex;
        flex-direction: column;
    }
`;

export default Form;
