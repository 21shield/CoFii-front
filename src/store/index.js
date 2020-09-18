import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import shopsReducer from './shopsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    user: userReducer,
    location: locationReducer,
    shops: shopsReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store