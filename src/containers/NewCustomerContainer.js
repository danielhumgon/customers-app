import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { insertCustomer } from './../actions/insertCustomer';
import PropTypes from 'prop-types';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
       return this.props.insertCustomer(values);
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack(); 
    }

    renderBody = () => {
        return <CustomerEdit 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack} />
    }
    render() {
        return (
            <div>
                <AppFrame 
                    header={`New Customer`}
                    body={this.renderBody()}/>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));