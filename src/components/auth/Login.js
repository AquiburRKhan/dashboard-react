import React , { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component{
    render(){
        return (
            <div>
              Login
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