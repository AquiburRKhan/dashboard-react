// @flow
import React ,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Currencies from './components/currencies/Currencies';
import { getLocalStorageValue } from "./utils/localStorageManagement";

class PrivateRoute extends Component<any>{
    constructor(props){
        super(props);
        this.state = {};
        this.state.token = '';
    }

    componentWillMount() {
        this.setState({ token: getLocalStorageValue('token') });
    }

    render(){
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    this.state.token ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        )
    }
}

class App extends Component<any>{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/currencies" component={Currencies} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        )
    }
}

export default App;



// {
//     this.state.term ?
//         <Route path="/login" component={Login}/> :
//         <Route path="/logout" component={Logout}/>
// }