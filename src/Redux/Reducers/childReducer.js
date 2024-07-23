// childReducers.js

import { FETCH_CHILDREN_REQUEST, FETCH_CHILDREN_SUCCESS, FETCH_CHILDREN_FAILURE } from '../Constants/childConstant';

const initialState = {
    children: [],
    loading: false,
    error: null,
};

const childReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHILDREN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_CHILDREN_SUCCESS:
            return {
                ...state,
                loading: false,
                children: action.payload,
            };
        case FETCH_CHILDREN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default childReducer;
