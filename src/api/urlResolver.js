// @flow

const apiKey = (): string => (process: Object).env.API_KEY;
const apiRoot = () => 'https://api.mlab.com/api/1/databases/mail/collections/';

export default (url: string, extraParams: Object) => {
    let params = {...extraParams, apiKey: apiKey()};
    return `${apiRoot()}${url}?${Object.entries(params).map(([key, value]) => `${key}=${String(value)}`).join('&')}`
};
