import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface DividerProps {
    space: number;
}

const Divider: FunctionComponent<DividerProps> = ({ space }) => (
    <CustomDivider space={space}></CustomDivider>
);

export const CustomDivider = styled.div`
    display: flex;
    width: 100%;
    height: ${(props: DividerProps) =>
        props.space ? `${props.space}px` : '15px'};
`;

export default Divider;
