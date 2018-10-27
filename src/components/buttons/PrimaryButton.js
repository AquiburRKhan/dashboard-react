import React from 'react';
import { Button } from '@material-ui/core';

const PrimaryButton = (props) => (
    <Button variant={props.variant} onClick={props.handleOnClick} color="primary">
        {props.text}
    </Button>
);

export default PrimaryButton;