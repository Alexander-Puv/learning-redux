import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootWatcher } from "../saga";
import countReducer from "./countReducer";
import userReducer from "./userReducer";

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const reducer = {
    countReducer,
    userReducer
}

export const secondStore = configureStore({reducer, middleware})

sagaMiddleware.run(rootWatcher)