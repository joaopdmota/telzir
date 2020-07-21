import React, { FunctionComponent, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const CustomChart: FunctionComponent<any> = ({ dataResult }) => {
    const [percentage, setpercentage] = useState(1);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setpercentage(80);
        setData({
            labels: ['Com Fale Mais', 'Sem Fale Mais'],
            datasets: [
                {
                    label: 'Economia utilizando Fale Mais',
                    data: [dataResult.withFaleMais, dataResult.withoutFaleMais],
                    backgroundColor: ['hotpink', 'purple'],
                    borderColor: ['black', 'purple'],
                    borderWidth: 1,
                },
            ],
        });
    }, [setpercentage, setData]);

    return <Bar data={data} height={500} width={500} />;
};

export default CustomChart;
