import React, { FunctionComponent } from 'react';
import Select from 'react-select';

interface SelectProps {
    name: string;
    onBlur: (e: any) => void;
    setFieldValue: (key: string, value: any) => void;
    options: Array<any>;
    value: string;
}

const setValue = (options: any, value: any, name: any) =>
    options.filter((option: any) => option.value === value);

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
        value={setValue(options, value, name)}
        onChange={(option: any) => {
            if (name === 'origin') {
                setFieldValue('destiny', '');
            }
            setFieldValue(name, option.value);
        }}
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
            background: '#c31432',
            color: 'white',
        },
        background: params[1].isSelected ? '#240b36' : 'unset',
        color: params[1].isSelected ? 'white' : 'unset',
    }),
    control: () => ({
        width: 200,
        display: 'flex',
        background: 'white',
        borderRadius: 5,

        '@media only screen and (max-width: 1200px)': {
            width: '100%',
        },
    }),
    menu: () => ({
        marginTop: 1,
        width: 200,
        background: 'white',
    }),
};

export default CustomSelect;
