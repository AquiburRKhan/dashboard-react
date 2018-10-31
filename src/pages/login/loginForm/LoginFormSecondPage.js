import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Validate from './validate/Validate';
import RenderField from '../../../components/form/RenderField';

const LoginFormSecondPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                type="email"
                component={RenderField}
                label="Email" />
            <Field
                name="password"
                type="password"
                component={RenderField}
                label="Password"
            />
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
                </button>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                </button>
            </div>
        </form>
    )
};
export default reduxForm({
    form: 'loginForm', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: Validate
})(LoginFormSecondPage)