import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame 
                    header={`Customer`}
                    body={<p>Customer Data</p>}/>
            </div>
        );
    }
}

CustomerContainer.propTypes = {

};

export default connect(null, null)(CustomerContainer);