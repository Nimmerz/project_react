// @flow

import React from 'react';
import {withRouter} from 'react-router-dom'
import './style.styl';
import Inputheader from '../input-header';
import LoginHeader from '../login-header';


const getModeFromPathname = (pathname: string) => {
    if (pathname === '/inbox-content') {
        return 'header';
    } else if (pathname === '/sent-content') {
        return 'header__sent';
    }
    else if (pathname === '/spam-content') {
        return 'header__spam';
    }
    else if (pathname === '/trash-content') {
        return 'header__trash';
    }
};


const Header = (props) => {
    const {location: {pathname} = {}} = props;
    const mode: any = getModeFromPathname(pathname);
    return (
        <div className={'header ' + mode}>
            <Inputheader/>
            <LoginHeader/>
        </div>
    );
};

export default withRouter(Header);
