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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.loggedInUser && nextProps.loggedInUser.id){
            this.props.history.push('/currencies');
        }
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

function mapStateToProps(state) {
    return {loggedInUser: state.loggedInUser};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAdmin },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);