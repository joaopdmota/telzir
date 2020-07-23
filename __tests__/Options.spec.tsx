import { Options } from '../src/helpers/options';

it('options schema have specific values', () => {
    const mockOptions = {
        plans: [
            {
                value: 'FaleMais 30',
                label: 'FaleMais 30',
            },
            {
                value: 'FaleMais 60',
                label: 'FaleMais 60',
            },
            {
                value: 'FaleMais 120',
                label: 'FaleMais 120',
            },
        ],
        areas: [
            { value: '011', label: '011' },
            { value: '016', label: '016' },
            { value: '017', label: '017' },
            { value: '018', label: '018' },
        ],
    };
    expect(Options).toEqual(mockOptions);
});
