import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAdmin } from "../modules/login"
import { evaluateErrors } from "../utils/errorHandler";
import AuthBox from '../components/auth/AuthBox';
import LoginForm from "./login/LoginForm";

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.errorToast = this.errorToast.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.adminUser && nextProps.adminUser.id){
            this.props.history.push('/dashboard/currencies');
        }
        if(nextProps.error && Object.keys(nextProps.error).length > 0){
            this.errorToast(nextProps.error)
        }
    }

    handleSubmit(credentials) {
        this.props.loginAdmin({user: credentials.email,company: credentials.companyID,password: credentials.password});
    }

    errorToast(error){
        evaluateErrors(error);
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

function mapStateToProps(state) {
    return {
        adminUser: state.loggedInUser.adminUser,
        error: state.loggedInUser.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAdmin },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);