import * as Yup from 'yup';
import { FormErrors } from './formErrors';

export const CalculatorInputSchema = Yup.object().shape({
    minutes: Yup.string().required(FormErrors.requiredField),
    origin: Yup.string().required(FormErrors.requiredField),
    destiny: Yup.string().required(FormErrors.requiredField),
});
