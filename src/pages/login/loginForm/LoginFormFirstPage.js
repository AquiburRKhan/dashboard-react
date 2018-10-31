import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Validate from './validate/Validate';
import RenderField from '../../../components/form/RenderField';

const LoginFormFirstPage = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="companyID"
                type="text"
                component={RenderField}
                label="Company id"
            />
            <div>
                <button type="submit" className="next">
                    Next
                </button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'loginForm', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate: Validate
})(LoginFormFirstPage)