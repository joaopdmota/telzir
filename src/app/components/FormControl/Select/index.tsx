import React, { FunctionComponent } from 'react';
import Select from 'react-select';

interface SelectProps {
    name: string;
    onBlur: (e: any) => void;
    setFieldValue: (key: string, value: any) => void;
    options: Array<any>;
    value: string;
}

const CustomSelect: FunctionComponent<SelectProps> = ({
    name,
    onBlur,
    options,
    value,
    setFieldValue,
}) => (
    <Select
        placeholder=""
        options={options}
        name={name}
        value={options ? options.find((option) => option.value === value) : ''}
        onChange={(option: any) => setFieldValue(name, option.value)}
        onBlur={onBlur}
        styles={customStyles}
    />
);

const customStyles = {
    menuList: () => ({
        paddingTop: 0,
    }),
    option: (...params: any) => ({
        padding: 20,
        '&:hover': {
            background: 'hotpink',
            color: 'white',
        },
        background: params[1].isSelected ? 'black' : 'unset',
        color: params[1].isSelected ? 'white' : 'unset',
    }),
    control: () => ({
        width: 200,
        display: 'flex',
        background: 'white',
        borderRadius: 5,
    }),
    menu: () => ({
        marginTop: 1,
        width: 200,
        background: 'white',
    }),
};

export default CustomSelect;
