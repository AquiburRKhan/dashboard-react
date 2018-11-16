// @flow
import React ,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import './styles/styles.scss';

class App extends Component<any>{
    render(){
        return (
            <div className="main-container">
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/dashboard" component={ Dashboard } />
                    <Redirect to="/login" />
                </Switch>
            </div>
        )
    }
}

export default App;