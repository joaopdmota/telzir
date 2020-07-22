import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import { FaRegSadCry } from 'react-icons/fa';

import StyledCard from '../Card';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../FormControl/Input';
import Error from '../FormControl/Error';
import Select from '../FormControl/Select';
import { InputWrapper, Label } from '../Layout';
import Divider from '../Divider';
import { Options } from '../../../helpers';
import { CalculatorInputSchema, calcInitialState } from './form.schema';
import { getDiscountRequest, mappedCalls } from '../../core';

const setOptions = (options: any, value: any) =>
    options
        .filter(({ origin }: any) => origin === value)
        .map((call: any) => call.destinations)
        .reduce((acc: any, item: any) => item, [])
        .map((destiny: any) => ({
            label: destiny,
            value: destiny,
        }));

const Form: FunctionComponent = () => {
    const [modalResponse, setModalResponse] = useState(false);
    const [simulationResults, setSimulationResults] = useState({
        withFaleMais: 0,
        withoutFaleMais: 0,
        minutes: 0,
        discountOffered: 0,
        status: 400,
    });
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Wrapper>
            <Formik
                validateOnMount
                initialValues={calcInitialState}
                validationSchema={CalculatorInputSchema}
                onSubmit={async (values) => {
                    setIsLoading(true);
                    const simulationResult = await getDiscountRequest(values);
                    setSimulationResults({ ...simulationResult });
                    setIsLoading(false);
                    setModalResponse(true);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <InputWrapper>
                            <Label>Minutos</Label>
                            <Divider space={15} />
                            <Input
                                name="minutes"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.minutes}
                            />
                            <Error name="minutes" />
                        </InputWrapper>

                        <Divider space={15} />

                        <InputWrapper>
                            <Label>Origem</Label>
                            <Divider space={15} />
                            <Select
                                name="origin"
                                options={Options.areas}
                                onBlur={handleBlur}
                                setFieldValue={setFieldValue}
                                value={values.origin}
                            />
                            <Error name="origin" />
                        </InputWrapper>

                        <Divider space={15} />

                        <InputWrapper>
                            <Label>Destino</Label>
                            <Divider space={15} />
                            <Select
                                name="destiny"
                                options={
                                    values.origin !== ''
                                        ? setOptions(mappedCalls, values.origin)
                                        : []
                                }
                                onBlur={handleBlur}
                                setFieldValue={setFieldValue}
                                value={values.destiny}
                            />
                            <Error name="destiny" />
                        </InputWrapper>

                        <Divider space={15} />

                        <InputWrapper>
                            <Label>Plano</Label>
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
                        </InputWrapper>

                        <Button
                            isLoading={isLoading}
                            styles={{
                                width: 'max-content',
                            }}
                            text="Quero economizar"
                        />
                    </form>
                )}
            </Formik>

            {modalResponse && (
                <Modal
                    isOpen={modalResponse}
                    closeModal={() => setModalResponse(false)}
                >
                    {simulationResults?.status === 400 && (
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <ErrorMessage>
                                <span>Não há planos a serem utilizados</span>
                                <FaRegSadCry />
                            </ErrorMessage>
                        </Grid>
                    )}

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <StyledCard
                            title="Com fale mais"
                            content={simulationResults?.withFaleMais.toFixed(2)}
                        />
                        <StyledCard
                            title="Sem fale mais"
                            content={simulationResults.withoutFaleMais.toFixed(
                                2,
                            )}
                        />
                    </Grid>
                </Modal>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;

    & form {
        height: calc(100vh - 400px);
        overflow: auto;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 768px) {
            height: max-content;
        }
    }
`;

const ErrorMessage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & span {
        font-size: 18px;
        margin-right: 10px;
    }

    & svg {
        font-size: 28px;
    }
`;

export default Form;
