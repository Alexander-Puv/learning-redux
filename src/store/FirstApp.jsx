import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from './asyncActions/customers';
import { topUpAction, withdrawAction } from './cashReducer';
import { addCustomerAction, removeCustomerAction } from './customerReducer';

export const FirstApp = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

    const topUp = (cash) => {
        dispatch(topUpAction(cash))
    }

    const withdraw = (cash) => {
        dispatch(withdrawAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div>
            <div>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => topUp(Number(prompt()))}>Top up</button>
                <button onClick={() => withdraw(Number(prompt()))}>Withdraw</button>
                <button onClick={() => addCustomer(prompt())}>Add a client</button>
                <button onClick={() => dispatch(fetchCustomers())}>Add clients from data base</button>
            </div>
            {customers.length > 0 ?
                <div>{customers.map(customer => 
                    <div onClick={() => removeCustomer(customer)} key={customer.id}>
                        {customer.name}
                    </div>    
                )}</div>
            :
                <div>No clients</div>
            }
        </div>
    );
}
