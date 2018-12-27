import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from 'redux-actions';

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


export const fetchCustomers = createAction(FETCH_CUSTOMERS); 