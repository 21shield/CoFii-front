import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './userReducer'
import locationReducer from './locationReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    user: userReducer,
    location: locationReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store