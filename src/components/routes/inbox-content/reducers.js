// @flow

import {
    GET_INBOX_REQUEST,
    GET_INBOX_SUCCESS,
    GET_INBOX_FAILURE
} from './constants';
import type {StatItem} from '../typedef';
import type {UsageStatisticsState} from '../typedef';


const DEFAULT_STATE: UsageStatisticsState = {
    pending: false,
    loaded: false,
    data: []
};

type Action =
    | { type: 'GET_INBOX_REQUEST' }
    | { type: 'GET_INBOX_SUCCESS', response: Array<StatItem> }
    | { type: 'GET_INBOX_FAILURE', error: string };

export default (state: UsageStatisticsState = DEFAULT_STATE, action: Action): UsageStatisticsState => {
    if (action.type === GET_INBOX_REQUEST) {
        return {
            ...state,
            pending: true
        };
    }

    if (action.type === GET_INBOX_SUCCESS) {
        return {
            ...state,
            data: action.response,
            pending: false,
            loaded: true
        };
    }

    if (action.type === GET_INBOX_FAILURE) {
        return {
            ...state,
            data: [],
            pending: false,
            loaded: false
        };
    }

    return state;
};
