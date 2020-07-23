import { calcInitialState } from '../src/app/components/Form/form.schema';

it('calculator schema should have specific values', () => {
    const initialState = {
        plan: '',
        minutes: '',
        origin: '',
        destiny: '',
    };
    expect(calcInitialState).toEqual(initialState);
});
