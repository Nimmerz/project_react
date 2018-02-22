// @flow

import {
    GET_MODAL_REQUEST,
    GET_MODAL_SUCCESS,
    GET_MODAL_FAILURE
} from './constants';
import type {StatItem} from '../routes/typedef';
import type {UsageStatisticsState} from '../routes/typedef';


const DEFAULT_STATE: UsageStatisticsState = {
    pending: false,
    loaded: false,
    data: []
};

type Action =
    | { type: 'GET_MODAL_REQUEST' }
    | { type: 'GET_MODAL_SUCCESS', response: Array<StatItem> }
    | { type: 'GET_MODAL_FAILURE', error: string };

export default (state: UsageStatisticsState = DEFAULT_STATE, action: Action): UsageStatisticsState => {
    if (action.type === GET_MODAL_REQUEST) {
        return {
            ...state,
            pending: true
        };
    }

    if (action.type === GET_MODAL_SUCCESS) {
        return {
            ...state,
            data: action.response,
            pending: false,
            loaded: true
        };
    }

    if (action.type === GET_MODAL_FAILURE) {
        return {
            ...state,
            data: [],
            pending: false,
            loaded: false
        };
    }

    return state;
};
