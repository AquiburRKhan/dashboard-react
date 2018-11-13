// @flow
import React ,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Currencies from './pages/Currencies';
import { getLocalStorageValue } from "./utils/localStorageManagement";
import './styles/styles.scss';

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
//<PrivateRoute path="/" component={Layout} />

class App extends Component<any>{
    render(){
        return (
            <div className="main-container">
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