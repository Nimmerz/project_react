// @flow

import {CALL_API, get} from '../../../api';
import {
    GET_INBOX_REQUEST,
    GET_INBOX_SUCCESS,
    GET_INBOX_FAILURE
} from './constants';



export const getInboxUsageStatistics = () => (dispatch, getState) => {
    const {loaded, pending} = getState().inboxContent;
    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                GET_INBOX_REQUEST,
                GET_INBOX_SUCCESS,
                GET_INBOX_FAILURE
            ],
            endpoint: () => get('inbox', {})
        }
    });
};


export const fetchInboxStatistic = (params)=> {
    return {
        type: GET_INBOX_REQUEST,
        params
    }
};

