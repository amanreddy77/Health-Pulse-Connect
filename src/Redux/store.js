
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import childReducer from './Reducers/childReducer';

const reducer = combineReducers({
    getchilds: childReducer
})

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;