import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Button from '../Button';
import Input from '../FormControl/Input';
import Error from '../FormControl/Error';
import Select from '../FormControl/Select';
import Divider from '../Divider';
import Label from '../Interface/Label';
import { CalculatorInputSchema } from '../../helpers/formSchemas';
import { Options } from '../../helpers/options';

const Form: FunctionComponent = () => {
    return (
        <Wrapper>
            <Formik
                validateOnMount
                initialValues={{
                    plan: '',
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
                    setFieldValue,
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

                        <Divider space={15} />

                        <Label text="Origem" />
                        <Divider space={15} />
                        <Select
                            name="origin"
                            options={Options.areas}
                            onBlur={handleBlur}
                            setFieldValue={setFieldValue}
                            value={values.origin}
                        />
                        <Error name="origin" />

                        <Divider space={15} />

                        <Label text="Destino" />
                        <Divider space={15} />
                        <Select
                            name="destiny"
                            options={Options.areas}
                            onBlur={handleBlur}
                            setFieldValue={setFieldValue}
                            value={values.destiny}
                        />
                        <Error name="destiny" />

                        <Divider space={15} />

                        <Label text="Plano" />
                        <Divider space={15} />
                        <Select
                            name="plan"
                            options={Options.plans}
                            onBlur={handleBlur}
                            setFieldValue={setFieldValue}
                            value={values.plan}
                        />
                        <Error name="plan" />
                        <Divider space={30} />

                        <Button
                            styles={{
                                width: 'max-content',
                            }}
                            handleClick={() => console.log('teste')}
                            text="Quero economizar"
                        />
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
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export default Form;
