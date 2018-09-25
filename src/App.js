// @flow
import React ,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './components/auth/Login';
import Currencies from './components/currencies/Currencies';

class PrivateRoute extends Component<any>{

    render(){
        const { component: Component, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    this.props.isAuthenticated ? (
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

function mapStateToProps(state) {
    return {isAuthenticated: state.auth.isAuthenticated};
}

const ConnectPrivateRoute = connect(mapStateToProps)(PrivateRoute);

class App extends Component<any>{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <ConnectPrivateRoute path="/private" component={Currencies} />
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