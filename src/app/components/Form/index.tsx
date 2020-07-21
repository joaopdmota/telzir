import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import Chart from '../Chart';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../FormControl/Input';
import Error from '../FormControl/Error';
import Select from '../FormControl/Select';
import Divider from '../Divider';
import Label from '../Interface/Label';
import { CalculatorInputSchema, Options } from '../../../helpers';
import { getDiscountRequest } from '../../core';

const Form: FunctionComponent = () => {
    const [modalResponse, setModalResponse] = useState(false);
    const [simulationResults, setSimulationResults] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
                onSubmit={async (values) => {
                    setIsLoading(true);
                    const simulationResult = await getDiscountRequest(values);
                    setSimulationResults({
                        ...simulationResult,
                        simulationResult,
                    });
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
                    <Chart dataResult={simulationResults} />
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
    }
`;

export default Form;
