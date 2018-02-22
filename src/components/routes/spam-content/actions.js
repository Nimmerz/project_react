// @flow

import {CALL_API, get} from '../../../api';
import {
    GET_SPAM_REQUEST,
    GET_SPAM_SUCCESS,
    GET_SPAM_FAILURE
} from './constants';



export const getSpamUsageStatistics = () => (dispatch, getState) => {
    const {loaded, pending} = getState().spamContent;
    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                GET_SPAM_REQUEST,
                GET_SPAM_SUCCESS,
                GET_SPAM_FAILURE
            ],
            endpoint: () => get('spam', {})
        }
    });
};


export const fetchSpamStatistic = (params)=> {
    return {
        type: GET_SPAM_REQUEST,
        params
    }
};

