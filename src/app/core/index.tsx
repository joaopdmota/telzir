interface DiscountRequest {
    destiny: string;
    plan: string;
    origin: string;
    minutes: string;
}

export const getDiscountRequest = async (values: DiscountRequest) => {
    const { origin, minutes, plan, destiny } = values;

    await sleep(2000);
    return generateSimulation(origin, minutes, plan, destiny);
};

const generateSimulation = (
    origin: string,
    minutes: string,
    plan: string,
    destiny: string,
) => {
    const planMatch = fees
        .filter((fee) => fee.origin === origin && fee.destination === destiny)
        .map((fee) => fee.feePerMinute)
        .reduce((acc, item: any) => item || null, 0);

    const parsedMinutes = Number(minutes);
    const selectedPlan = Number(getPlan(plan));
    const sumWithoutPlan = Number(planMatch) * Number(minutes);
    const totalUsed = parsedMinutes - selectedPlan;
    const sumWithPlan = totalUsed * Number(planMatch);
    const faleMaisFee = 0.1;
    const finalCost = sumWithPlan * faleMaisFee + sumWithPlan;

    return parsedMinutes < selectedPlan
        ? {
              withFaleMais: 0,
              withoutFaleMais: sumWithoutPlan,
              minutes: parsedMinutes,
              discountOffered: 0,
              status: 400,
          }
        : {
              withFaleMais: finalCost,
              withoutFaleMais: sumWithoutPlan,
              minutes: parsedMinutes,
              discountOffered: sumWithoutPlan - finalCost,
              status: 200,
          };
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getPlan = (plan: string) => plan.replace(/[^0-9]/g, '');

export const fees = [
    {
        origin: '011',
        destination: '016',
        feePerMinute: '1.9',
    },
    {
        origin: '016',
        destination: '011',
        feePerMinute: '2.9',
    },
    {
        origin: '011',
        destination: '017',
        feePerMinute: '1.7',
    },
    {
        origin: '017',
        destination: '011',
        feePerMinute: '2.7',
    },
    {
        origin: '011',
        destination: '018',
        feePerMinute: '0.9',
    },
    {
        origin: '018',
        destination: '011',
        feePerMinute: '1.9',
    },
];

export const mappedCalls = [
    {
        origin: '011',
        destinations: ['016', '017', '018'],
    },
    {
        origin: '016',
        destinations: ['011'],
    },
    {
        origin: '017',
        destinations: ['011'],
    },
    {
        origin: '018',
        destinations: ['011'],
    },
];
