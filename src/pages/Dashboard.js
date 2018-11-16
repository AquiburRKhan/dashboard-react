import React, { Component } from 'react';
import Currencies from './Currencies';
import PrivateRoute from '../components/auth/PrivateRoute';

class Dashboard extends Component{
    componentWillMount(){
        if(this.props.location.pathname === '/dashboard'){
            this.props.history.replace('/dashboard/currencies');
        }
    }

    render(){
        return (
            <div>
                <h1>Home</h1>
                <PrivateRoute path={`${this.props.match.url}/currencies`} component={Currencies} />
            </div>
        )
    }
}

export default Dashboard;