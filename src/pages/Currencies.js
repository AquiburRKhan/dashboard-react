import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoggedInUser } from "../modules/login"
import PrimaryButton from '../components/buttons/PrimaryButton';
import { clearAllLocalStorage } from "../utils/localStorageManagement";

class Currencies extends Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentWillMount() {
        if(Object.keys(this.props.loggedInUser).length === 0){
            this.props.getLoggedInUser();
        }
    }

    logoutUser() {
        clearAllLocalStorage();
        this.props.history.push('/login');
    }

    render(){
        const { loggedInUser } = this.props;

        if(Object.keys(loggedInUser).length === 0){
            return <h1>Loading</h1>
        }

        return (
            <div>
                <PrimaryButton variant="contained" handleOnClick={this.logoutUser} text="Logout" />
                <h1>{loggedInUser.email}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {loggedInUser: state.loggedInUser};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getLoggedInUser },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Currencies);