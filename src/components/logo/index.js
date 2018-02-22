// @flow

import React from 'react';
import './style.styl';
import LogoImg from './logo.png';


const Logo = () => {
    return (
        <div className="sidebar__logo">
            <a href="/"><img src={LogoImg} alt="Logo"/></a>
        </div>
    )
};


export default Logo;