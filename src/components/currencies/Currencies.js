import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLoggedInUser } from "../../modules/login"
import { Button } from '@material-ui/core';

class Currencies extends Component{

    componentWillMount() {
        if(Object.keys(this.props.loggedInUser).length === 0){
            this.props.getLoggedInUser();
        }
    }

    render(){
        const { loggedInUser } = this.props;

        if(Object.keys(loggedInUser).length === 0){
            return <h1>Loading</h1>
        }

        return (
            <div>
                <Button variant="contained"  color="primary">
                    Currencies component
                </Button>
                <h1>{loggedInUser.email}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {loggedInUser: state.loggedInUser};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getLoggedInUser },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Currencies);