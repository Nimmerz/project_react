// @flow

import {CALL_API, get} from '../../../api';
import {
    GET_SENT_REQUEST,
    GET_SENT_SUCCESS,
    GET_SENT_FAILURE
} from './constants';



export const getSentUsageStatistics = () => (dispatch, getState) => {
    const {loaded, pending} = getState().sentContent;
    if (loaded || pending) {
        return null;
    }

    return dispatch({
        [CALL_API]: {
            types: [
                GET_SENT_REQUEST,
                GET_SENT_SUCCESS,
                GET_SENT_FAILURE,
            ],
            endpoint: () => get('sent', {})
        },


    });

};


export const fetchSentStatistic = (params)=> {
    return {
        type: GET_SENT_REQUEST,
        params
    }
};


export default store => next => action => {
    const {type} = action;
    const result = next(action);
    switch (type) {
        case GET_SENT_SUCCESS:
            store.dispatch(getSentUsageStatistics(store.getState().filters));
            break;
    }

    return result;
}


// export default store => next => action => {
//     const {type} = action;
//
//     const result = next(action);
//     switch (type) {
//         case GET_SENT_SUCCESS:
//             store.dispatch(loadListAction(store.getState().filters));
//             break;
//     }
//
//     return result;
// }