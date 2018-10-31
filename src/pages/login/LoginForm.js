import React, { Component } from 'react';
import LoginFormFirstPage from './loginForm/LoginFormFirstPage';
import LoginFormSecondPage from './loginForm/LoginFormSecondPage';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 && <LoginFormFirstPage onSubmit={this.nextPage} />}
                {page === 2 && (
                    <LoginFormSecondPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        )
    }
}

export default LoginForm;