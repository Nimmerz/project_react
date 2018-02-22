// @flow

import {CALL_API, get, remove} from '../../../api';
import {
    GET_TRASH_REQUEST,
    GET_TRASH_SUCCESS,
    GET_TRASH_FAILURE,
    REMOVE_TRASH_REQUEST,
    REMOVE_TRASH_SUCCESS,
    REMOVE_TRASH_FAILURE
} from './constants';


export const getTrashUsageStatistics = () => (dispatch, getState) => {
    const {loaded, pending} = getState().trashContent;
    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                GET_TRASH_REQUEST,
                GET_TRASH_SUCCESS,
                GET_TRASH_FAILURE
            ],
            endpoint: () => get('trash', {})
        }
    });
};


export const fetchTrashStatistic = (params) => {
    return {
        type: GET_TRASH_REQUEST,
        params
    }
};


export const removeTrashUsageStatistics = () => (dispatch, getState) => {
    const {loaded, pending} = getState().removeTrashContent;
    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                REMOVE_TRASH_REQUEST,
                REMOVE_TRASH_SUCCESS,
                REMOVE_TRASH_FAILURE
            ],
            endpoint: () => remove('trash', {})
        }
    });
};


export const removeTrashStatistic = (params) => {
    return {
        type: GET_TRASH_REQUEST,
        params
    }
};

