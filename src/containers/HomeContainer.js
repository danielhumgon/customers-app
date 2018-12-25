import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log('click');
        this.props.history.push('/customers');
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

export default withRouter(HomeContainer);