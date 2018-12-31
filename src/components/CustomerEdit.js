<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';

/*
const isRequired = value => (
    !value && "This Field is Required"
);*/

const isNumber = value => (
    isNaN(Number(value)) && "The Value Must Be Numeric"
);

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "Name Field is Required";

    }

    if (!values.dni) {
        error.dni = "ID Field is Required"
    }

    return error;
};

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
           meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
)

const toNumber = value => value && Number(value);
//Validation
const onlyGrow = (value, previousValue, values) => 
        value && previousValue && (value > previousValue ? value : previousValue);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Customer Edit</h2>
            <form onSubmit={handleSubmit}>

                    <Field 
                        name="name" 
                        component={MyField}
                        label="Name"></Field>
                    <Field 
                        name="dni" 
                        component={MyField} 
                        label="ID"></Field>
                    <Field 
                        name="age" 
                        component={MyField}
                        type="number"
                        validate={isNumber}
                        label="Age"
                        parse={toNumber}
                        normalize={onlyGrow}></Field>

                <CustomersActions>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button onClick={onBack}>Cancel</button>
                </CustomersActions>   
            </form>

        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

=======
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';

/*
const isRequired = value => (
    !value && "This Field is Required"
);*/

const isNumber = value => (
    isNaN(Number(value)) && "The Value Must Be Numeric"
);

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "Name Field is Required";

    }

    if (!values.dni) {
        error.dni = "ID Field is Required"
    }

    return error;
};

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
           meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
)

const toNumber = value => value && Number(value);
//Validation
const onlyGrow = (value, previousValue, values) => 
        value && previousValue && (value > previousValue ? value : previousValue);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Customer Edit</h2>
            <form onSubmit={handleSubmit}>

                    <Field 
                        name="name" 
                        component={MyField}
                        label="Name"></Field>
                    <Field 
                        name="dni" 
                        component={MyField} 
                        label="ID"></Field>
                    <Field 
                        name="age" 
                        component={MyField}
                        type="number"
                        validate={isNumber}
                        label="Age"
                        parse={toNumber}
                        normalize={onlyGrow}></Field>

                <CustomersActions>
                    <button type="submit" disabled={submitting}>Submit</button>
                    <button onClick={onBack}>Cancel</button>
                </CustomersActions>   
            </form>

        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

>>>>>>> 6129ba41db701a6c77d0463cbb36c9f015ddc0a6
export default setPropsAsInitial(CustomerEditForm);