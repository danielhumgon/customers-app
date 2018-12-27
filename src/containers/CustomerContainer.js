import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame 
                    header={`Customer  ${this.props.dni}`}
                    body={<p>Customer Data "{this.props.customer.name}"</p>}/>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: state.customers.find( c => c.dni === props.dni)
}); 

export default connect(mapStateToProps, null)(CustomerContainer);