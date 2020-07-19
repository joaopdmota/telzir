import React, { FunctionComponent } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

type SelectProps = {
    name: string;
    onBlur: (e: any) => void;
    setFieldValue: (key: string, value: any) => void;
    options: Array<any>;
    value: string;
};

const CustomSelect: FunctionComponent<SelectProps> = ({
    name,
    onBlur,
    options,
    value,
    setFieldValue,
}) => (
    <Wrapper>
        <Select
            placeholder=""
            options={options}
            name={name}
            value={
                options ? options.find((option) => option.value === value) : ''
            }
            onChange={(option: any) => setFieldValue(name, option.value)}
            onBlur={onBlur}
            theme={(theme: any) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                    ...theme.colors,
                    text: 'orangered',
                    primary25: 'hotpink',
                    primary: 'black',
                },
            })}
        />
    </Wrapper>
);

const Wrapper = styled.div`
    max-width: 200px;
`;
export default CustomSelect;
