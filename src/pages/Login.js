import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAdmin } from "../modules/login"
import PrimaryButton from '../components/buttons/PrimaryButton';
import AuthBox from '../components/auth/AuthBox';
import LoginForm from "./login/LoginForm";

class Login extends Component{
    constructor(props){
        super(props);
        this.goToCurrencies = this.goToCurrencies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    goToCurrencies() {
        this.props.history.push('/currencies');
    }

    handleSubmit(credentials) {
        this.props.loginAdmin({user: credentials.email,company: credentials.companyID,password: credentials.password});
    }

    render(){
        return (
            <AuthBox>
                <h1>Dashboard</h1>
                <LoginForm onSubmit={this.handleSubmit}/>
            </AuthBox>
        )
    }
}

{/*<PrimaryButton variant="contained" handleOnClick={this.handleLoginClick}  text="Login" />*/}
{/*<br/>*/}
{/*<br/>*/}
{/*<PrimaryButton variant="contained" handleOnClick={this.goToCurrencies}  text="Currencies" />*/}

// function mapStateToProps(state) {
//     return {isAuthenticated: state.isAuthenticated};
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAdmin },dispatch)
}

export default connect(null,mapDispatchToProps)(Login);