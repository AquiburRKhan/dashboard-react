import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAdmin } from "../modules/login"
import PrimaryButton from '../components/buttons/PrimaryButton';
import Grid from '@material-ui/core/Grid';
import '../styles/styles.scss'

class Login extends Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.goToCurrencies = this.goToCurrencies.bind(this);
    }

    goToCurrencies() {
        this.props.history.push('/currencies');
    }

    handleLoginClick() {
        this.props.loginAdmin({user: 'test1@rehive.com',company: 'test_company_1',password: 'test1234'});
    }

    render(){
        return (
            <div className="auth-outer-div">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <PrimaryButton variant="contained" handleOnClick={this.handleLoginClick}  text="Login" />
                        <br/>
                        <br/>
                        <PrimaryButton variant="contained" handleOnClick={this.goToCurrencies}  text="Currencies" />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {isAuthenticated: state.isAuthenticated};
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAdmin },dispatch)
}

export default connect(null,mapDispatchToProps)(Login);