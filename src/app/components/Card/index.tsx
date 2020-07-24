import React, { FunctionComponent } from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import Grid from '../Grid';
import { H1 } from '../Layout';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 20,
        borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0 !important',
        boxShadow: '0 0.25rem 0.75rem rgba(0, 0, 0, .05) !important',
        border: '1px solid rgba(0,0,0,.125)',
    },
});

interface CardProps {
    content: any;
    title: string;
}
const StyledCard: FunctionComponent<CardProps> = ({ content, title }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <H1>{title}</H1>
            <hr />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <CardContent>{content}</CardContent>
            </Grid>
        </Card>
    );
};
const CardContent = styled.span`
    font-size: 40px;
    padding: 15px;
`;

export default StyledCard;
