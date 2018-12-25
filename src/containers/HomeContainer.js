import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log('click')
    }

    render() {
        return (
            <div>
                
                <AppFrame 
                    header='Home'
                    body={
                        <div>
                            This is the home page
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >Customers List</button>
                            </CustomersActions>
                        </div>
                    }/>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default HomeContainer;