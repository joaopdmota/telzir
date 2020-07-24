import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';


interface GridProps {
    container?: boolean;
    direction: 'column' | 'column-reverse' | 'row' | 'row-reverse' | undefined;
    justify: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | undefined;
}
const CustomGrid: FunctionComponent<GridProps> = ({
    container,
    direction,
    justify,
    alignItems,
    children,
}) => (
    <Grid
        container={container}
        direction={direction}
        justify={justify}
        alignItems={alignItems}
    >
        {children}
    </Grid>
);

export default CustomGrid;
