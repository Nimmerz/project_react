// @flow

import {CALL_API, get, remove, post} from '../../../api';
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

export const removeTrashUsageStatistics = (deleteSTring) => (dispatch, getState) => {

    return dispatch({
        [CALL_API]: {
            types: [
                REMOVE_TRASH_REQUEST,
                REMOVE_TRASH_SUCCESS,
                REMOVE_TRASH_FAILURE
            ],
            endpoint: () => remove(deleteSTring)
        }
    });
};

export const postData = (path, mess) => (dispatch, getState) => {
    const {loaded, pending} = getState().postTrashContent;
    if (loaded || pending) {
        return null;
    }
    return dispatch({
        [CALL_API]: {
            types: [
                ADD_TRASH_REQUEST,
                ADD_TRASH_SUCCESS,
                ADD_TRASH_FAILURE,
            ],
            endpoint: () => post(path, mess)
        }
    });
};
