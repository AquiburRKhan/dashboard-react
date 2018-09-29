import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAdminUser } from "../../redux/actions/dashboard/adminUserActions"
import { Button } from '@material-ui/core';

class Currencies extends Component{

    componentWillMount() {
        if(Object.keys(this.props.adminUser).length === 0){
            this.props.getAdminUser();
        }
    }

    render(){
        const { adminUser } = this.props;

        if(!adminUser){
            return <h1>Loading</h1>
        }

        return (
            <div>
                <Button variant="contained"  color="primary">
                    Currencies component
                </Button>
                <h1>{adminUser.email}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {adminUser: state.adminUser};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAdminUser },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Currencies);