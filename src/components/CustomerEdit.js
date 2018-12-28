import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';


const isRequired = value => (
    !value && "This Field is Required"
);

const isNumber = value => (
    isNaN(Number(value)) && "The Value Must Be Numeric"
);

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
           meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
)

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Customer Edit</h2>
            <form action="">

                    <Field 
                        name="name" 
                        component={MyField}
                        validate={isRequired}
                        label="Name"></Field>
                    <Field 
                        name="dni" 
                        component={MyField} 
                        validate={[isRequired, isNumber]}
                        label="ID"></Field>
                    <Field 
                        name="age" 
                        component={MyField}
                        type="number"
                        validate={[isRequired, isNumber]}
                        label="Age"></Field>   
            </form>

        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);