// childActions.js

export const FETCH_CHILDREN_REQUEST = 'FETCH_CHILDREN_REQUEST';
export const FETCH_CHILDREN_SUCCESS = 'FETCH_CHILDREN_SUCCESS';
export const FETCH_CHILDREN_FAILURE = 'FETCH_CHILDREN_FAILURE';

export const fetchChildrenRequest = () => ({
    type: FETCH_CHILDREN_REQUEST,
});

export const fetchChildrenSuccess = (children) => ({
    type: FETCH_CHILDREN_SUCCESS,
    payload: children,
});

export const fetchChildrenFailure = (error) => ({
    type: FETCH_CHILDREN_FAILURE,
    payload: error,
});
