import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class Login extends Component{
    render(){
        return (
            <div>
                <Button>
                    Login
                </Button>
            </div>
        )
    }
}

export default Login;

// function mapStateToProps(state) {
//     return {posts: state.posts};
// }
//
// export default connect(mapStateToProps,{fetchPosts})(PostsIndex);