import { getDiscountRequest } from '../src/app/core';

it('Plan is invalid', async () => {
    const payload = {
        plan: 'FaleMais 30',
        minutes: '10',
        origin: '011',
        destiny: '016',
    };
    expect((await getDiscountRequest(payload)).status).toBe(400);
});

it('Plan is valid', async () => {
    const payload = {
        plan: 'FaleMais 30',
        minutes: '50',
        origin: '011',
        destiny: '016',
    };
    expect((await getDiscountRequest(payload)).status).toBe(200);
});
