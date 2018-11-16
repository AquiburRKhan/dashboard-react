import React ,{ Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorageValue } from "../../utils/localStorageManagement";

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

export default PrivateRoute;