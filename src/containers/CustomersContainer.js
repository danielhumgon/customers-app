import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

const customers = [
    {
        "dni": "12345777",
        "name": "Kate Austen",
        "age": 30
    },
    {
        "dni": "15345777",
        "name": "Hugo Reyes",
        "age": 32
    },
    {
        "dni": "17345777",
        "name": "John Locke",
        "age": 60
    }

];

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCustomers(); 
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
    <div>
        <CustomersList 
            customers={customers} 
            urlPath={'customers/'} 
        />
        <CustomersActions>
            <button onClick={this.handleAddNew}>New Customer</button>
        </CustomersActions> 
    </div>
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Customers List'}
                    body={this.renderBody(customers)}
                    />
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        fetchCustomers: () => dispatch(fetchCustomers())
    }
)

export default withRouter(connect(null, mapDispatchToProps) (CustomersContainer));