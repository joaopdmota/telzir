import * as Yup from 'yup';
import { FormErrors } from '../../../helpers/form/errors';

export const CalculatorInputSchema = Yup.object().shape({
    plan: Yup.string().required(FormErrors.requiredField),
    minutes: Yup.string()
        .required(FormErrors.requiredField)
        .matches(/^[0-9]+$/g, FormErrors.onlyNumbers),
    origin: Yup.string().required(FormErrors.requiredField),
    destiny: Yup.string().required(FormErrors.requiredField),
});

export const calcInitialState = Object.freeze({
    plan: '',
    minutes: '',
    origin: '',
    destiny: '',
});
