import * as Yup from 'yup';
import { FormErrors } from './errors';

export const CalculatorInputSchema = Yup.object().shape({
    plan: Yup.string().required(FormErrors.requiredField),
    minutes: Yup.string()
        .required(FormErrors.requiredField)
        .matches(/^[0-9]+$/g, FormErrors.onlyNumbers),
    origin: Yup.string().required(FormErrors.requiredField),
    destiny: Yup.string().required(FormErrors.requiredField),
});
