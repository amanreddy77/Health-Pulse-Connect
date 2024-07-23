// childActions.js

import axios from 'axios';
import { fetchChildrenFailure, fetchChildrenRequest, fetchChildrenSuccess } from '../Constants/childConstant';

export const fetchChildren = () => {
    return async (dispatch) => {
        dispatch(fetchChildrenRequest());
        try {
            const response = await axios.get('https://hospital-pulse-connect.onrender.com/api/v1/child');
            dispatch(fetchChildrenSuccess(response.data.children));
        } catch (error) {
            dispatch(fetchChildrenFailure(error.message));
        }
    };
};
