import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAdmin } from "../../redux/actions/authActions"
import { Button } from '@material-ui/core';

class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleAuthenticationClick = this.handleAuthenticationClick.bind(this);
        this.goToCurrencies = this.goToCurrencies.bind(this);
    }

    goToCurrencies() {
        this.props.history.push('/private');
    }

    handleAuthenticationClick() {
        console.log(this.props.isAuthenticated);
    }

    handleLoginClick() {
        this.props.loginAdmin({user: 'test1@rehive.com',company: 'test_company_1',password: 'test1234'});
    }

    render(){
        return (
            <div>
                <Button variant="contained" onClick={this.handleLoginClick} color="primary">
                    Login
                </Button>
                <br/>
                <br/>
                <Button variant="contained" onClick={this.handleAuthenticationClick} color="primary">
                    authentication state
                </Button>
                <br/>
                <br/>
                <Button variant="contained" onClick={this.goToCurrencies} color="primary">
                    currencies
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {isAuthenticated: state.auth.isAuthenticated};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAdmin },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);