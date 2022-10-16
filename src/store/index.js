import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import thunk from "redux-thunk";

const reducer = {
    cash: cashReducer,
    customers: customerReducer
}

export const store = configureStore({reducer}, composeWithDevTools(applyMiddleware(thunk)));