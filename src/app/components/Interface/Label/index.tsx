import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface LabelProps {
    text: string;
}

const Label: FunctionComponent<LabelProps> = ({ text }) => (
    <StyledLabel>{text}</StyledLabel>
);

const StyledLabel = styled.span`
    font-size: 14px;
    line-height: 177.4%;
    -webkit-letter-spacing: 0.085em;
    -moz-letter-spacing: 0.085em;
    -ms-letter-spacing: 0.085em;
    letter-spacing: 0.085em;
    color: white;
`;

export default Label;
