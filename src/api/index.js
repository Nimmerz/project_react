import urlResolver from './urlResolver';
import {CONTENT_TYPE_JSON} from './const';
import 'isomorphic-fetch';

export const CALL_API = Symbol('Call API');

const callApi = endpoint => endpoint()
    .then(response => response.json().then(json => {
        if (!response.ok) {
            return Promise.reject(json);
        }
        return json;
    }));

export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let {endpoint} = callAPI;
    const {types} = callAPI;

    const actionWith = data => {
        const finalAction = {...action, ...data};
        delete finalAction[CALL_API];
        return finalAction;
    };

    const [requestType, successType, failureType] = types;
    next(actionWith({type: requestType}));

    return callApi(endpoint).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    );
};

const get = (url: string, extraParams: Object = {}) =>
    fetch(urlResolver(url, extraParams));

const POST_CONFIG = {method: 'POST', headers: {'Content-Type': CONTENT_TYPE_JSON}};
const post = (url: string, body: Object, extraParams: Object = {}) =>
    fetch(urlResolver(url, extraParams), {...POST_CONFIG, body: JSON.stringify(body)});

const PUT_CONFIG = {method: 'PUT', headers: {'Content-Type': CONTENT_TYPE_JSON}};
const put = (url: string, body: Object, extraParams: Object = {}) =>
    fetch(urlResolver(url, extraParams), {...PUT_CONFIG, body: JSON.stringify(body)});

const remove = (url: string, extraParams: Object = {}) =>
    fetch(urlResolver(url, extraParams), {method: 'DELETE'});


export {get, post, put, remove};
