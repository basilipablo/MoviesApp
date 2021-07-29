import { createStore, applyMiddleware } from "redux"; //We create the local store
import rootReducer from "../reducers/index"; //the reducer to connect
import thunk from "redux-thunk"; //So we can use the applymiddleware

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;