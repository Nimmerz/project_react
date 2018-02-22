// @flow

import React from 'react';
import './style.styl';
import Sigh from '../sign';

const Inputheader = () => {
    return (
        <div className="header__input--main">
            <label className="header__input--label"><Sigh name="search"/></label>
            <input className="header__input" placeholder="Search" type="text" />
            <a href="#" className="header__input--speech"><Sigh name="mic"/></a>
        </div>
    );
};

export default Inputheader;