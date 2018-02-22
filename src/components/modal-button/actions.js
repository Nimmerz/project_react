// @flow

import {CALL_API, post} from '../../api';
import {
    GET_MODAL_REQUEST,
    GET_MODAL_SUCCESS,
    GET_MODAL_FAILURE
} from './constants';



export const postUsageStatistics = (newEmail: Object) => (dispatch, getState) => {
    const {loaded, pending} = getState().sentModal;
    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                GET_MODAL_REQUEST,
                GET_MODAL_SUCCESS,
                GET_MODAL_FAILURE
            ],
            endpoint: () => post('sent', newEmail)
        }
    });
};


export const postfetchStatistic = (params)=> {
    return {
        type: GET_MODAL_REQUEST,
        params
    }
};
