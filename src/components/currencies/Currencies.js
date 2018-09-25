import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from '@material-ui/core';

class Currencies extends Component{
    constructor(props){
        super(props);
        console.log(props)
    }


    render(){
        return (
            <div>
                <Button variant="contained"  color="primary">
                    Currencies component
                </Button>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {isAuthenticated: state.auth.isAuthenticated};
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ loginAdmin },dispatch)
// }

export default connect()(Currencies);