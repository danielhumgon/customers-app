import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';
import { getCustomerByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerContainer extends Component {

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} 
                            onSubmit={this.handleSubmit} 
                            onBack={this.handleOnBack}/>
            }
        }/>
    )

    //<p>Customer Data "{this.props.customer.name}"</p>

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Customer  ${this.props.dni}`}
                    body={this.renderBody()}/>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
}); 

export default  withRouter(connect(mapStateToProps, null)(CustomerContainer));