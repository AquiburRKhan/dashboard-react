import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAdmin } from "../../redux/actions/auth/loginActions"
import { Button } from '@material-ui/core';

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
            <div>
                <Button variant="contained" onClick={this.handleLoginClick} color="primary">
                    Login
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

// function mapStateToProps(state) {
//     return {isAuthenticated: state.isAuthenticated};
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginAdmin },dispatch)
}

export default connect(null,mapDispatchToProps)(Login);