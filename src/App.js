import React ,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';

class App extends Component{
    constructor(props){
        super(props);
        // this.state = {'term': false};
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
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