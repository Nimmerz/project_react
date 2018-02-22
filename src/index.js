// @flow

import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';

import App from './app';

const dashboard = document.getElementById('dashboard');


if (dashboard !== null) {
    render(
        <HashRouter>
            <App/>
        </HashRouter>,
        dashboard
    );
}