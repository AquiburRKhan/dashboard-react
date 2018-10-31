import React from 'react';
import Grid from '@material-ui/core/Grid';

const AuthBox = (props) => {
    return (
        <Grid
            container
            spacing={0}
            justify="center"
            className="auth-outer-div">
            <Grid item xs={12} sm={10} md={8} lg={6} xl={6}>
                <div className="auth-box">
                    {props.children}
                </div>
            </Grid>
        </Grid>
    );
};

export default AuthBox;