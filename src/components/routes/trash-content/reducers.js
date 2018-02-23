// @flow

import {
    GET_TRASH_REQUEST,
    GET_TRASH_SUCCESS,
    GET_TRASH_FAILURE,
    REMOVE_TRASH_REQUEST,
    REMOVE_TRASH_SUCCESS,
    REMOVE_TRASH_FAILURE,
    ADD_TRASH_REQUEST,
    ADD_TRASH_SUCCESS,
    ADD_TRASH_FAILURE,
} from './constants';
import type {StatItem} from '../typedef';
import type {UsageStatisticsState} from '../typedef';


const DEFAULT_STATE: UsageStatisticsState = {
    pending: false,
    loaded: false,
    data: []
};

type Action =
    | { type: 'GET_TRASH_REQUEST' }
    | { type: 'GET_TRASH_SUCCESS', response: Array<StatItem> }
    | { type: 'GET_TRASH_FAILURE', error: string }
    | { type: 'REMOVE_TRASH_REQUEST' }
    | { type: 'REMOVE_TRASH_SUCCESS', response: Array<StatItem> }
    | { type: 'REMOVE_TRASH_FAILURE', error: string }
    | { type: 'ADD_TRASH_REQUEST' }
    | { type: 'ADD_TRASH_SUCCESS', response: Array<StatItem> }
    | { type: 'ADD_TRASH_FAILURE', error: string };

export default (state: UsageStatisticsState = DEFAULT_STATE, action: Action): UsageStatisticsState => {
    if (action.type === GET_TRASH_REQUEST) {
        return {
            ...state,
            pending: true
        };
    }

    if (action.type === GET_TRASH_SUCCESS) {
        return {
            ...state,
            data: action.response,
            pending: false,
            loaded: true
        };
    }

    if (action.type === GET_TRASH_FAILURE) {
        return {
            ...state,
            data: [],
            pending: false,
            loaded: false
        };
    }

    if (action.type === REMOVE_TRASH_REQUEST) {
        return {
            ...state,
            pending: true
        };
    }

    if (action.type === REMOVE_TRASH_SUCCESS) {
        return {
            ...state,
            data: action.response,
            pending: false,
            loaded: true
        };
    }

    if (action.type === REMOVE_TRASH_FAILURE) {
        return {
            ...state,
            data: [],
            pending: false,
            loaded: false
        };
    }


    if (action.type === ADD_TRASH_REQUEST) {
        return {
            ...state,
            pending: true
        };
    }

    if (action.type === ADD_TRASH_SUCCESS) {
        return {
            ...state,
            data: action.response,
            pending: false,
            loaded: true
        };
    }

    if (action.type === ADD_TRASH_FAILURE) {
        return {
            ...state,
            data: [],
            pending: false,
            loaded: false
        };
    }

    return state;
};
